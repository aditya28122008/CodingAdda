/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { redirect } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import userContext from "@/context/userContext";
import Link from "next/link";

const Login = () => {
  const usContext = useContext(userContext);
  const { fetchUser } = usContext;
  useEffect(() => {
    if(localStorage.getItem("CodeUser")){
      redirect("/")
    }
  }, [])
  
  const handleSubmit = async (e) => {
    const data = { username: e.get("username"), password: e.get("password") };
    const response = await fetch("/api/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("CodeUser", json.token);
      toast.success("Logged in Successfully");
      fetchUser();
      redirect("/");
    } else {
      toast.error("Invalid Credentials");
    }
  };
  return (
    <div className="scale-110">
      <form className="max-w-sm mx-auto" action={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            required
          />
          <p className="text-sm cursor-pointer text-center mt-2 -mb-2 hover:underline hover:underline-offset-4 text-cyan-600">
            <Link href={"/signup"}>Not having an account? Create it!</Link>
          </p>
        </div>
        <button
          type="submit"
          className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
