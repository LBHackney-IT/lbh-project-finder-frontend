import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'

import { StatusCodes } from 'http-status-codes';
import { getProject } from '../../../../api/projects';


const endpoint: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            try {
                const data = await getProject(parseInt(req.query.id as string))
                data
                    ? res.status(StatusCodes.OK).json(data)
                    : res
                        .status(StatusCodes.NOT_FOUND)
                        .json({ message: 'Project Not Found' });
            }
            catch (error) {
                console.error('Project get error:', error?.response?.data);
                error?.response?.status === StatusCodes.NOT_FOUND
                    ? res
                        .status(StatusCodes.NOT_FOUND)
                        .json({ message: 'Project Not Found' })
                    : res
                        .status(StatusCodes.INTERNAL_SERVER_ERROR)
                        .json({ message: 'Unable to get the Project' });
            }
            break;

        default:
            res
                .status(StatusCodes.BAD_REQUEST)
                .json({ message: 'Invalid request method' });
    }

}

export default endpoint