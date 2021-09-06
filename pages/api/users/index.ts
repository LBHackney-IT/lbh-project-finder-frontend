import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

import { StatusCodes } from "http-status-codes";
import { addUser, getUserByEmail } from "../../../api/users";
import { isAuthorised } from "../../../utils/auth";

const endpoint: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const user = isAuthorised(req);
  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).end();
  }
  if (!user.isAuthorised) {
    return res.status(StatusCodes.FORBIDDEN).end();
  }
  switch (req.method) {
    case "GET":
      try {
        const data = await getUserByEmail(req.query.email as string);
        data
          ? res.status(StatusCodes.OK).json(data)
          : res
            .status(StatusCodes.NOT_FOUND)
            .json({ message: "User Not Found" });
      } catch (error) {
        console.error("User get error:", error?.response?.data);
        error?.response?.status === StatusCodes.NOT_FOUND
          ? res
            .status(StatusCodes.NOT_FOUND)
            .json({ message: "User Not Found" })
          : res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "Unable to get the User" });
      }
      break;

    case "POST":
      try {
        const data = await addUser(req.body);
        res.status(StatusCodes.OK).json(data);
      } catch (error) {
        console.error("User post error:", error?.response?.data);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: "Unable to add the user" });
      }
      break;

    default:
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid request method" });
  }
};

export default endpoint;
