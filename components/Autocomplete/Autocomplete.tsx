import Downshift from "downshift";
import cx from "classnames";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Control, RegisterOptions } from "react-hook-form";
import { useState } from "react";
import style from "./Autocomplete.module.scss";

interface Props {
  name: string;
  label: string;
  hint?: string;
  required?: boolean;
  rules?: RegisterOptions;
  onChange: any;
  value: string;
  choices: {
    value: number | string;
    text: string;
  }[];
  width?: number;
  error?: {
    message?: string;
    type?: string;
  };
  control: Control;
}

const Autocomplete = ({
  name,
  label,
  hint,
  required,
  choices,
  value,
  onChange,
  error,
  width,
  control,
}: Props): React.ReactElement => {
  const [inputVal, setInputVal] = useState("");
  const items = choices.map((item) => item.text);
  return (
    <Downshift
      inputValue={inputVal}
      onChange={(selection) => {
        setInputVal(selection);
        onChange(choices.find((choice) => choice.text === selection)?.value);
      }}
      itemToString={(item) => (item ? item.text : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        getRootProps,
        toggleMenu,
        clearSelection,
      }) => (
        <div
          className={cx("govuk-form-group lbh-form-group", {
            "govuk-form-group--error": error,
          })}
        >
          <label className="govuk-label lbh-label" {...getLabelProps()}>
            {label}{" "}
            {required && (
              <span className="govuk-required">
                <span aria-hidden="true">*</span>
                <span className="govuk-visually-hidden">required</span>
              </span>
            )}
          </label>
          {hint && (
            <span id={`${name}-hint`} className="govuk-hint lbh-hint">
              {hint}
            </span>
          )}
          <div
            {...getRootProps(undefined, { suppressRefError: true })}
            className={style.inputContainer}
          >
            {error && <ErrorMessage label={error.message} />}
            <input
              {...getInputProps({
                onChange: (e) => {
                  if (e.target.value === "" || e.target.value) {
                    clearSelection();
                  }
                  setInputVal(e.target.value);
                },
              })}
              className={cx("govuk-input lbh-input", {
                [`govuk-input--width-${width}`]: width,
              })}
              value={inputVal}
              onClick={(): void => {
                toggleMenu();
              }}
            />
            {isOpen && (
              <ul {...getMenuProps()} className={style.list}>
                {items
                  .filter(
                    (item) =>
                      !inputValue ||
                      item.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, i) => (
                    <li
                      {...getItemProps({
                        key: item,
                        index: i,
                        item,
                      })}
                      key={i}
                      className={style.option}
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </Downshift>
  );
};

export default Autocomplete;
