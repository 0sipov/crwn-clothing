import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/heder/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";

import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// const App = () => {
//   useEffect(() => {
//     const unsubscribeFromAuth = null;
//     unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);
//         userRef.onSnapshot((onSnapshot) => {
//           setCurrentUser({
//             id: onSnapshot.id,
//             ...onSnapshot.data(),
//           });
//         });
//       }
//       setCurrentUser(userAuth);
//     });
//     return unsubscribeFromAuth;
//   });

//   return (
//     <div className="App">
//       <Header />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route
//           path="/signin"
//           render={() =>
//             currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
//           }
//         />
//         <Route path="/shop" component={ShopPage} />
//       </Switch>
//     </div>
//   );
// };

// export default App;

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((onSnapshot) => {
          setCurrentUser({
            id: onSnapshot.id,
            ...onSnapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    console.log("currentUser", currentUser);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
