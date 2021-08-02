import { useForm, FormProvider } from 'react-hook-form';


import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import TextArea from '../../components/TextArea/TextArea';
import Select from '../../components/Select/Select';
import { addProject } from '../../utils/projects';

const projectSizes = [{ text: "Small", value: "small" }, { text: "Medium", value: "medium" }, { text: "Large", value: "large" }]
const projectStages = [{ text: "Discovery", value: "discovery" }, { text: "Build", value: "build" }, { text: "Support", value: "support" }]

export type ProjectFormData = {
    projectName: string;
    projectDescription: string;
    projectContact: string;
    projectStage: string;
    projectSize: string;
}


const NewProjectPage = (): React.ReactElement => {
    const methods = useForm<ProjectFormData>();
    const { register, formState: { errors } } = methods;

    const onFormSubmit = async (data: ProjectFormData) => {
        await addProject({ formData: JSON.stringify(data) })
    }

    return (
        <FormProvider {...methods}>
            <form role="form" onSubmit={methods.handleSubmit(onFormSubmit)}>
                <h1 className="govuk-fieldset__legend--l gov-weight-lighter">New Project</h1>
                <TextInput name="projectName" label="Project Name" required={true} register={register} rules={{ required: "A project name is required" }} error={errors.projectName} width={10}></TextInput>
                <TextArea name="projectDescription" label="Project Description" required={true} rules={{ required: "A project description is required" }} register={register} error={errors.projectDescription} width={30}></TextArea>
                <TextInput name="projectContact" label="Project Contact" required={true} rules={{ required: "A project contact is required" }} hint="This could be a delivery or project manager" register={register} error={errors.projectContact} width={10}></TextInput>
                <Select name="projectStage" label="Project Stage" required={true} options={projectStages} register={register}></Select>
                <Select name="projectSize" label="Project Size" required={true} options={projectSizes} register={register}></Select>

                <Button label="Finish" type="submit"></Button>
            </form>
        </FormProvider>
    );
};

export default NewProjectPage;