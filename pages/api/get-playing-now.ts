import { NextApiRequest, NextApiResponse } from "next";
import { getPlayingNow } from "../../utils/spotify.utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getPlayingNow();
  res.status(200).json({
    response
  });
}
