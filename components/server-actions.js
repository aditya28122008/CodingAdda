"use server";
import mongoose from "mongoose";
const uri = process.env.MONGO_URI;
const connect = async () => {
  await mongoose.connect(uri);
  console.log("Connected to mongoos");
};
export default connect;
