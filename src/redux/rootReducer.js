import { combineReducers } from "redux";

import userReduser from "./user/user.reducer";
import { CartReducer } from "./cart/cart.reducer";

export default combineReducers({ user: userReduser, cart: CartReducer });
