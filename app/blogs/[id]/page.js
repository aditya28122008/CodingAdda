"use client"
import {useEffect, useState} from "react";
import { getPost } from "./post-server-actions";
import { getPostUser } from "../blog-server-actions";

const Post = ({ params }) => {
  const [post, setPost] = useState({})
  const [author, setAuthor] = useState({})
  const [date, setDate] = useState("")
  useEffect(() => {
    const fetPos = async ()=>{
      const post = await getPost(params.id)
      const user = await getPostUser(post.author)
      setPost(post)
      setDate(post.createdAt.toString())
      setAuthor(user)
    }
    fetPos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="container mx-auto mt-10 h-full">
      <div className="p-8 shadow-md rounded-lg">
        <h1 className="text-6xl font-bold mb-6 text-center">{post.title}</h1>
        <p className="text-gray-600 mb-4">Published {date}</p>
        <div className="mb-6">
          <div className="text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
        <p className="text-gray-700 mb-4">
          Written by <span className="font-semibold text-pink-600 hover:underline cursor-pointer hover:underline-offset-4">{author.name}</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
