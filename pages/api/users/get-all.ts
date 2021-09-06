import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

import { StatusCodes } from "http-status-codes";
import { getUsers } from "../../../api/users";
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
                const data = await getUsers();
                res.status(StatusCodes.OK).json(data);
            } catch (error) {
                console.error("Users get error:", error?.response?.data);
                console.error("Users get request:", req);
                res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({ message: "Unable to get users" });
            }
            break;

        default:
            res
                .status(StatusCodes.BAD_REQUEST)
                .json({ message: "Invalid request method" });
    }
};

export default endpoint;
