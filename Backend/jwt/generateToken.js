import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId },process.env.JWT_KEY,{
    expiresIn: "1d",
  });
  res.cookie("Investa-x_key", token, {
    httpOnly: false,
    secure: false,
    sameSite: "Lax",
  });
};
export default createTokenAndSaveCookie;