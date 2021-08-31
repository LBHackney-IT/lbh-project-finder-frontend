import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import ErrorSummary from "../../components/ErrorSummary/ErrorSummary";
import Radios from "../../components/Radios/Radios";
import TextInput from "../../components/TextInput/TextInput";
import { addUser } from "../../utils/users";

interface FormData {
  email_address: string;
  first_name: string;
  last_name: string;
  role: string;
}

const CreateNewUser = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { push } = useRouter();
  const [error, setError] = useState(false);

  const onFormSubmit = async ({ ...data }: FormData) => {
    try {
      await addUser({ ...data });
      push("/users/confirmation");
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <div className="govuk-width-container">
      {error && (
        <ErrorSummary
          title="Unfortunately there was a problem with your submission."
          body="Please try again"
        />
      )}
      <form role="form" onSubmit={handleSubmit(onFormSubmit)}>
        <h1 className="govuk-fieldset__legend--l gov-weight-lighter">
          New User
        </h1>
        <TextInput
          name="email_address"
          label="Email Address"
          required={true}
          register={register}
          rules={{ required: "A email address is required" }}
          error={errors.email_address}
          width={20}
        />
        <TextInput
          name="first_name"
          label="First Name"
          required={true}
          register={register}
          rules={{ required: "A first name is required" }}
          error={errors.first_name}
          width={20}
        />
        <TextInput
          name="last_name"
          label="Last Name"
          required={true}
          register={register}
          rules={{ required: "A last name is required" }}
          error={errors.last_name}
          width={20}
        />
        <Radios
          name="role"
          label="User's role"
          options={["Admin", "Standard"]}
          register={register}
          required={true}
          error={errors.role}
          rules={{ required: "A role is required" }}
        />
        <Button label="Finish" type="submit" />
      </form>
    </div>
  );
};

export default CreateNewUser;
