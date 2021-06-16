import { Project } from '../../types';

const ProjectEntry = (project: Project): React.ReactElement => {
    const { project_name, stage, size, type } = project
    return (
        <tr className="govuk-table__row">
            <td className="govuk-table__cell">{project_name}</td>
            <td className="govuk-table__cell">{stage}</td>
            <td className="govuk-table__cell">{size}</td>
            <td className="govuk-table__cell">{type}</td>
        </tr>
    )
}


const ProjectsTable = ({ projects }: { projects: Project[] }): React.ReactElement => (
    <table className="govuk-table lbh-table">
        <thead className="govuk-table__head">
            <tr className="govuk-table__row">
                <th scope="col" className="govuk-table__header">
                    Project Name
                </th>
                <th scope="col" className="govuk-table__header">
                    Stage
                </th>
                <th scope="col" className="govuk-table__header">
                    Size
                </th>
                <th scope="col" className="govuk-table__header">
                    Project Type
                </th>
            </tr>
        </thead>
        <tbody className="govuk-table__body">
            {projects.map((result) => (
                <ProjectEntry key={result.project_id} {...result} />
            ))}
        </tbody>
    </table>
)

export default ProjectsTable;