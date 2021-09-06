import Router from "next/router";
import { useState } from "react";
import Link from "next/link";
import { Project, ProjectMember } from "../../types";
import style from "./ProjectView.module.scss";
import RemovalModal from "./RemovalModal";
import { removeTeamMember, useTeamMembers } from "../../utils/projectTeam";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";

interface ProjectTeamProps {
  project: Project;
}

const ProjectTeam = ({ project }: ProjectTeamProps): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [memberToRemove, setMemberToRemove] = useState<ProjectMember>();

  const { data: teamMembers, error } = useTeamMembers(project.id);

  if (error) {
    if (error?.response?.status === 404) {
      return (
        <section className="govuk-!-margin-bottom-8">
          <div className={style.heading}>
            <h2>Project Team</h2>
            <Link href={`/projects/${project.id}/team/add`}>
              <a className="lbh-link lbh-link--no-visited-state">
                Add a new team member
              </a>
            </Link>
          </div>
          <p className="govuk-body govuk-!-margin-top-5">
            No team has been assigned for this project
          </p>
        </section>
      );
    }
    return (
      <ErrorMessage label="There was a problem with getting the project's team members." />
    );
  }

  if (!teamMembers) {
    return <Spinner />;
  }

  return (
    <>
      <RemovalModal
        title={"You are about to delete this team member"}
        isOpen={isModalOpen}
        onDismiss={() => setIsModalOpen(false)}
        onFormSubmit={async () => {
          setIsModalOpen(false);
          if (memberToRemove) {
            await removeTeamMember(project.id, memberToRemove.id);
            Router.reload();
          }
        }}
      />

      <section className="govuk-!-margin-bottom-8">
        <div className={style.heading}>
          <h2>Project Team</h2>
          <Link href={`/projects/${project.id}/team/add`}>
            <a className="lbh-link lbh-link--no-visited-state">
              Add a new team member
            </a>
          </Link>
        </div>

        {teamMembers && teamMembers.length > 0 && (
          <table className="govuk-table lbh-table">
            <thead className="govuk-table__head">
              <tr className="govuk-table__row">
                <th scope="col" className="govuk-table__header">
                  Name
                </th>
                <th scope="col" className="govuk-table__header">
                  Role
                </th>
                <th scope="col" className="govuk-table__header">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="govuk-table__body">
              {teamMembers.map((member, memberIndex) => (
                <tr
                  className="govuk-table__row lbh-list"
                  key={memberIndex}
                >
                  <td className="govuk-table__cell">{member.memberName}</td>
                  <td className="govuk-table__cell">{member.projectRole}</td>
                  <td className="govuk-table__cell">
                    <a
                      className="lbh-link lbh-link--no-visited-state"
                      href="#"
                      onClick={() => {
                        setIsModalOpen(true), setMemberToRemove(member);
                      }}
                    >
                      Remove{" "}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
};

export default ProjectTeam;
