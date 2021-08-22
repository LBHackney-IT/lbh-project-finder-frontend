import { render, screen, fireEvent, act } from "@testing-library/react";
import { mockedProjects } from "../../factories/projects";
import * as projectsAPI from "../../utils/projects";
import ProjectSearch from "./Search";


jest.mock('../../utils/projects')
jest.mock('../Spinner/Spinner', () => () => 'MockedSpinner');

describe("Search component", () => {
    it("should render a message if no projects found from the search", async () => {
        jest.spyOn(projectsAPI, "useProjects").mockImplementation(() => (Promise.resolve({ projects: [], nextCursor: "" })))
        render(<ProjectSearch />);
        await act(async () => {
            fireEvent.click(screen.getByText('Search'));
        })
        const result = await screen.getByText("No results found");
        expect(result).toBeInTheDocument();
    })

    it("should render a load more button if the next cursor is returned from the search", async () => {
        jest.spyOn(projectsAPI, "useProjects").mockImplementation(() => (Promise.resolve({ projects: mockedProjects, nextCursor: "20" })))
        render(<ProjectSearch />);
        await act(async () => {
            fireEvent.click(screen.getByText('Search'));
        })
        const result = await screen.getByText("Load more");
        expect(result).toBeInTheDocument();
    })

    it("should render a error message if an error is returned", async () => {
        jest.spyOn(projectsAPI, "useProjects").mockImplementation(() => (Promise.reject(new Error())))
        render(<ProjectSearch />);

        await act(async () => {
            fireEvent.click(screen.getByText('Search'));
        })

        const result = await screen.getByText("Something went wrong");
        expect(result).toBeInTheDocument();
    })
})