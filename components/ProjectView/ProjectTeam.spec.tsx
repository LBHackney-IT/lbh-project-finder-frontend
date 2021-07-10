import { render } from '@testing-library/react';
import { mockedProject } from '../../factories/projects';

import ProjectTeam from './ProjectTeam'

describe('ProjectTeam component', () => {
    const props = mockedProject.project_team

    it('should render a ProjectTeam component with the correct data', () => {
        const { asFragment } = render(<ProjectTeam content={props!} />);

        expect(asFragment()).toMatchSnapshot();
    });
});