import { render } from '@testing-library/react';

import ProjectDetails from './ProjectDetails'
describe('ProjectDetails component', () => {
    const props = {
        project: {
            project_id: 1,
            project_name: "something",
            stage: "discovery",
            size: "big",
            type: "tech",
        }
    };

    it('should render a ProjectDetails component with the correct data', () => {
        const { asFragment } = render(<ProjectDetails {...props} />);

        expect(asFragment()).toMatchSnapshot();
    });
});