import { useForm } from "react-hook-form";
import Select from "../Select/Select";
import TextInput from "../TextInput/TextInput";
import sizes from "../../data/projectSizes";
import phases from "../../data/projectPhases";
import { SearchFormData } from "../../types";
import Button from "../Button/Button";

interface Props {
  onFormSubmit: (data: SearchFormData) => void;
}
const SearchByProjectDetails = ({
  onFormSubmit,
}: Props): React.ReactElement => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (params: SearchFormData) => {
    onFormSubmit(params);
  };

  return (
    <form role="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-third">
          <TextInput
            name="project_name"
            label="Project Name"
            register={register}
          />
        </div>
        <div
          className="govuk-grid-column-one-third"
          style={{ paddingLeft: 100 }}
        >
          <Select
            name="size"
            label="Project Size"
            options={sizes}
            register={register}
          />
        </div>
        <div className="govuk-grid-column-one-third">
          <Select
            name="phase"
            label="Project Phase"
            options={phases}
            register={register}
          />
        </div>
      </div>
      <Button label="Search" type="submit" />
    </form>
  );
};

export default SearchByProjectDetails;
