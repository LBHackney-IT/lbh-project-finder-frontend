import { useState } from "react";
import Link from 'next/link';
import { Project, ProjectLink } from "../../types";
import style from "./ProjectView.module.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import RemovalModal from "./RemovalModal"
import Router from "next/router";
import { removeProjectLink, useProjectLinks } from "../../utils/projectLinks";


interface ProjectLinksProps {
  project: Project;
}

const ProjectLinks = ({ project }: ProjectLinksProps): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [linkToRemove, setLinkToRemove] = useState<ProjectLink>();

  const { data: links, error } = useProjectLinks(project.project_id);

  if (error) {
    return (
      <ErrorMessage label="There was a problem with getting the project's links." />
    );
  }

  return (
    <>
      <RemovalModal removalItem={linkToRemove!} isOpen={isModalOpen} onDismiss={() => setIsModalOpen(false)} onFormSubmit={async () => {
        setIsModalOpen(false);
        if (linkToRemove) {
          await removeProjectLink(project.project_id, linkToRemove.id)
          Router.reload();
        }
      }} />
      <section className="govuk-!-margin-bottom-8">
        <div className={style.heading}>
          <h2>Project Links</h2>
          <Link href={`/projects/${project.project_id}/links/add`}>
            <a className="lbh-link lbh-link--no-visited-state">
              Add a new link
            </a>
          </Link>
        </div>

        {links && links.length > 0 ? (
          <table className="govuk-table lbh-table">
            <thead className="govuk-table__head">
              <tr className="govuk-table__row">
                <th scope="col" className="govuk-table__header">
                  Type
                </th>
                <th scope="col" className="govuk-table__header">
                  Link
                </th>
                <th scope="col" className="govuk-table__header">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="govuk-table__body">
              {links.map((link, contentIndex) => (
                <tr className="govuk-table__row lbh-list" key={link.type}>
                  <th scope="row" className="govuk-table__header">{link.type}</th>
                  <td className="govuk-table__cell">{link.link}</td>
                  <td className="govuk-table__cell">
                    <a className="lbh-link lbh-link--no-visited-state" href="#" onClick={() => { setIsModalOpen(true), setLinkToRemove(link) }}>
                      Remove{" "}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (<p className="lbh-body">No team has been assigned for this project</p>)}
      </section>
    </>
  );
};

export default ProjectLinks;
