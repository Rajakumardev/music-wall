import axios from "axios";
import {
  SPOTIFY_PLAYING_NOW_ENDPOINT,
  SPOTIFY_REFRESH_TOKEN_KEY,
} from "../constants";
import { getEnvVariable } from "./env.utis";

export const getPlayingNow = async (clientId: string) => {
  try {
    const endpoint = `${SPOTIFY_PLAYING_NOW_ENDPOINT}`;
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `BEARER ${getEnvVariable(SPOTIFY_REFRESH_TOKEN_KEY)}`,
      },
    });
    console.log("/get-playing-now:", response);
    return response;
  } catch (error) {
    console.log("/get-playing-now:", error);
  }
};
