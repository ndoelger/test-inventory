import sendRequest from "./send-request";
import { API } from "../../server";

export async function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export async function login(credentials) {
  return sendRequest(`${API}/api/users/login`, "POST", credentials);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
