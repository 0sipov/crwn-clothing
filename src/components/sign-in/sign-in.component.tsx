import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { useState } from "react";

const SignIn = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  interface handleSubmitEventTypes {
    preventDefault: () => void;
  }

  const handleSubmit = async (e: handleSubmitEventTypes) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(
        inputValue.email,
        inputValue.password
      );
    } catch (error) {
      console.log(error);
    }
    setInputValue({ email: "", password: "" });
  };

  interface handleChangeEventTypes {
    target: { value: string; name: string };
    preventDefault: () => void;
  }

  const handleChange = (e: handleChangeEventTypes) => {
    const { value, name } = e.target;
    setInputValue((preState) => ({ ...preState, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={inputValue.email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={inputValue.password}
          label="password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

// class SignIn extends React.Component {
//   state = { email: "", password: "" };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { email, password } = this.state;
//       await auth.signInWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.log(error);
//     }
//     this.setState({ email: "", password: "" });
//   };

//   handleChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {
//     const { value, name } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>
//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             name="email"
//             type="email"
//             value={this.state.email}
//             label="email"
//             handleChange={this.handleChange}
//             required
//           />
//           <FormInput
//             name="password"
//             type="password"
//             value={this.state.password}
//             label="password"
//             handleChange={this.handleChange}
//             required
//           />
//           <div className="buttons">
//             <CustomButton type="submit">Sign in</CustomButton>
//             <CustomButton
//               type="button"
//               onClick={signInWithGoogle}
//               isGoogleSignIn
//             >
//               Sign in with Google
//             </CustomButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SignIn;
