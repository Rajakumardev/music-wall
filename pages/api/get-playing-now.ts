import { NextApiRequest, NextApiResponse } from "next";
import { getPlayingNow } from "../../utils/spotify.utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getPlayingNow();
  if (!response || response === "") {
    //player is offline
    res.status(200).json({
      player: "Not listening.",
    });
    return;
  }

  //destruct the required minimal data
  const { is_playing = false } = response;
  if (!is_playing) {
    res.status(200).json({
      player: "Paused.",
      is_playing,
    });
    return;
  }

  const { item = {} } = response;

  //handle the null item -> idk why this happening may be i am getting ratelimited.
  if (item === null) {
    res.status(200).json({
      player: "Not listening.",
      is_playing: false,
    });
  }

  const {
    album = {},
    artists = {},
    name = "",
    external_urls: trackExternalUrls = {},
  } = item;
  const { spotify: trackUrl = "" } = trackExternalUrls;
  const { name: albumName = "" } = album;
  res.status(200).json({
    player: "online",
    is_playing,
    name,
    albumName,
    artists,
    trackUrl,
  });
}
