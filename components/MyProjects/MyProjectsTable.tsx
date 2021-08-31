import Link from "next/link";
import { ProjectMember, } from "../../types";

const MyProjectEntry = (project: ProjectMember): React.ReactElement => {
    const { id, projectId, projectName, projectRole } = project;
    return (
        <Link href={`/projects/${projectId}/details`}>
            <tr className="govuk-table__row govuk-table__row--clickable">
                <td className="govuk-table__cell">{projectName}</td>
                <td className="govuk-table__cell">{projectRole}</td>
            </tr>
        </Link>
    );
};

const MyProjectsTable = ({
    projects,
}: {
    projects: ProjectMember[];
}): React.ReactElement => (
    <table className="govuk-table">
        <thead className="govuk-table__head">
            <tr className="govuk-table__row">
                <th scope="col" className="govuk-table__header">
                    Project Name
                </th>
                <th scope="col" className="govuk-table__header">
                    Role
                </th>
            </tr>
        </thead>
        <tbody className="govuk-table__body">
            {projects.map((result) => (
                <MyProjectEntry key={result.id} {...result} />
            ))}
        </tbody>
    </table>
);

export default MyProjectsTable;
