import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    avatar: { type: String, required: false },
    socials: {type: [String], required: false},
    authentication: {
        password: {type: String, required: true, select: false},
        salt: {type: String, required: true, select: false},
    },
});

const userModel = mongoose.model("User", UserSchema);

export const getUsers = () => userModel.find();
export const getUserByEmail = (email) => userModel.findOne({email});
export const getUserUsername = (username) => userModel.findOne({username})
export const registerUser = (values) => new userModel(values).save().then((user) => user.toObject())
export const getUserById = (id) => userModel.findOne({_id: id}).populate("allProperties");
export default userModel;
