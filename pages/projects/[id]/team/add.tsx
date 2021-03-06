import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../../../../components/Button/Button";
import TextInput from "../../../../components/TextInput/TextInput";
import Autocomplete from "../../../../components/Autocomplete/Autocomplete";
import { addTeamMember } from "../../../../utils/projectTeam";
import { useUsers } from "../../../../utils/users";
import Spinner from "../../../../components/Spinner/Spinner";

interface FormData {
  user_id: number;
  project_role: string;
}

const AddNewTeamMemberPage = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { data: users } = useUsers();
  const userList =
    users &&
    users?.map(({ id, firstName, lastName }) => ({
      value: id,
      text: firstName + " " + lastName,
    }));
  const { push, query } = useRouter();
  const project_id = Number(query.id);
  const [error, setError] = useState(false);

  const onFormSubmit = async ({ ...data }: FormData) => {
    try {
      await addTeamMember({ project_id, ...data });
      push(`/projects/${project_id}/team`);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  if (!users) {
    return <Spinner />;
  }

  return (
    <div className="govuk-width-container">
      <form role="form" onSubmit={handleSubmit(onFormSubmit)}>
        <h1 className="govuk-fieldset__legend--l gov-weight-lighter">
          New team member
        </h1>
        <Controller
          name={`user_id`}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Autocomplete
              name={`projectMembers.name`}
              label="Member Name"
              control={control}
              choices={userList!}
              onChange={onChange}
              value={value}
              width={12}
              error={errors?.user_id}
            />
          )}
          rules={{ required: "An employee name is required" }}
        />
        <TextInput
          name="project_role"
          label="Role"
          required={true}
          register={register}
          rules={{ required: "A user role is required" }}
          error={errors.project_role}
        />
        <Button label="Finish" type="submit" />
      </form>
    </div>
  );
};

export default AddNewTeamMemberPage;
