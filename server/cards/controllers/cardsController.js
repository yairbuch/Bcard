const { handleError } = require("../../utils/errorHandler");
const normalizeCard = require("../helpers/normalizeCards");
const validateCard = require("../models/joi/validateCard");
const lodash = require("lodash");
const Card = require("../models/mongoose/Card");
const DeletedCards = require("../models/mongoose/DeleteCards");
const isBizNumberExists = require("../helpers/isBizNumberExist");

const getCards = async (req, res) => {
  try {
    const cards = await Card.find().sort({ createdAt: "ascending" });
    Promise.resolve(cards);
    return res.send(cards);
  } catch (error) {
    return handleError(res, 404, `Mongoose Error: ${error.message}`);
  }
};

const getCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findById(cardId);
    if (!card) throw new Error("could not find this card in the database");
    Promise.resolve(card);
    return res.send(card);
  } catch (error) {
    return handleError(res, 404, `Mongoose Error: ${error.message}`);
  }
};

const getMyCards = async (req, res) => {
  try {
    const user = req.user;
    const cards = await Card.find({ user_id: user._id });
    if (!cards) throw new Error("could not find any card in the database");
    Promise.resolve(cards);
    return res.send(cards);
  } catch (error) {
    return handleError(res, 404, `Mongoose Error: ${error.message}`);
  }
};

const createCard = async (req, res) => {
  try {
    const card = req.body;
    const user = req.user;

    if (!user.isBusiness)
      throw new Error(
        "You must be a business type user in order to create a new business card"
      );

    const { error } = validateCard(card);
    if (error)
      return handleError(res, 400, `joi error: ${error.details[0].message}`);

    const normalizedCard = await normalizeCard(card, user._id);

    const cardToDB = new Card(normalizedCard);
    const cardFromDB = await cardToDB.save();
    Promise.resolve(cardFromDB);
    return res.send(cardFromDB);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const EditCard = async (req, res) => {
  try {
    const card = req.body;
    const { cardId } = req.params;
    const user = req.user;

    if (user._id != card.user_id) {
      const message =
        "Authorization Error: Only the user who created the business card can update its details";
      return handleError(res, 403, message);
    }

    const { error } = validateCard(card);
    if (error)
      return handleError(res, 400, `joi error: ${error.details[0].message}`);

    const normalizedEditedCard = await normalizeCard(card);

    const newcard = await Card.findByIdAndUpdate(cardId, normalizedEditedCard, {
      new: true,
    });

    Promise.resolve(newcard);
    return res.send(newcard);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const LikeCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const user = req.user;

    if (!user) throw new Error("only registered user can do like to cards");

    const card = await Card.findById(cardId);

    if (!card)
      throw new Error(
        "could not change card likes because a card with that id cannot be found in the database"
      );

    const cardLikes = card.likes.find((item) => item === user._id);
    if (!cardLikes) {
      card.likes.push(user._id);
      const cardFromDB = await card.save();
      Promise.resolve(cardFromDB);
      return res.send(cardFromDB);
    }

    const filteredCard = card.likes.filter((item) => item !== user._id);
    card.likes = filteredCard;
    const cardFromDB = await card.save();
    Promise.resolve(cardFromDB);
    return res.send(cardFromDB);
  } catch (error) {
    return handleError(res, 404, `Mongoose Error: ${error.message}`);
  }
};

const DeleteCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const user = req.user;

    const cardFRomClient = await Card.findById(cardId);

    if (!cardFRomClient)
      throw new Error(
        "could not delete this card because a card with that id cannot be found in the database"
      );

    if (!user.isAdmin && user._id != cardFRomClient.user_id)
      throw new Error(
        "only admin user or the creator of this business card can delete it"
      );

    const card = await Card.findByIdAndDelete(cardId);
    const cardForArchive = lodash.pick(card, "title", "subtitle", "email");
    const archivedCollection = new DeletedCards(cardForArchive);
    const archivedFromDB = await archivedCollection.save();

    Promise.resolve(archivedFromDB);
    return res.send(archivedFromDB);
  } catch (error) {
    return handleError(res, 404, `Mongoose Error: ${error.message}`);
  }
};

const changeBizNumber = async (req, res) => {
  try {
    const { cardId } = req.params;
    const user = req.user;
    const { bizNumber } = req.body;
    console.log(bizNumber);

    if (!user.isAdmin)
      throw new Error(
        "Authorization Error: you must be an admin type user to change this business number"
      );

    const newBizNumber = await isBizNumberExists(bizNumber);
    console.log(2);
    const card = await Card.findByIdAndUpdate(
      cardId,
      { bizNumber: newBizNumber },
      { new: true }
    );

    if (!card)
      throw new Error("A card with this ID cannot be found in the database");

    Promise.resolve(card);
    return res.send(card);
  } catch (error) {
    return handleError(res, 404, `Mongoose Error: ${error.message}`);
  }
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.getMyCards = getMyCards;
exports.createCard = createCard;
exports.EditCard = EditCard;
exports.LikeCard = LikeCard;
exports.DeleteCard = DeleteCard;
exports.changeBizNumber = changeBizNumber;
