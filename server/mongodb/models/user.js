import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
    firstname: {type: String, required: false},
    lastname: {type: String, required: false},
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    avatar: { type: String, required: false },
    authentication: {
        password: {type: String, required: true, select: false},
        salt: {type: String, required: true, select: false},
    },
    created_at: { type: Date, default: Date.now },
});

const userModel = mongoose.model("User", UserSchema);

export const getUsers = () => userModel.find();
export const getUserByEmail = (email) => userModel.findOne({email});
export const getUserUsername = (username) => userModel.findOne({username})
export const registerUser = (values) => new userModel(values).save().then((user) => user.toObject())
export const getUserById = (id) => userModel.findOne({"_id": id});
export const updateUserById = (id, values) => userModel.findByIdAndUpdate(id, values)
export default userModel;
