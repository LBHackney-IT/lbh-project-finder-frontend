interface ProjectTeamProps {
  content: {
    name: string;
    role: string;
  }[];
}

const ProjectTeam = ({ content }: ProjectTeamProps): React.ReactElement => {
  return (
    <div>
      <dl className="govuk-summary-list lbh-summary-list">
        {content.map((content) => (
          <div key={content.name} className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">{content.name}</dt>
            <dd className="govuk-summary-list__value">{content.role}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default ProjectTeam;
