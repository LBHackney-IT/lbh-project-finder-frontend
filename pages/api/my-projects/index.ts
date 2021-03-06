import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

import { StatusCodes } from "http-status-codes";
import { getUserByEmail } from "../../../api/users";
import { isAuthorised } from "../../../utils/auth";
import { getProjectsByUser } from "../../../api/my-projects";

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
                const userData = await getUserByEmail(user.email);
                if (!userData) {
                    return res
                        .status(StatusCodes.NOT_FOUND)
                        .json({ message: 'User Not Found' });
                }
                const userProjects = await getProjectsByUser(userData.id);
                console.log(userProjects)
                res.status(StatusCodes.OK).json({ projects: userProjects, auth: user });
            } catch (error) {
                console.error("User projects get error:", error?.response?.data);
                console.error("User projects status code:", error?.response?.status);
                console.error("User projects get request:", req);
                if (error.response.status == 404) {
                    return res.status(StatusCodes.NOT_FOUND).json({ message: 'User Not Found' });
                }
                res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({ message: "Unable to get user projects" });
            }
            break;


        default:
            res
                .status(StatusCodes.BAD_REQUEST)
                .json({ message: "Invalid request method" });
    }
};

export default endpoint;
