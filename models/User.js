import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profile:{
        type: String,
        required: true,
    },
}, {timestamps: true})

// // mongoose.model = {}
// const User = mongoose.model("User", UserSchema)
// User.createIndexes();
mongoose.models = {}

export default mongoose.model("User", UserSchema)