import { Project } from "../../types";

interface Props {
  project?: Project;
}
const ProjectDetails = ({ project }: Props): React.ReactElement => {
  return (
    <div>
      <dl className="govuk-summary-list lbh-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Project Contact</dt>
          <dd className="govuk-summary-list__value">Test Value</dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Stage</dt>
          <dd className="govuk-summary-list__value">{project?.stage}</dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Size</dt>
          <dd className="govuk-summary-list__value">{project?.size}</dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Type</dt>
          <dd className="govuk-summary-list__value">{project?.type}</dd>
        </div>
        {project?.project_dependencies && (
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Project Dependencies</dt>
            <dd className="govuk-summary-list__value">
              {project?.project_dependencies}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
};

export default ProjectDetails;
