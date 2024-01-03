import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone_no: { type: String, required: true },
    avatar: { type: String, required: true },
    authentication: {
        password: {type: String, required: true, select: false},
        salt: {type: String, required: true, select: false},
    },
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
});

const userModel = mongoose.model("User", UserSchema);

export const getUsers = () => userModel.find();
export const getUserByEmail = (email) => userModel.findOne({email});
export const getUserUsername = (username) => userModel.findOne({username})
export const registerUser = (values) => new userModel(values).save().then((user) => user.toObject())
export const getUserById = (id) => userModel.findOne({_id: id}).populate("allProperties");
export default userModel;
