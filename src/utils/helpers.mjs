import bcrypt from "bcrypt";
import { jwtDecode } from "jwt-decode";
import { User } from "../mongoose/schemas/user.mjs";

const saltRounds = 10;

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (plain, hashed) =>
  bcrypt.compareSync(plain, hashed);

export const generateUniqueMatrimonialName = async () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let name = "";

  for (let i = 0; i < 4; i++) {
    name += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  for (let i = 0; i < 4; i++) {
    name += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  const existingUser = await User.findOne({ username: name });

  if (existingUser) {
    return generateUniqueMatrimonialName(); // Try again if name already exists
  }

  return name;
}

export function decodedToken(req) {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      const decodedToken = jwtDecode(token);

      return decodedToken;
    } catch (error) {
      console.error("Failed to decode token:", error);
      return null;
    }
}