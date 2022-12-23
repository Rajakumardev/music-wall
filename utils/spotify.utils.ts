import axios from "axios";
import {
  SPOTIFY_CLIENT_ID_KEY,
  SPOTIFY_CLIENT_SECRET_KEY,
  SPOTIFY_PLAYING_NOW_ENDPOINT,
  SPOTIFY_REFRESH_TOKEN_KEY,
  SPOTIFY_TOKEN_ENDPOINT,
} from "../constants";
import { getEnvVariable } from "./env.utis";

//module level variables
const basic = Buffer.from(
  `${getEnvVariable(SPOTIFY_CLIENT_ID_KEY)}:${getEnvVariable(
    SPOTIFY_CLIENT_SECRET_KEY
  )}`
).toString("base64");
const refresh_token = getEnvVariable(SPOTIFY_REFRESH_TOKEN_KEY);
//get access token

export const getAccessToken = async () => {
  const response = await axios.post(
    SPOTIFY_TOKEN_ENDPOINT,
    {
      grant_type: "refresh_token",
      refresh_token,
    },
    {
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.data;
};

// get current playing song

export const getPlayingNow = async () => {
  try {
    const endpoint = `${SPOTIFY_PLAYING_NOW_ENDPOINT}`;
    const { access_token } = await getAccessToken();
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("/get-playing-now:", error);
  }
};
