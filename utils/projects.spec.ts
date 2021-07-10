import axios from 'axios';
import * as SWR from 'swr';

import * as projectsAPI from './projects'

jest.mock('axios');
jest.mock('swr');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('project APIs', () => {
    describe('useProject', () => {
        it('should call the correct middleware endpoint', () => {
            const expectedURL = '/api/projects/123'
            jest.spyOn(SWR, 'default');
            projectsAPI.useProject(123)
            expect(SWR.default).toHaveBeenCalledWith(expectedURL);
        })

    })
})