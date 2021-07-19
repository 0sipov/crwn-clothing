import React from "react";

import "./custom-button.styles.scss";

interface CustomButtonProps {
  children?: string;
  type: "submit" | "button";
  isGoogleSignIn?: boolean;
  inverted?: true;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
