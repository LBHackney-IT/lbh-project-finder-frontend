import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

import { StatusCodes } from "http-status-codes";
import { isAuthorised } from "../../../../../utils/auth";
import { addProjectLink, getLinksByProject, removeProjectLink } from "../../../../../api/projectLinks";



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
                const data = await getLinksByProject(parseInt(req.query.id as string));
                res.status(StatusCodes.OK).json(data)
            } catch (error) {
                console.error("Project link get error:", error?.response?.data);
                error?.response?.status === StatusCodes.NOT_FOUND
                    ? res
                        .status(StatusCodes.NOT_FOUND)
                        .json({ message: "Project links Not Found" })
                    : res
                        .status(StatusCodes.INTERNAL_SERVER_ERROR)
                        .json({ message: "Unable to get the project links" });
            }
            break;
        case 'POST':
            try {
                await addProjectLink(parseInt(req.query.id as string), req.body);
                res.status(StatusCodes.CREATED).end();
            } catch (error) {
                console.error('Project link post error:', error?.response?.data);
                error?.response?.status === StatusCodes.NOT_FOUND
                res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({ message: 'Unable to add the project link' });
            }
            break;

        case 'DELETE':
            try {
                await removeProjectLink(parseInt(req.query.link_id as string));
                res.status(StatusCodes.OK).end();
            } catch (error) {
                console.error('Project link delete error:', error?.response?.data);
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
