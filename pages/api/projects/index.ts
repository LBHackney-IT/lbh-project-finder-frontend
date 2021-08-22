import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

import { StatusCodes } from "http-status-codes";
import { addProject, getProjects } from "../../../api/projects";
import { SearchFormData } from "../../../types";

const endpoint: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "GET":
      try {
        console.log("Query is: " + JSON.stringify(req.query));
        const data = await getProjects(req.query);
        res.status(StatusCodes.OK).json(data);
      } catch (error) {
        console.error("Project get error:", error?.response?.data);
        console.error("Project get request:", req);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: "Unable to get project" });
      }
      break;

    case "POST":
      try {
        const data = await addProject(req.body);
        res.status(StatusCodes.OK).json(data);
      } catch (error) {
        console.error("Project post error:", error?.response?.data);
        console.error("Project post request:", req);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: "Unable to add project" });
      }
      break;

    default:
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid request method" });
  }
};

export default endpoint;
