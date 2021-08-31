import { InputHTMLAttributes } from "react";
import { GenericField } from "../../types";
import cx from "classnames";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type RadiosType = GenericField & InputHTMLAttributes<HTMLInputElement>;

type ObjectOption = {
  text: string;
  value: string | number;
  disabled?: boolean;
};

type Option = string | ObjectOption;

interface Props extends RadiosType {
  options?: Option[];
  isRadiosInline?: boolean;
}

const Radios = ({
  label,
  hint,
  name,
  options = ["Yes, No"],
  register,
  error,
  required,
  rules,
  isRadiosInline = false,
  ...otherProps
}: Props): React.ReactElement => {
  return (
    <div
      className={cx("govuk-form-group lbh-form-group", {
        "govuk-form-group--error": error,
      })}
    >
      <label className={`lbh-label govuk-label`} htmlFor={name}>
        {label} {required && <span className="govuk-required">*</span>}
      </label>
      {hint && (
        <span id={`${name}-hint`} className="lbh-hint">
          {hint}
        </span>
      )}
      {error && <ErrorMessage label={error.message}></ErrorMessage>}
      <div
        className={cx("govuk-radios lbh-radios", {
          "govuk-radios--inline": isRadiosInline,
        })}
      >
        {options.map((option) => {
          const { value, text } =
            typeof option === "string"
              ? { value: option, text: option }
              : option;
          return (
            <div className="govuk-radios__item" key={text}>
              <input
                className={cx("govuk-radios__input", {
                  "govuk-input--error": error,
                })}
                id={`${name}_${value}`}
                name={name}
                type="radio"
                value={value}
                {...register(`${name}`, rules)}
                aria-describedby={hint && `${name}-hint`}
                {...otherProps}
              />
              <label
                className="govuk-label govuk-radios__label"
                htmlFor={`${name}_${value}`}
              >
                {text}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radios;
