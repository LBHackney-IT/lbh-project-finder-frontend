import ProjectView from "../../../components/ProjectView/ProjectView";
import ProjectLinks from "../../../components/ProjectView/ProjectLinks";
import { useRouter } from "next/router";

const ProjectLinkPage = (): React.ReactElement => {
  const { query } = useRouter();
  const projectId = Number(query.id);
  return (
    <>
      <ProjectView projectId={projectId}>
        {(project) => <ProjectLinks project={project}></ProjectLinks>}
      </ProjectView>
    </>
  );
};

export default ProjectLinkPage;
