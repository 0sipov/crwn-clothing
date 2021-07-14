import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory className="directory-menu" />
    </div>
  );
};

export default HomePage;
