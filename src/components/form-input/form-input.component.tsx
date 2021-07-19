import React from "react";

import "./form-input.styles.scss";

interface handleChangeEventTypes {
  target: { value: string; name: string };
  preventDefault: () => void;
}

interface FormInputProps {
  handleChange: (e: handleChangeEventTypes) => void;
  label?: string;
  name: string;
  type: string;
  value: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
