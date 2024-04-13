"use server"
import User from "@/models/User";
import Post from "@/models/Post"
export async function getAllPosts (){
    const posts = await Post.find();
    // console.log(posts);
    // const json = posts
    return posts
}

export async function getPostUser(id){
    const ur = await User.findById(id)
    return ur
}