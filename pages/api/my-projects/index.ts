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
                console.log("user is: " + user.email)
                const userData = await getUserByEmail(user.email);
                console.log("hmm?: " + userData)
                if (!userData) {
                    return res
                        .status(StatusCodes.NOT_FOUND)
                        .json({ message: 'User Not Found' });
                }
                console.log("success?")
                const userProjects = await getProjectsByUser(userData.id);
                console.log(userProjects)
                res.status(StatusCodes.OK).json({ projects: userProjects, auth: user });
            } catch (error) {
                console.error("User projects get error:", error?.response?.data);
                console.error("User projects get request:", req);
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
