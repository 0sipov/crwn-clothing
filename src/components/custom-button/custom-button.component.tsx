import React from "react";

import "./custom-button.styles.scss";

interface CustomButtonProps {
  children?: string;
  type: "submit" | "button";
  isGoogleSignIn?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
