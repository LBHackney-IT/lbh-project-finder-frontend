import { useMyProjects } from "../../utils/my-projects";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";
import MyProjectsTable from "./MyProjectsTable";

const MyProjectsView = (): React.ReactElement => {
    const { data, error } = useMyProjects();
    if (error) {
        if (error?.response?.status === 404) {
            return (
                <p className="govuk-body govuk-!-margin-top-5">
                    You are assigned to no projects
                </p>
            );
        }
        return <ErrorMessage />;
    }

    if (!data) {
        return <Spinner />;
    }
    return (<>
        {data.projects && (
            <>
                {data.projects.length > 0 && (
                    <MyProjectsTable projects={data.projects} />)}
            </>
        )}
    </>)
}

export default MyProjectsView;