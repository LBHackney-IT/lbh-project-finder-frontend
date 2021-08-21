import { useRouter } from "next/router";
import Button from "../../components/Button/Button";
import { Project } from "../../types";
import { useProject } from "../../utils/projects";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Link from "next/link";
import style from "./ProjectView.module.scss";
import Spinner from "../Spinner/Spinner";

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
    return <Spinner />;
  }
  return (
    <>
      <div>
        <div
          className={`govuk-grid-row govuk-!-margin-bottom-8 ${style.personHeader} `}
        >
          <div className="govuk-grid-column-two-thirds">
            <h1 className="lbh-heading-h1">{project.projectName}</h1>
          </div>
          <div className={`govuk-grid-column-one-third ${style.actionsArea}`}>
            <Button
              label="Update Project"
              route={`/projects/${projectId}/update`}
            />
          </div>
        </div>
        <hr className="lbh-divider" style={{ marginBottom: 50 }} />
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
    </>
  );
};

export default ProjectView;
