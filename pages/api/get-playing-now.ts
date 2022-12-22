import { NextApiRequest, NextApiResponse } from "next";
import { getPlayingNow } from "../../utils/spotify.utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = getPlayingNow("asdfasdf");
  const {item = {}} = response;
  const {name = ""} = item;
  res.status(200).json({
    songName: name
  });
}
