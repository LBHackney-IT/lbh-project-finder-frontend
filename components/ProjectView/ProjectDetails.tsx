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
          <dd className="govuk-summary-list__value">
            {project?.projectContact}
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Phase</dt>
          <dd className="govuk-summary-list__value">{project?.phase}</dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Size</dt>
          <dd className="govuk-summary-list__value">{project?.size}</dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Category</dt>
          <dd className="govuk-summary-list__value">
            {project?.category ? project.category : "N/A"}
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Priority</dt>
          <dd className="govuk-summary-list__value">
            {project?.priority ? project.priority : "N/A"}
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Product Users</dt>
          <dd className="govuk-summary-list__value">
            {project?.productUsers ? project.productUsers : "N/A"}
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Project Dependencies</dt>
          <dd className="govuk-summary-list__value">
            {project?.dependencies ? project?.dependencies : "N/A"}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default ProjectDetails;
