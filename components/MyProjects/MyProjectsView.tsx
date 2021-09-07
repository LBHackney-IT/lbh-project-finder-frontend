import Link from "next/link";
import { useMyProjects } from "../../utils/my-projects";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";
import MyProjectsTable from "./MyProjectsTable";

const MyProjectsView = (): React.ReactElement => {
    const { data, error } = useMyProjects();
    if (error) {
        if (error.response?.status === 404) {
            return (
                <p className="govuk-body govuk-!-margin-top-5">
                    You are assigned to no projects or you have not been added to the system. To check please enter your hackney email on this <Link href="/users">page</Link>
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