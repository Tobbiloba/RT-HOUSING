import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    // authentication: {
    //     password: {type: String, required: true, select: false},
    //     salt: {type: String, select: false},
    //     sessionToken: {type: String, select: false}
    // },
    firstname: {type: String, required: false},
    lastname: {type: String, required: false},
    phone_number: {type: String, required: false},
    age: {type: String, required: false},
    country: {type: String, required: false},
    state: {type: String, required: false},
    city: {type: String, required: false},
    street: {type: String, required: false},
})


export const UserModel = mongoose.model('User', UserSchema);

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({email});
export const getUserByUsername = (username: string) => UserModel.findOne({username});
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken': sessionToken
})
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) => new UserModel(values)
    .save().then((user: any) => user.toObject())

export const deleteUserById = (id: string) => UserModel.findOneAndDelete({_id: id})

export const updateUserById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values)