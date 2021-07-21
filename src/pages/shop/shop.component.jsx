import React from "react";
import { Route } from "react-router";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../../components/collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
