import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

import { StatusCodes } from "http-status-codes";
import { getProject, updateProject } from "../../../../api/projects";

const endpoint: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
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

    default:
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid request method" });
  }
};

export default endpoint;
