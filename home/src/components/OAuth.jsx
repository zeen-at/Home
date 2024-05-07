import React from "react";
import CustomButton from "./CustomButton";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";
import { googleAuth } from "../utils/endpoints";
import { useDispatch } from "react-redux";
import { SignInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider)

      const res = await googleAuth(result)
      
      dispatch(SignInSuccess(res))

      navigate("/")

    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };

  return (
    <CustomButton
      type="button"
      title="Continue with Google"
      backgroundColor="bg-red-700"
      onClick={handleClick}
    />
  );
};

export default OAuth;
