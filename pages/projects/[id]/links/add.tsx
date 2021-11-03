import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../components/Button/Button";
import TextInput from "../../../../components/TextInput/TextInput";
import { addProjectLink } from "../../../../utils/projectLinks";

interface FormData {
  link_title: string;
  link: string;
}

const AddNewLinkPage = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { push, query } = useRouter();
  const project_id = Number(query.id);
  const [error, setError] = useState(false);

  const onFormSubmit = async ({ ...data }: FormData) => {
    try {
      await addProjectLink({ project_id, ...data });
      push(`/projects/${project_id}/links`);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <div className="govuk-width-container">
      <form role="form" onSubmit={handleSubmit(onFormSubmit)}>
        <h1 className="govuk-fieldset__legend--l gov-weight-lighter">
          New Link
        </h1>
        <TextInput
          name="link_title"
          label="Link title"
          required={true}
          register={register}
          rules={{ required: "A name for the link is required" }}
          error={errors.type}
          width={20}
        />
        <TextInput
          name="link"
          label="Link"
          required={true}
          register={register}
          rules={{ required: "A link is required" }}
          error={errors.link}
        />
        <Button label="Finish" type="submit" />
      </form>
    </div>
  );
};

export default AddNewLinkPage;
