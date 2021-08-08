import { useRouter } from "next/router";
import Button from "../../components/Button/Button";
import { Project } from "../../types";
import { useProject } from "../../utils/projects";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Link from "next/link";
import style from "./ProjectView.module.scss";

interface Props {
  projectId: number;
  children?: React.ReactChild | ((arg0: Project) => React.ReactChild);
}

interface NavLinkProps {
  href: string;
  children: React.ReactChild;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter();
  return (
    <li>
      <Link href={href}>
        <a
          className={`lbh-link lbh-link--no-visited-state ${
            router.asPath === href ? style.navLinkActive : style.navLink
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

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
      <div className={`govuk-grid-row govuk-!-margin-bottom-8 `}>
        <div className="govuk-grid-column-two-thirds">
          <h1 className="lbh-heading-h1">Test Project</h1>
        </div>
        <div className={`govuk-grid-column-one-third ${style.actionsArea}`}>
          <Button label="Update Project"></Button>
        </div>
      </div>

      <div className={`govuk-grid-row ${style.outer}`}>
        <div className="govuk-grid-column-one-quarter">
          <nav className={style.sticky}>
            <ul className="lbh-list">
              <NavLink href={`/projects/${projectId}/details`}>Details</NavLink>
              <NavLink href={`/projects/${projectId}/links`}>Links</NavLink>
              <NavLink href={`/projects/${projectId}/team`}>Team</NavLink>
            </ul>
          </nav>
        </div>
        <div className="govuk-grid-column-three-quarters">
          {" "}
          {typeof children === "function" ? children(project) : children}
        </div>
      </div>
      {/* <div className="lbh-table-header">
        <h1 className="govuk-fieldset__legend--l gov-weight-lighter">
          Test Project
        </h1>
        <Button label="Update Project"></Button>
      </div>
      <hr className="lbh-divider"></hr>
      {typeof children === "function" ? children(project) : children} */}
    </>
  );
};

export default ProjectView;
