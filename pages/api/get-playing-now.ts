import { NextApiRequest, NextApiResponse } from "next";
import { getPlayingNow } from "../../utils/spotify.utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getPlayingNow("asdfasdf");
  //const { item = {} } = response;
  //const { name = "" } = item;
  res.status(200).json({
    //songName: name,
    response
  });
}
