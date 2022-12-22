import axios from "axios";
import { SPOTIFY_PLAYING_NOW_ENDPOINT } from "../constants";

export const getPlayingNow = async (clientId: string) => {
  try {
    const endpoint = `${SPOTIFY_PLAYING_NOW_ENDPOINT}`;
    const response = await axios.get(endpoint);
    console.log("/get-playing-now:", response);
    return response;
  } catch (error) {
    console.log("/get-playing-now:", error);
  }
};
