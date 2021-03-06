import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

interface HeaderPropsType {
  currentUser: any;
  hidden: boolean;
}

const Header: React.FC<HeaderPropsType> = ({ currentUser, hidden }) => {
  console.log("hidden", hidden);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
        {hidden ? null : <Cart />}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any[]) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectHidden(state),
});

export default connect(mapStateToProps)(Header);
