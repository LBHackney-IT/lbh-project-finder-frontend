import UserSearch from "../../components/UserView/UserSearch";

const SearchUserPage = (): React.ReactElement => (
  <>
    <div>
      <h1 className="govuk-fieldset__legend--l gov-weight-lighter govuk-expand-title">
        Manage Users
      </h1>
      <p className="govuk-body">
        Before creating user in this system, you will need to check if their
        email address already exists.
      </p>
      <p className="govuk-body">
        Users also need to be added to an appropriate Google Group which will
        give them the correct permissions to use this system. If this has not
        already been done, contact{" "}
        <a href="mailto:miles.alford@hackney.gov.uk">
          miles.alford@hackney.gov.uk
        </a>
        .
      </p>
    </div>
    <UserSearch />
  </>
);

export default SearchUserPage;
