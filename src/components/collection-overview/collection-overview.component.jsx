import React from "react";
import { connect } from "react-redux";

import "./collections-overview.styles.scss";

import PreviewCollection from "../preview-collection/preview-collection.component";

const CollectionOverview = ({ collection }) => {
  return (
    <div>
      {collection.SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collection: state.shop,
});

export default connect(mapStateToProps)(CollectionOverview);
