import Button from "../Button/Button";
import { useState } from "react";
import { useProjects as UseProjects } from "../../utils/projects";
import { ProjectSearchResults, SearchFormData } from "../../types";
import ProjectsTable from "../ProjectsTable/ProjectsTable";
import SearchByProjectDetails from "./SearchByProjectDetails";
import style from "./Search.module.scss";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ProjectSearch = (): React.ReactElement => {
  const [projects, setProjects] = useState<ProjectSearchResults | null>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string>();
  let formParams: SearchFormData;

  const onFormSubmit = async (params: SearchFormData) => {
    setLoading(true);
    formParams = params;
    !formParams?.cursor && setProjects(null);
    try {
      const data = await UseProjects(formParams);
      setLoading(false);
      setProjects(
        formParams?.cursor
          ? { ...data, projects: [...projects!.projects, ...data.projects] }
          : data
      );
    } catch (e) {
      setLoading(false);
      setErrors("Something went wrong")
    }
  };
  return (
    <>
      <div>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="lbh-header-l ">Projects search</h1>
          </div>
          <div
            className="govuk-grid-column-one-third"
            style={{ paddingLeft: 170 }}
          >
            <Button label="Create Project" route={"/projects/add"} />
          </div>
        </div>
        <p className="lbh-body govuk-!-margin-bottom-3">
          Use search to find a project. To view all projects press the search
          button with the fields empty
        </p>
        <hr className="lbh-divider" />
        <SearchByProjectDetails onFormSubmit={onFormSubmit} />
        {projects && (
          <>
            <section className="govuk-!-margin-bottom-8">
              <div className={style.heading}>
                <h2>Search results</h2>
              </div>
            </section>
            {projects.projects.length > 0 ? (
              <ProjectsTable projects={projects.projects} />
            ) : (
              <p>No results found</p>
            )}
          </>
        )}

        {projects?.nextCursor && !loading && (
          <Button
            label="Load more"
            onClick={() =>
              onFormSubmit({ ...formParams, cursor: projects.nextCursor })
            }
          />
        )}
        {loading && <Spinner />}
        {errors && <ErrorMessage label={errors} />}
      </div>
    </>
  );
};

export default ProjectSearch;
