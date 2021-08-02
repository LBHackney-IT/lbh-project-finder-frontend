import { InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { GenericField } from '../../types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


type TextInputType = GenericField & InputHTMLAttributes<HTMLInputElement>

export interface TextInputProps extends TextInputType {
    width?: number;
}

const TextInput = ({ name, label, hint, rules, register, error, required, width }: TextInputProps): React.ReactElement => {
    return (
        <>
            <div className={cx("govuk-form-group lbh-form-group", {
                'govuk-form-group--error': error
            })}>
                <label className="govuk-label lbh-label" htmlFor={name}>
                    {label}{' '}
                    {required && (
                        <span className="govuk-required">
                            <span aria-hidden="true">*</span>
                            <span className="govuk-visually-hidden">required</span>
                        </span>
                    )}
                </label>
                <span id={`${name}-hint`} className="govuk-hint lbh-hint">
                    {hint}
                </span>
                {error && <ErrorMessage label={error.message}></ErrorMessage>}

                <input
                    className={cx("govuk-input lbh-input", { [`govuk-input--width-${width}`]: width, 'govuk-input--error': error })}
                    id={name}
                    name={name}
                    type="text"
                    aria-describedby={hint && `${name}-hint`}
                    {...register(`${name}` as const, rules)}
                />
            </div>
        </>
    )
};

export default TextInput;