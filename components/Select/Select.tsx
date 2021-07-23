import cx from 'classnames';
import { GenericField } from '../../types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export interface SelectProps extends GenericField {
    options: {
        text: string;
        value: string;
    }[];
    width?: number
}

const Select = ({ name, label, hint, rules, register, error, required, options, width }: SelectProps): React.ReactElement => {
    return (
        <div className={cx("govuk-form-group lbh-form-group", { "govuk-form-group--error": error })}>
            <label className="govuk-label lbh-label" htmlFor={name}>
                {label}{' '}
                {required && (
                    <span className="govuk-required">
                        <span aria-hidden="true">*</span>
                        <span className="govuk-visually-hidden">required</span>
                    </span>
                )}
            </label>
            {hint && <span id="select-2-hint" className="govuk-hint lbh-hint">
                {hint}
            </span>}
            {error && <ErrorMessage label={error.message}></ErrorMessage>}
            <select
                className={cx("govuk-select lbh-select", { "govuk-select--error": error })}
                id={name}
                name={name}
                //ref={rules ? register?.(rules) : register}
                aria-describedby={hint && `${name}-hint`}
                {...register(`${name}`, rules)}
            >
                <option key="empty" value="">
                    -- select one --
                </option>
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>

    );
};

export default Select;