"use client";
import { getPostUser } from "@/app/blogs/blog-server-actions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const BlogItem = (props) => {
  const [author, setAuthor] = useState({});
  const ref = useRef(null);
  const [posCont, setPosCont] = useState("");
  const content = async () => {
    setTimeout(() => {
      // console.log(ref.current.innerHTML);
      const txt = document.createElement("div");
      txt.innerHTML = props.post.content;
      setPosCont(txt.innerText.slice(0, 80));
      // ref.current.innerHTML = ref.current.innerText;
    }, 100);
  };
  useEffect(() => {
    const postUser = async () => {
      const ur = await getPostUser(props.post.author.toString());
      setAuthor(ur);
    };
    // console.log(props.post.author);
    postUser();
    content();
    //   console.log("Hey There");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="relative">
            <Image
              width={1600}
              height={800}
              quality={100}
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={props.post.blogImg}
              alt="blog"
            />
          </div>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {props.post.title}
            </h1>
            <div className="flex space-x-2 items-center">
              <Image
                width={100}
                height={100}
                src={author.profile}
                className="h-7 w-7 rounded-full object-cover object-center"
                alt=""
              />
              <h2 className="tracking-widest title-font font-medium mb-1">
                {author.name}
              </h2>
            </div>
            <p className="leading-relaxed mb-3">{posCont}...</p>
            <div className="flex items-center flex-wrap ">
              <Link
                href={`/blogs/${props.post._id.toString()}`}
                className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                {props.post.createdAt.toString().slice(0, 15)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
