import { InputHTMLAttributes } from "react";
import cx from "classnames";

import { GenericField } from "../../types";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type TextAreaType = GenericField & InputHTMLAttributes<HTMLTextAreaElement>;

export interface TextAreaProps extends TextAreaType {
  rows?: number;
  width?: number;
}

const TextArea = ({
  name,
  label,
  hint,
  rules,
  register,
  error,
  required,
  rows,
  width,
}: TextAreaProps): React.ReactElement => {
  return (
    <div
      className={cx("govuk-form-group lbh-form-group", {
        "govuk-form-group--error": error,
      })}
    >
      <label className="govuk-label lbh-label" htmlFor={name}>
        {label}{" "}
        {required && (
          <span className="govuk-required">
            <span aria-hidden="true">*</span>
            <span className="govuk-visually-hidden">required</span>
          </span>
        )}
      </label>
      {hint && (
        <span id="more-detail-hint" className="govuk-hint lbh-hint">
          {hint}
        </span>
      )}

      {error && <ErrorMessage label={error.message}></ErrorMessage>}
      <textarea
        className={cx("govuk-textarea lbh-textarea", {
          [`govuk-input--width-${width}`]: width,
          "govuk-textarea--error": error,
        })}
        id={name}
        name={name}
        rows={rows}
        aria-describedby={hint && `${name}-hint`}
        {...register(`${name}`, rules)}
      ></textarea>
    </div>
  );
};

export default TextArea;
