import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = inputValue;
    if (password !== confirmPassword) {
      alert("Password mismatch");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setInputValue({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setInputValue((preState) => ({ ...preState, [name]: value }));
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have accaunt</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={inputValue.displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={inputValue.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={inputValue.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={inputValue.confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

// class SignUp extends React.Component {
//   state = {
//     displayName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { displayName, email, password, confirmPassword } = this.state;
//     if (password !== confirmPassword) {
//       alert("Password mismatch");
//     }
//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       await createUserProfileDocument(user, { displayName });
//       this.setState({
//         displayName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { displayName, email, password, confirmPassword } = this.state;
//     return (
//       <div className="sign-up">
//         <h2 className="title">I do not have accaunt</h2>
//         <span>Sign up with your email and password</span>
//         <form className="sign-up-form" onSubmit={this.handleSubmit}>
//           <FormInput
//             type="text"
//             name="displayName"
//             value={displayName}
//             onChange={this.handleChange}
//             label="Display Name"
//             required
//           />
//           <FormInput
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//             label="Email"
//             required
//           />
//           <FormInput
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//             label="Password"
//             required
//           />
//           <FormInput
//             type="password"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={this.handleChange}
//             label="Confirm password"
//             required
//           />
//           <CustomButton type="submit">SIGN UP</CustomButton>
//         </form>
//       </div>
//     );
//   }
// }

export default SignUp;
