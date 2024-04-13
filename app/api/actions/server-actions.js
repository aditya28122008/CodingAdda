import Jwt from "jsonwebtoken";

export async function getCurrentUser(token) {
  try {
    const data = Jwt.verify(token, process.env.JWT_SECRET);
    return data
  } catch (error) {
    return false
  }
}
