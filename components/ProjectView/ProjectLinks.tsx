interface ProjectLinksProps {
    content: {
        name: string;
        link: string;
    }[]
}

const ProjectLinks = ({ content }: ProjectLinksProps): React.ReactElement => {

    return (
        <div>
            <dl className="govuk-summary-list lbh-summary-list">
                {content.map((content) =>
                    <div key={content.name} className="govuk-summary-list__row">
                        <dt className="govuk-summary-list__key">{content.name}</dt>
                        <dd className="govuk-summary-list__value">{content.link}</dd>
                    </div>
                )}
            </dl>
        </div>
    )
}

export default ProjectLinks