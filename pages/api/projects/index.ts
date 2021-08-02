import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'

import { StatusCodes } from 'http-status-codes';
import { addProject } from '../../../api/projects';


const endpoint: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'POST':
            try {
                const data = await addProject(req.body)
                res.status(StatusCodes.OK).json(data)
            }
            catch (error) {
                console.error('Project post error:', error?.response?.data);
                console.error('Project post request:', req);
                res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({ message: 'Unable to add project' });
            }
            break;

        default:
            res
                .status(StatusCodes.BAD_REQUEST)
                .json({ message: 'Invalid request method' });
    }

}

export default endpoint