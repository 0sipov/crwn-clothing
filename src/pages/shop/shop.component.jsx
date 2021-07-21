import React from "react";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
class ShopPage extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="shop-page">
        <CollectionOverview />
      </div>
    );
  }
}

export default ShopPage;
