import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../../../../components/Button/Button";
import TextInput from "../../../../components/TextInput/TextInput";
import Autocomplete from "../../../../components/Autocomplete/Autocomplete";
import { addTeamMember } from "../../../../utils/projectTeam";



interface FormData {
    member_id: number;
    role: string;
}

const AddNewTeamMemberPage = (): React.ReactElement => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const { push, query } = useRouter();
    const project_id = Number(query.id)
    const [error, setError] = useState(false);
    const data = [
        { value: 1, text: "somte" },
        { value: 2, text: "kal el" },
        { value: 3, text: "timmy" },
    ];

    const onFormSubmit = async ({ ...data }: FormData) => {
        try {
            await addTeamMember({ project_id, ...data });
            // push(`/projects/${project_id}/projects/confirmation`);
        } catch (e) {
            console.log(e);
            setError(true);
        }
    };

    return (
        <div className="govuk-width-container">

            <form role="form" onSubmit={handleSubmit(onFormSubmit)} >
                <h1 className="govuk-fieldset__legend--l gov-weight-lighter">
                    New team member
                </h1>
                <Controller
                    name={`member_id`}
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <Autocomplete
                            name={`projectMembers.name`}
                            label="Member Name"
                            control={control}
                            choices={data}
                            onChange={onChange}
                            value={value}
                            width={12}
                            error={errors?.member_id}
                        />
                    )}
                    rules={{ required: "An employee name is required" }}
                />
                <TextInput
                    name="role"
                    label="Role"
                    required={true}
                    register={register}
                    rules={{ required: "A user role is required" }}
                    error={errors.role}

                />
                <Button label="Finish" type="submit" />
            </form>
        </div>
    );
};

export default AddNewTeamMemberPage;