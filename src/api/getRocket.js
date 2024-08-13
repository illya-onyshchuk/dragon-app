import axios from "axios";
import { BASE_URL } from "../config";

export async function getRocket(id) {
  const response = await axios.get(BASE_URL);

  return response.data.find((rocket) => rocket.id === id);
}
