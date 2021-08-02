import Button from "../../components/Button/Button";
import { Project } from "../../types";
import { useProject } from "../../utils/projects";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface Props {
  projectId: number;
  children?: React.ReactChild | ((arg0: Project) => React.ReactChild);
}

const ProjectView = ({ projectId, children }: Props): React.ReactElement => {
  const { data: project, error } = useProject(projectId);
  if (error) {
    return <ErrorMessage />;
  }
  if (!project) {
    return <div></div>;
  }
  return (
    <>
      <div className="lbh-table-header">
        <h1 className="govuk-fieldset__legend--l gov-weight-lighter">
          Test Project
        </h1>
        <Button label="Update Project"></Button>
      </div>
      <hr className="lbh-divider"></hr>
      {typeof children === "function" ? children(project) : children}
    </>
  );
};

export default ProjectView;
