import { useForm, FormProvider } from "react-hook-form";

import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import TextArea from "../../components/TextArea/TextArea";
import Select from "../../components/Select/Select";
import { addProject } from "../../utils/projects";
import projectPhases from "../../data/projectPhases";
import projectSizes from "../../data/projectSizes";
import projectPriority from "../../data/ProjectPriority";

export type ProjectFormData = {
  projectName: string;
  description: string;
  projectContact: string;
  phase: string;
  size: string;
  priority: string;
  productUsers: string;
  dependencies: string;
};

const NewProjectPage = (): React.ReactElement => {
  const methods = useForm<ProjectFormData>();
  const {
    register,
    formState: { errors },
  } = methods;

  const onFormSubmit = async (data: ProjectFormData) => {
    await addProject({ formData: JSON.stringify(data) });
  };

  return (
    <FormProvider {...methods}>
      <form role="form" onSubmit={methods.handleSubmit(onFormSubmit)}>
        <h1 className="govuk-fieldset__legend--l gov-weight-lighter">
          New Project
        </h1>
        <TextInput
          name="projectName"
          label="Project Name"
          required={true}
          register={register}
          rules={{ required: "A project name is required" }}
          error={errors.projectName}
          width={10}
        />
        <TextArea
          name="description"
          label="Project Description"
          required={true}
          rules={{ required: "A project description is required" }}
          register={register}
          error={errors.description}
          width={30}
        />
        <TextInput
          name="projectContact"
          label="Project Contact"
          hint="This could be a delivery or project manager"
          register={register}
          width={10}
        />
        <Select
          name="phase"
          label="Project Phase"
          required={true}
          options={projectPhases}
          rules={{ required: "A project phase is required" }}
          error={errors.phase}
          register={register}
        />
        <Select
          name="size"
          label="Project Size"
          required={true}
          options={projectSizes}
          rules={{ required: "A project size is required" }}
          error={errors.size}
          register={register}
        />
        <Select
          name="priority"
          label="Priority"
          options={projectPriority}
          register={register}
        />
        <TextArea
          name="productUsers"
          label="Product Users"
          hint="Who are the users of the application?"
          register={register}
          width={30}
        />
        <TextArea
          name="dependencies"
          label="dependencies"
          hint="What dependencies or related projects are there?"
          register={register}
          width={30}
        />

        <Button label="Finish" type="submit"></Button>
      </form>
    </FormProvider>
  );
};

export default NewProjectPage;
