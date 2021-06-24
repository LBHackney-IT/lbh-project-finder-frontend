import Button from "../../components/Button/Button";

interface Props {
    projectId: number,
    children: React.ReactChild,
}

const ProjectView = ({ projectId, children }: Props): React.ReactElement => {

    return (
        <>
            <div className="lbh-table-header">
                <h1 className="govuk-fieldset__legend--l gov-weight-lighter">
                    Test Project
                </h1>
                <Button label="Update Project"></Button>
            </div>
            <hr className="lbh-divider"></hr>
            {children}
        </>
    );
};

export default ProjectView;