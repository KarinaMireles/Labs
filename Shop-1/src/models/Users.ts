import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    displayNamename: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String,
    },
    darkTheme: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", SubGenreSchema);
export default User;
