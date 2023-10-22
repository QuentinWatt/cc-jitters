import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import Button from "../components/shared/Button";

const SignIn: React.FC = () => {
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <h1>Sign In</h1>

      <Button onClick={() => handleSignIn()}>
        Sign in
      </Button>
    </div>
  );
};

export default SignIn;
