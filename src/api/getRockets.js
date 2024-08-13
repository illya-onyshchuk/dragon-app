import axios from "axios";
import { BASE_URL } from "../config";


export async function getRockets() {
  const response = await axios.get(BASE_URL)

  return response.data;
}

