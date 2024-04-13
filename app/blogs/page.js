"use client";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "./blog-server-actions";
import BlogItem from "@/components/blog/BlogItem";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const any = async () => {
      const pos = await getAllPosts();
      setPosts(pos);
    };
    any();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {posts.map((post) => {
                return <BlogItem post={post} key={post._id} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
