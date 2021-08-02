import ProjectsTable from "../components/ProjectsTable/ProjectsTable";

const fakeProjects = [{ project_id: 1, description: "test", project_name: "something", stage: "discovery", size: "big", type: "tech" }, { project_id: 2, project_name: "nslckansasndklasncxkjasbnkljasnkljasnjklc nlajks", description: "test", stage: "build", size: "small", type: "nonne" }]

export default function Home() {
  return (
    <>
      <h1 className="lbh-header-l">All Projects</h1>
      <ProjectsTable projects={fakeProjects}></ProjectsTable>
    </>
  )
}
