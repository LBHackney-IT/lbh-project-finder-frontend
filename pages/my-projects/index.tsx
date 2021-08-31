import MyProjectsView from "../../components/MyProjects/MyProjectsView";

const MyProjectsPage = (): React.ReactElement => {
    return (
        <div>
            <h1 className="govuk-!-margin-bottom-8">Your Projects</h1>
            <MyProjectsView />
        </div>
    )
}

export default MyProjectsPage;