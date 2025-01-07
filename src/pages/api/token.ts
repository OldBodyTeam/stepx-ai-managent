import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const token = req.body.token;
  const cookie = serialize("token", token, {
    httpOnly: true,
    secure: false,
    path: "/",
  });
  res.setHeader("Set-Cookie", cookie);
  res.status(200).json({ message: "ok" });
}
