import { useFormContext, useFieldArray } from "react-hook-form";
import cx from 'classnames';

import styles from '../FormComponents.module.scss';
import TextInput from '../../TextInput/TextInput';
import Button from "../../Button/Button";
interface Props {
    label: string;
    name: string;
    hint?: string;
}

const ProjectLinksInput = ({ label, name, hint }: Props): React.ReactElement => {
    const { register, control, formState: { errors } } = useFormContext();
    const { fields, append, remove } = useFieldArray({ control, name: 'projectLinks' })
    return (
        <div>
            <label className="govuk-label lbh-label" htmlFor={name}>{label}</label>
            <span id={`${name}-hint`} className="govuk-hint lbh-hint">
                {hint}
            </span>
            {fields.map((field, index) => {
                return (
                    <div key={field.id} className={cx("govuk-form-group lbh-form-group")}>
                        <fieldset className="govuk-fieldset">
                            <legend className="govuk-label lbh-label"></legend>
                            <div className="repeaterGroup">
                                <TextInput name={`projectLinks.${index}.linkName`} label="Link Name" required={true} rules={{ required: "The origin of the link is required" }} register={register} error={errors?.projectLinks?.[index]?.linkName} />
                                <TextInput name={`projectLinks.${index}.link`} label="Link" required={true} register={register} error={errors?.projectLinks?.[index]?.link} />
                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className={styles.close}
                                >
                                    <span className="govuk-visually-hidden">Remove</span>

                                    <svg width="18" height="18" viewBox="0 0 13 13" fill="none">
                                        <path
                                            d="M-0.0501709 1.36379L1.36404 -0.050415L12.6778 11.2633L11.2635 12.6775L-0.0501709 1.36379Z"
                                            fill="#0B0C0C"
                                        />
                                        <path
                                            d="M11.2635 -0.050293L12.6778 1.36392L1.36404 12.6776L-0.0501709 11.2634L11.2635 -0.050293Z"
                                            fill="#0B0C0C"
                                        />
                                    </svg>
                                </button>
                            </div>

                        </fieldset>
                    </div>
                )
            })
            }
            <Button label="Add Link" isSecondary={true} type="button" onClick={() => append({})} />
        </div>
    )
}

export default ProjectLinksInput;