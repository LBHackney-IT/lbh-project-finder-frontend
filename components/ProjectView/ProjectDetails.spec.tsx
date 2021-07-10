import { render } from '@testing-library/react';
import { mockedProject } from '../../factories/projects';

import ProjectDetails from './ProjectDetails'

describe('ProjectDetails component', () => {
    const props = mockedProject

    it('should render a ProjectDetails component with the correct data', () => {
        const { asFragment } = render(<ProjectDetails project={props} />);

        expect(asFragment()).toMatchSnapshot();
    });
});