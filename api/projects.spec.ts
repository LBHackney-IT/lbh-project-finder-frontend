import axios from 'axios';
import { mockedProject } from '../factories/projects';
import * as projectsAPI from './projects';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('project APIs', () => {
    describe('getProject', () => {
        it('should fetch a single project', () => {
            const responseProject = mockedProject;
            mockedAxios.get.mockResolvedValue(responseProject);

            const data = projectsAPI.getProject(123);

            //Update these tests once the actual API has been made
            //expect(mockedAxios.get).toHaveBeenCalled();
            //expect(mockedAxios.get.mock.calls[0][0]).toEqual(`/residents/123`)
            //expect(data).toEqual(responseProject);

        })
    })
})