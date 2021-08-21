import ProjectView from "../../../components/ProjectView/ProjectView";
import ProjectTeam from "../../../components/ProjectView/ProjectTeam";
import { useRouter } from "next/router";

const ProjectTeamPage = (): React.ReactElement => {
  const { query } = useRouter();
  const projectId = Number(query.id);
  return (
    <>
      <ProjectView projectId={projectId}>
        {(project) => <ProjectTeam project={project} />}
      </ProjectView>
    </>
  );
};

export default ProjectTeamPage;
