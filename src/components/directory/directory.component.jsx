import React from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item.module";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: state.directory,
});

export default connect(mapStateToProps)(Directory);
