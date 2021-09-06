import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import Select from "../../../components/Select/Select";
import TextArea from "../../../components/TextArea/TextArea";
import TextInput from "../../../components/TextInput/TextInput";
import { updateProject, useProject } from "../../../utils/projects";
import projectPhases from "../../../data/projectPhases";
import projectSizes from "../../../data/projectSizes";
import projectPriority from "../../../data/ProjectPriority";
import Spinner from "../../../components/Spinner/Spinner";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { isAuthorised } from "../../../utils/auth";

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

const UpdateProjectPage = (): React.ReactElement => {
  const { query, push } = useRouter();
  const projectId = Number(query.id);
  const { data: project } = useProject(projectId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: project ? project : {} });
  const onFormSubmit = async (data: ProjectFormData) => {
    const formData = (({
      description,
      phase,
      size,
      priority,
      dependencies,
    }) => ({ description, phase, size, priority, dependencies }))(data);
    await updateProject(projectId, {
      project_id: projectId,
      project_name: data.projectName,
      project_contact: data.projectContact,
      product_users: data.productUsers,
      ...formData,
    });
    push(`/projects/${projectId}/details`);
  };
  useEffect(() => {
    reset({ ...project });
  }, [project]);
  if (!project) {
    return <Spinner />;
  }

  return (
    <form role="form" onSubmit={handleSubmit(onFormSubmit)}>
      <h1 className="govuk-fieldset__legend--l gov-weight-lighter">
        Update Project
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
        label="Dependencies"
        hint="What dependencies or related projects are there?"
        register={register}
        width={30}
      />

      <Button label="Finish" type="submit" />
    </form>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
}) => {
  const user = isAuthorised(req);

  if (!user) {
    return {
      props: {},
      redirect: {
        destination: '/login',
      },
    };
  }

  if (user.hasAdminPermissions == false) {
    return {
      props: {},
      redirect: {
        destination: '/access-denied',
      },
    };
  }


  return {
    props: {},
  };
};

export default UpdateProjectPage;
