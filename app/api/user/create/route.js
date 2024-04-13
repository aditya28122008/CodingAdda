import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import fs from 'fs/promises'
import Jwt from "jsonwebtoken";

export async function POST(request) {
  const userData = await request.formData();
  let profile
  if(!userData.get("profile")){
    profile = "/media/user/profile/blank.png"
  }
  else{
    const img = await userData.get("profile");
    const bytes = await img.arrayBuffer();
    const buffer = Buffer.from(bytes);
    profile = `/media/user/profile/${Date.now().toString().replace(" ", "_")}_${img.name.replace(" ", "_").toString()}`
    const written = await fs.writeFile(`./public${profile}`, buffer, (err)=>{
      if(err){
        console.log(err);
      }
      else{
        return true
      }
    })
  }
  const user = {
    name: await userData.get("name"),
    email: await userData.get("email"),
    username: await userData.get("username"),
    password: await userData.get("password"),
  };
  //   console.log(userData);
  const eUser = await User.findOne({ email: user.email });
  const nUser = await User.findOne({ username: user.username });
  //   console.log(eUser, nUser);

  if (eUser === null && nUser === null) {
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(user.password, salt);
    const createdUser = await User.create({
      name: user.name,
      email: user.email,
      username: user.username,
      password: secPass,
      profile: profile,
    });
    const jwtData = {
      user: {
        id: createdUser._id
      }
    }
    const token = Jwt.sign(jwtData, process.env.JWT_SECRET)
    // console.log(user._id);
    return NextResponse.json({ success: true, token }, { status: 200 });
  } else {
    console.log(eUser._id.toString());
    return NextResponse.json({ error: "user_exists" }, { status: 409 });
  }
}
