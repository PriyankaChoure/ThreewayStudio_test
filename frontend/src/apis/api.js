import axios from "axios";
/**
 * API List-
 * FOR LOGIN - localhost:8082/backend/auth/login
 */

// const SERVER_URL = "http://localhost:8082/backend/";
const SERVER_URL = "https://threeway-studio-test.vercel.app/backend";

// method for Login-
export const register = async (userData) => {
  const URL = `${SERVER_URL}auth/register`;
  try {
    const responseData = await axios.post(URL, userData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// method for Login-
export const login = async (userData) => {
  const { email, password } = userData;
  const URL = `${SERVER_URL}auth/login`;
  try {
    const responseData = await axios.post(URL, { email, password });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
