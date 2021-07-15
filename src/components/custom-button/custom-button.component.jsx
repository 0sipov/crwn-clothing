import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, handleClick, ...otherProps }) => {
  return (
    <button className="custom-button" onClick={handleClick} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
