import axios from "axios";

const API_URL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyDLnZxQIb74mPMohfjXgSI7srS5x5EIYpI";

async function authenticate(mode, email, password) {
  const url = `${API_URL}/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
