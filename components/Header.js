"use client";
import { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import userContext from "@/context/userContext";
const Header = () => {
  const usContext = useContext(userContext);
  const dropProf = () => {
    document.getElementById("profDrop").classList.toggle("-translate-y-96");
    document.getElementById("profileDown").classList.toggle("-rotate-180");
  };
  const { authenticated, fetchUser, user } = usContext;
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <header className="text-gray-600 md:fixed md:top-0 md:left-0 md:right-0 md:shadow-md body-font z-50 md:bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          prefetch
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            height={40}
            width={40}
            quality={40}
            src={"/Main Logo.svg"}
            alt=""
          />
          <span className="ml-3 text-xl">Coding Adda</span>
        </Link>
        <nav className="md:mx-auto mx-auto flex flex-wrap items-center text-base justify-center md:mr-12">
          <Link
            prefetch
            href={"/"}
            className="mr-5 hover:text-pink-300 text-pink-500 cursor-pointer font-bold"
          >
            Home
          </Link>
          <Link
            prefetch
            href={"/about"}
            className="mr-5 hover:text-pink-300 text-pink-500 cursor-pointer font-bold"
          >
            About Us
          </Link>
          <Link
            prefetch
            href={"/blogs"}
            className="mr-5 hover:text-pink-300 text-pink-500 cursor-pointer font-bold"
          >
            Our Blogs
          </Link>
        </nav>
        {authenticated ? (
          <div className="absolute whitespace-nowrap right-0">
            <button
              className="flex transition-all duration-500 justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-600 md:px-2 md:py-1 py-0.5 px-1 rounded-xl"
              id="profDropToggle"
              onClick={() => dropProf()}
            >
              <img
                src={`${user.profile}`}
                alt=""
                className="md:h-12 h-8 w-8 md:w-12 rounded-full border-2 object-cover object-center dark:border-white border-pink-600 mr-1 transition-all duration-500"
              />
              <img
                src={"dropDown.png"}
                alt=""
                className="h-3 w-3 mx-auto my-1 dark:invert md:ml-1 transition-all duration-500"
                id="profileDown"
              />
            </button>
            <div
              className="absolute bg-white text-pink-600 border-pink-400 border-2 px-3 py-3 rounded-xl top-20 md:right-4 right-0 transition-all duration-500 w-fit -translate-y-96"
              id="profDrop"
            >
              <ul>
                <li className="my-1 w-full rounded-xl hover:text-pink-400 duration-500 py-2 text-center cursor-pointer">
                  <button
                    onClick={() => {
                      localStorage.removeItem("CodeUser");
                      toast.success("Logged Out Successfully");
                      fetchUser();
                      redirect("/");
                    }}
                  >
                    Logout
                  </button>
                </li>
                <hr className="bg-pink-500 h-[0.12rem] rounded-md" />
                <li className="my-1 w-full rounded-xl hover:text-pink-400 py-2 text-center cursor-pointer">
                  <Link prefetch href="/edit-profile">
                    Edit Profile
                  </Link>
                </li>
                <hr className="bg-pink-500 h-[0.12rem] rounded-md" />
                <li className="my-1 w-full rounded-xl hover:text-pink-400 py-2 text-center cursor-pointer">
                  <Link prefetch href={`/profile/${user.username}`}>
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>{" "}
          </div>
        ) : (
          <Link
            prefetch
            href={"/login"}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Log In
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
