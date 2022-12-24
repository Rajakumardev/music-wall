import { NextApiRequest, NextApiResponse } from "next";
import { getPlayingNow } from "../../utils/spotify.utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getPlayingNow();
  console.log("response:", response);
  if (!response || response === '') {
    //player is offline
    res.status(200).json({
      player: "offline",
    });
    return;
  }

  //destruct the required minimal data
  const { is_playing = false } = response;
  if (!is_playing) {
    res.status(200).json({
      player: "unplayable",
      is_playing,
    });
    return;
  }

  const { item = {} } = response;
  const { album = {}, artists = {}, name = "" } = item;
  const { name: albumName = "" } = album;
  console.log(artists, "artists");
  res.status(200).json({
    player: "online",
    is_playing,
    name,
    albumName,
    artists,
  });
}
