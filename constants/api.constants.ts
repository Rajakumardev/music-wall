import { getEnvVariable } from "../utils/env.utis";
import { SITE_URL_KEY } from "./env.constants";

//spotify api endpoint constants
export const SPOTIFY_API_ROOT: string = "https://api.spotify.com/v1/";
export const SPOTIFY_AUTH_API_ROOT: string = "https://accounts.spotify.com/";
export const SPOTIFY_PLAYING_NOW_ENDPOINT: string = `${SPOTIFY_API_ROOT}me/player/currently-playing`;
export const SPOTIFY_TOKEN_ENDPOINT: string = `${SPOTIFY_AUTH_API_ROOT}api/token`;

//internal api endpoints
export const INTERNAL_API_ROOT: string = getEnvVariable(SITE_URL_KEY);
export const GET_PLAYING_NOW_EP: string = `${INTERNAL_API_ROOT}api/get-playing-now`;
