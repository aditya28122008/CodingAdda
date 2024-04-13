import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getCurrentUser } from "../../actions/server-actions";
import User from "@/models/User";

export async function GET(request) {
  const headersList = headers();
  // const token = headersList.get("auth-token");
  // if (!token) {
  //   return NextResponse.json({ err: "token_not_valid" });
  // }
  // try {
  //   const data = Jwt.verify(token, process.env.JWT_SECRET);
  //   return NextResponse.json(data);
  // } catch (error) {
  //   console.log(error);
  // }
  const user = await getCurrentUser(headersList.get("auth-token"));
  if (user) {
    const userData = await User.findById(user.user.id);
    return NextResponse.json(userData);
  } else {
    return NextResponse.json(
      { success: false, err: "Unauthorized" },
      { status: 401 }
    );
  }
}
