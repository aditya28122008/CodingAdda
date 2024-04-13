import { NextResponse } from "next/server";
import Post from "@/models/Post";
import { getCurrentUser } from "../../actions/server-actions";
import { headers } from "next/headers";
import fs from "fs/promises";

export async function POST(request) {
  const headerList = headers();
  const user = await getCurrentUser(headerList.get("auth-token"));
  // console.log(user);
  if (user) {
    let post = await request.formData();
    const blogImg = post.get("blogImg");
    const bytes = await blogImg.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const blogImgName = `/media/blogs/${Date.now()}_${blogImg.name
      .replace(" ", "_")
      .toString()}`;
    const written = await fs.writeFile(
      `./public/${blogImgName}`,
      buffer,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          return true;
        }
      }
    );

    const add = await Post.create({
      title: post.get("title"),
      content: post.get("content"),
      desc: post.get("desc"),
      author: user.user.id,
      blogImg: blogImgName,
    });
    return NextResponse.json({ success: true, add }, { status: 200 });
  }
  else{
    return NextResponse.json({ success: false, err: "Unauthorized" }, { status: 401 });
  }
}
