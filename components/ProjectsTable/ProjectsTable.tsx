import Link from "next/link";
import { Project } from "../../types";

const ProjectEntry = (project: Project): React.ReactElement => {
  const { id, projectName, phase, size } = project;
  return (
    <Link href={`/projects/${id}/details`}>
      <tr className="govuk-table__row govuk-table__row--clickable">
        <td className="govuk-table__cell">{projectName}</td>
        <td className="govuk-table__cell">{phase}</td>
        <td className="govuk-table__cell">{size}</td>
      </tr>
    </Link>
  );
};

const ProjectsTable = ({
  projects,
}: {
  projects: Project[];
}): React.ReactElement => (
  <table className="govuk-table">
    <thead className="govuk-table__head">
      <tr className="govuk-table__row">
        <th scope="col" className="govuk-table__header">
          Project Name
        </th>
        <th scope="col" className="govuk-table__header">
          Phase
        </th>
        <th scope="col" className="govuk-table__header">
          Size
        </th>
      </tr>
    </thead>
    <tbody className="govuk-table__body">
      {projects.map((result) => (
        <ProjectEntry key={result.id} {...result} />
      ))}
    </tbody>
  </table>
);

export default ProjectsTable;
