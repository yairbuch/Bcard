// import React, { useEffect } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import useHandleUser from "../hooks/useHandleUser";

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   const { /* handleGetAllUsersInfo, */ value } = useHandleUser();
//   const { filteredUsers } = value;

//   //   useEffect(() => {
//   //     handleGetAllUsersInfo();
//   //   }, []);
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {filteredUsers?.map((user, key) => (
//             <TableRow
//               key={key}
//               sx={{
//                 "&:last-child td, &:last-child th": {
//                   border: 0,
//                 },
//               }}
//             >
//               <TableCell component="th" scope="row">
//                 {user.email}
//               </TableCell>
//               <TableCell align="right">{user.phone}</TableCell>
//               <TableCell align="right">{user.phone}</TableCell>
//               <TableCell align="right">{user.phone}</TableCell>
//               <TableCell align="right">{user.phone}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// // import React, { useEffect } from "react";
// // import { styled } from "@mui/material/styles";
// // import Table from "@mui/material/Table";
// // import TableBody from "@mui/material/TableBody";
// // import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// // import TableContainer from "@mui/material/TableContainer";
// // import TableHead from "@mui/material/TableHead";
// // import TableRow from "@mui/material/TableRow";
// // import Paper from "@mui/material/Paper";
// // import useHandleUser from "../hooks/useHandleUser";

// // const StyledTableCell = styled(TableCell)(({ theme }) => ({
// //   [`&.${tableCellClasses.head}`]: {
// //     backgroundColor: theme.palette.common.black,
// //     color: theme.palette.common.white,
// //   },
// //   [`&.${tableCellClasses.body}`]: {
// //     fontSize: 14,
// //   },
// // }));

// // const StyledTableRow = styled(TableRow)(({ theme }) => ({
// //   "&:nth-of-type(odd)": {
// //     backgroundColor: theme.palette.action.hover,
// //   },
// //   // hide last border
// //   "&:last-child td, &:last-child th": {
// //     border: 0,
// //   },
// // }));

// // export default function CustomizedTables() {
// //   const { handleGetAllUsersInfo, value } = useHandleUser();
// //   const { filteredUsers } = value;

// //   useEffect(() => {
// //     handleGetAllUsersInfo();
// //   }, []);
// //   return (
// //     <TableContainer component={Paper}>
// //       <Table sx={{ minWidth: 700 }} aria-label="customized table">
// //         <TableHead>
// //           <TableRow>
// //             <StyledTableCell>Name</StyledTableCell>
// //             <StyledTableCell align="right">Email</StyledTableCell>
// //             <StyledTableCell align="right">Phone</StyledTableCell>
// //             <StyledTableCell align="right">Address</StyledTableCell>
// //             <StyledTableCell align="right">Business</StyledTableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {filteredUsers?.map((user, key) => (
// //             <StyledTableRow key={key}>
// //               <StyledTableCell component="th" scope="row">
// //                 {`${user.name.first} ${user.name.last}`}
// //               </StyledTableCell>
// //               <StyledTableCell align="right">{user.email}</StyledTableCell>
// //               <StyledTableCell align="right">{user.phone}</StyledTableCell>
// //               <StyledTableCell align="right">{`${user.address.city},${user.address.street} ${user.address.houseNumber}`}</StyledTableCell>
// //               <StyledTableCell align="right">{user.isBusiness}</StyledTableCell>
// //             </StyledTableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>
// //   );
// // }
import React from "react";

const Table = () => {
  return <div>Table</div>;
};

export default Table;
