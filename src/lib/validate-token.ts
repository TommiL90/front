import { jwtDecode } from "jwt-decode";

export const isTokenValid = (token: string | null ) => {
  if (!token) return false;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return (decodedToken.exp ?? 0) > currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return false;
  }
};