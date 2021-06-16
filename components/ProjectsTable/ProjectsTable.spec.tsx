import { render } from '@testing-library/react';
import ProjectsTable from './ProjectsTable';

describe('ProjectsTable component', () => {
    const props = [
        { project_id: 1, project_name: "something", stage: "discovery", size: "big", type: "tech" }
    ]
    it('should render a list of projects', () => {
        const { asFragment } = render(<ProjectsTable projects={props} />);
        expect(asFragment()).toMatchSnapshot();
    })
});