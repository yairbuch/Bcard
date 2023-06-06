import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAxios from "../../hooks/useAxiosInterceptors";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import normalizeEditUser from "../helpers/normalization/normalizeEditUser";
import normalizeUser from "../helpers/normalization/normalizeUser";
import {
  FullUserType,
  Login,
  RegistrationForm,
  TokenType,
  UserMapToModelType,
} from "../models/types/userTypes";
import { useUser } from "../providers/UserProvider";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/LocalStorageService";
import {
  ChangeUserStatus,
  deleteUser,
  editUser,
  getAllUsersInfo,
  getUserInfo,
  login,
  signup,
} from "../services/usersApiService";

type ErrorType = null | string;

const useHandleUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [userInfo, setUserInfo] = useState<FullUserType | null>(null);
  const [AllUsersInfo, setAllUsersInfo] = useState<FullUserType[] | null>(null);
  const { setUser, setToken, user } = useUser();
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilter] = useState<FullUserType[] | null>(null);
  const [searchParams] = useSearchParams();

  useAxios();

  const snack = useSnack();
  const navigate = useNavigate();

  const requestStatus = useCallback(
    (
      loading: boolean,
      errorMessage: string | null,
      user: null | TokenType = null,
      userInfo: null | FullUserType = null,
      AllUsersInfo: null | FullUserType[] = null
    ) => {
      setLoading(loading);
      setError(errorMessage);
      setUser(user);
      setUserInfo(userInfo);
      setAllUsersInfo(AllUsersInfo);
    },
    [setUser, setUserInfo, setAllUsersInfo]
  );

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (AllUsersInfo) {
      setFilter(
        AllUsersInfo.filter(
          (user) =>
            user.name.first.includes(query) || user.name.last.includes(query)
          // String(user.isBusiness)
        )
      );
    }
  }, [AllUsersInfo, query]);

  // const handleLogin = useCallback(
  //   async (user: Login) => {
  //     try {
  //       setLoading(true);
  //       const token = await login(user);
  //       setTokenInLocalStorage(token);
  //       setToken(token);
  //       const userFromLocalStorage = getUser();
  //       requestStatus(false, null, userFromLocalStorage);
  //       navigate(ROUTES.ROOT);
  //     } catch (error) {
  //       if (typeof error === "string") requestStatus(false, error, null);
  //     }
  //   },
  //   [setToken, navigate, requestStatus]
  // );

  const handleLogin = useCallback(
    async (user: Login) => {
      try {
        if (isBlocked) {
          snack("error", "Your account is blocked. Please try again later.");
          return;
        }

        setLoading(true);
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        requestStatus(false, null, userFromLocalStorage);
        navigate(ROUTES.ROOT);
        setFailedAttempts(0);
      } catch (error) {
        if (typeof error === "string") {
          requestStatus(false, error, null);
          snack("error", "Incorrect email/password");

          setFailedAttempts((prevAttempts) => prevAttempts + 1);

          if (failedAttempts >= 2) {
            setIsBlocked(true);
            snack(
              "error",
              "Too many failed attempts. Your account is blocked for 1 minute."
            );

            setTimeout(() => setIsBlocked(false), 60 * 1000);
          }
        }
      }
    },
    [setToken, navigate, requestStatus, snack, isBlocked, failedAttempts]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (user: RegistrationForm) => {
      try {
        setLoading(true);
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await handleLogin({ email: user.email, password: user.password });
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    [handleLogin, requestStatus]
  );

  const handleGetAllUsersInfo = useCallback(async () => {
    try {
      setLoading(true);
      const AllUsersInfo = await getAllUsersInfo();
      requestStatus(false, null, user, null, AllUsersInfo);
      return AllUsersInfo;
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleGetUserInfo = async (userId: string) => {
    try {
      setLoading(true);
      const userInfo = await getUserInfo(userId);
      requestStatus(false, null, user, userInfo);
      return userInfo;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleUpdateUser = useCallback(
    async (userFromClient: UserMapToModelType) => {
      try {
        setLoading(true);
        const normalizedUser = normalizeEditUser(userFromClient);
        const userInfoFromServer = await editUser(normalizedUser);
        setUserInfo(userInfoFromServer);
        requestStatus(false, null, null, userInfoFromServer);
        snack("success", "The user details has been successfully updated");
        navigate(ROUTES.MY_CARDS);
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const handleChangeUserStatus = useCallback(
    async (userId: string | undefined) => {
      try {
        const user = await ChangeUserStatus(userId);
        setUserInfo(user);
        // requestStatus(false, null, null, user);
        snack("success", "The user status has been successfully changed");
        return user;
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const handleDeleteUser = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      await deleteUser(userId);
      snack("success", "The user has been successfully deleted");
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const value = useMemo(() => {
    return {
      isLoading,
      error,
      user,
      userInfo,
      AllUsersInfo,
      filteredUsers,
      setAllUsersInfo,
      setUser,
      setUserInfo,
    };
  }, [
    isLoading,
    error,
    user,
    userInfo,
    AllUsersInfo,
    filteredUsers,
    setAllUsersInfo,
    setUser,
    setUserInfo,
  ]);

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUserInfo,
    handleUpdateUser,
    handleGetAllUsersInfo,
    handleChangeUserStatus,
    handleDeleteUser,
  };
};

export default useHandleUser;
