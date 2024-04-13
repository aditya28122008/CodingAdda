import mongoose from "mongoose";

import { Schema } from "mongoose";

const PostSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  blogImg: {
    type: String,
    required: true,
  },
}, {timestamps: true});

mongoose.models = {}

export default mongoose.model("Posts", PostSchema)