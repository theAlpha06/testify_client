import { jwtDecode } from "jwt-decode";

interface Response {
  email: string;
  exp: Number;
  iat: Number;
  sub: Number;
  username: string;
}

const getName = (token: string): Response => {
  return jwtDecode(token);
};

export default getName;
