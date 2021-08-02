import cx from 'classnames';
import { GenericField } from '../../types';
import { SelectProps } from '../Select/Select';
import { TextAreaProps } from '../TextArea/TextArea';
import TextInput, { TextInputProps } from '../TextInput/TextInput';

interface Props {
    name: string;
    label: string;
    conFields: (TextInputProps | TextAreaProps | SelectProps)[];
}

const RepeaterGroup = ({ name, label, conFields }: Props): React.ReactElement => {
    return (
        <div className={cx("govuk-form-group lbh-form-group")}>
            <fieldset className="govuk-fieldset">
                <legend className="govuk-label lbh-label">{label}</legend>
                <div className="repeaterGroup">
                    {conFields.map((subfields) => {
                        if (subfields.type === 'input')
                            return (<TextInput name={name} label={subfields.label} hint={subfields.hint} error={subfields.error} register={subfields.register} rules={subfields.rules}></TextInput>)
                    })}
                </div>
            </fieldset>
        </div>
    )
}

export default RepeaterGroup;