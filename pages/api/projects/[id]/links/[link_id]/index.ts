import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

import { StatusCodes } from "http-status-codes";
import { isAuthorised } from "../../../../../../utils/auth";
import {
    removeProjectLink,
} from "../../../../../../api/projectLinks";

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
        case "DELETE":
            try {
                await removeProjectLink(parseInt(req.query.link_id as string));
                res.status(StatusCodes.OK).end();
            } catch (error) {
                console.error("Project link delete error:", error?.response?.data);
                error?.response?.status === StatusCodes.NOT_FOUND
                    ? res.status(StatusCodes.NOT_FOUND).json({
                        message: `Project link not found with ID: ${req.query.link_id}.`,
                    })
                    : res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                        message: `Unable to remove the project link with ID: ${req.query.link_id}.`,
                    });
            }
            break;

        default:
            res
                .status(StatusCodes.BAD_REQUEST)
                .json({ message: "Invalid request method" });
    }
};

export default endpoint;
