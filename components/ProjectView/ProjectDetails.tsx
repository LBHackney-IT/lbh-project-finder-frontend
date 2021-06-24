import { Project } from "../../types";

interface Props {
    project?: Project
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
                    <dd className="govuk-summary-list__value">Maintenance</dd>
                </div>
                <div className="govuk-summary-list__row">
                    <dt className="govuk-summary-list__key">Size</dt>
                    <dd className="govuk-summary-list__value">Large</dd>
                </div>
                <div className="govuk-summary-list__row">
                    <dt className="govuk-summary-list__key">Type</dt>
                    <dd className="govuk-summary-list__value">Technology</dd>
                </div>
                <div className="govuk-summary-list__row">
                    <dt className="govuk-summary-list__key">Project Dependencies</dt>
                    <dd className="govuk-summary-list__value">Testing</dd>
                </div>
            </dl>
        </div>
    );
};

export default ProjectDetails;