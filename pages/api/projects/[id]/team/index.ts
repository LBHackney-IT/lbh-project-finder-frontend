import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

import { StatusCodes } from "http-status-codes";
import { isAuthorised } from "../../../../../utils/auth";
import {
  addTeamMember,
  getTeamByProject,
  removeTeamMember,
} from "../../../../../api/projectTeam";

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
        const data = await getTeamByProject(parseInt(req.query.id as string));
        res.status(StatusCodes.OK).json(data);
      } catch (error) {
        console.error("Project team get error:", error?.response?.data);
        error?.response?.status === StatusCodes.NOT_FOUND
          ? res
              .status(StatusCodes.NOT_FOUND)
              .json({ message: "Project team Not Found" })
          : res
              .status(StatusCodes.INTERNAL_SERVER_ERROR)
              .json({ message: "Unable to get the project team" });
      }
      break;
    case "POST":
      try {
        await addTeamMember(parseInt(req.query.id as string), req.body);
        res.status(StatusCodes.CREATED).end();
      } catch (error) {
        console.error("Team member post error:", error?.response?.data);
        error?.response?.status === StatusCodes.NOT_FOUND;
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: "Unable to add the team member" });
      }
      break;
    case "DELETE":
      try {
        await removeTeamMember(parseInt(req.query.team_member_id as string));
        res.status(StatusCodes.OK).end();
      } catch (error) {
        console.error("Team member delete error:", error?.response?.data);
        error?.response?.status === StatusCodes.NOT_FOUND
          ? res.status(StatusCodes.NOT_FOUND).json({
              message: `Team member not found with ID: ${req.query.team_member_id}.`,
            })
          : res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: `Unable to remove the team member with ID: ${req.query.team_member_id}.`,
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
