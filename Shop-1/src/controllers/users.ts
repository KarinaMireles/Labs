import { reqRes, reqResNext } from "../utils/interfaces";
import { UserNotFoundError } from "../utils/errors";
import User from "../models/Users";

// CREATE

export const postUser: reqRes = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
};

// READ ALL

export const getUsers: reqRes = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send("Bad Request");
  }
};

// READ ONE

export const getUser: reqRes = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new UserNotFoundError();
    res.status(200).send(user);
  } catch (err) {
    let status = { code: 500, message: "User not Found" };
    if (err instanceof UserNotFoundError) {
      status = { code: 404, message: err.message };
    }
    res.status(status.code).send(status.message);
  }
};

// UPDATE

export const updateUser: reqRes = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    if (!user) throw new UserNotFoundError();
    console.log(req.body);
    if (req.body.displayName) user.displayName = req.body.displayName;
    if (req.body.photoURL) user.photoURL = req.body.photoURL;
    if (req.body.darkTheme === true) user.darkTheme = true;
    if (req.body.darkTheme === false) user.darkTheme = false;
    user.save();
    res.status(200).send(user);
  } catch (err) {
    let status = { code: 500, message: "Server Error" };
    if (err instanceof UserNotFoundError) {
      status = { code: 404, message: err.message };
    }
    res.status(status.code).send(status.message);
  }
};

// DESTROY

export const deleteUser: reqRes = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    let status = { code: 500, message: "User Not Found" };
    res.status(status.code).send(status.message);
  }
};
