"use server"

import Post from "@/models/Post"

export async function getPost(id){
    const post = await Post.findOne({_id: id})
    return post
}