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
            //expect(mockedAxios.get.mock.calls[0][0]).toEqual(`/projects/123`)
            //expect(data).toEqual(responseProject);

        })
    })

    describe('addProject', () => {
        it('should add a new project', async () => {
            mockedAxios.post.mockResolvedValue({ data: {} });
            await projectsAPI.addProject({ createdBy: "test@bar.com" });

            //Update these tests once the actual API has been made
            //expect(mockedAxios.post).toHaveBeenCalled();
            //expect(mockedAxios.post.mock.calls[0][0]).toEqual(`/projects`)
            // expect(mockedAxios.post.mock.calls[0][1]).toEqual({createdBy: 'test@bar.com',});
        })
    })
})