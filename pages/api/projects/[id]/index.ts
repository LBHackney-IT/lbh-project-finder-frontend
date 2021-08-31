import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

import { StatusCodes } from "http-status-codes";
import { deleteProject, getProject, updateProject } from "../../../../api/projects";
import { isAuthorised } from "../../../../utils/auth";

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
        const data = await getProject(parseInt(req.query.id as string));
        data
          ? res.status(StatusCodes.OK).json(data)
          : res
            .status(StatusCodes.NOT_FOUND)
            .json({ message: "Project Not Found" });
      } catch (error) {
        console.error("Project get error:", error?.response?.data);
        error?.response?.status === StatusCodes.NOT_FOUND
          ? res
            .status(StatusCodes.NOT_FOUND)
            .json({ message: "Project Not Found" })
          : res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "Unable to get the Project" });
      }
      break;

    case "PATCH":
      try {
        console.log("data is: " + req.body);
        const data = await updateProject(req.body);
        res.status(StatusCodes.OK).json(data);
      } catch (error) {
        console.error("Project patch error:", error?.response?.data);
        console.error("Project patch request:", req);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: "Unable to update project" });
      }
      break;

    case "DELETE":
      try {
        const data = await deleteProject(parseInt(req.query.id as string));
        res.status(StatusCodes.OK).json(data);
      } catch (error) {
        console.error("Project delete error:", error?.response?.data);
        error?.response?.status === StatusCodes.NOT_FOUND
          ? res.status(StatusCodes.NOT_FOUND).json({
            message: `Project not found with ID: ${req.query.id}.`,
          })
          : res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Unable to remove the project with ID: ${req.query.id}.`,
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
