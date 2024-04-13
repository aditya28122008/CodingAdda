import { NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import User from "@/models/User";
import bcrypt from "bcryptjs";


export async function POST(request) {
  const data = await request.json();
  // console.log(data);
  let user = await User.findOne({ username: data.username });
  if (!user) {
    return NextResponse.json({ err: "invalid_credentials", success: false }, {status: 404});
  }
  const passwordCompare = await bcrypt.compare(data.password, user.password);
  if (!passwordCompare) {
    return NextResponse.json({ err: "invalid_credentials", success: false }, { status: 401 });
  }
  const userData = {
    user: {
      id: user._id,
    },
  };
  const token = Jwt.sign(userData, process.env.JWT_SECRET);
  return NextResponse.json({ token, success: true }, { status: 200 });
}