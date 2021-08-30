import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserByEmail as UseUserByEmail } from "../../utils/users";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import Link from "next/link";
import { SystemUser } from "../../types";

interface FormValue {
  email: string;
}

const UserSearch = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState<AxiosError>();
  const [foundUser, setFoundUser] = useState<SystemUser>();

  const onFormSubmit = async (formData: FormValue) => {
    const { data, error } = UseUserByEmail(formData.email);

    if (error) setError(error);

    return setFoundUser(data);
  };
  return (
    <div>
      <form role="form" onSubmit={handleSubmit(onFormSubmit)}>
        <div
          className="govuk-grid-row"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div className="govuk-grid-column-one-half">
            <TextInput
              name="email"
              hint="Email address must contain @hackney.gov.uk"
              label="User's email address:"
              placeholder="Email"
              rules={{ required: "Enter a valid user email" }}
              register={register}
              error={errors.email}
            />
          </div>
          <div className="govuk-grid-column-one-half">
            <Button label={"Search"} type="submit" />
          </div>
        </div>
      </form>
      {error?.response?.status == 404 && (
        <>
          <h3>User&apos;s email address not found</h3>
          <p className="govuk-body govuk-!-margin-top-5">
            The email address is not in the system.
          </p>
          <p className="govuk-body govuk-!-margin-top-5">
            You can search again on a different email address
          </p>
          <p className="govuk-body govuk-!-margin-top-5">
            Please be sure the email address is correct before you use it to{" "}
            <Link href={"/users/add"}>
              <a className="govuk-link">create a new user in the system</a>
            </Link>
          </p>
        </>
      )}
      {foundUser && (
        <>
          <h3>User&apos;s email address is already in the system</h3>
          <p className="govuk-body govuk-!-margin-top-5">
            Please contact{" "}
            <a href="mailto:miles.alford@hackney.gov.uk">
              miles.alford@hackney.gov.uk
            </a>{" "}
            if you require further support.
          </p>
        </>
      )}
    </div>
  );
};

export default UserSearch;
