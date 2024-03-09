import { useState, useEffect } from "react";
import CustomAuthBody from "../components/Auth";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import { loginAction } from "../utils/endpoints";
import CustomLoader from "../components/CustomLoader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  SignInStart,
  SignInSuccess,
  SignInFailure,
} from "../redux/user/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isdisabled, setIsDisabled] = useState(true);
  const { loading } = useSelector((state) => state.user);
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(SignInStart());
    try {
      const res = await loginAction(formDetails);
      const { status, message } = res;
      console.log(res)
      if (status === 200) {
        dispatch(SignInSuccess(res));
        toast.success(message);

        navigate("/");
      } else {
        dispatch(SignInFailure(message));
        toast.error(message);
      }
    } catch (error) {
      console.error(error);
      dispatch(SignInFailure(error.message));
    }
  };

 

  useEffect(() => {
    if (formDetails.email !== "" && formDetails.password !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formDetails.email, formDetails.password]);

  

  return (
    <div>
      <CustomAuthBody title="Log In" subtitle="Log in to your account">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-12 my-10">
            <CustomInput
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formDetails.email}
            />
            <CustomInput
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formDetails.password}
              password={true}
            />
          </div>
          <div className="items-center flex flex-col gap-6 lg:flex-row lg:justify-between">
            <div>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-700 hover:text-blue-900"
              >
                Register
              </Link>
            </div>
            <CustomButton
              title={loading ? <CustomLoader/> : "Log In"}
              disabled={isdisabled}
            />
          </div>
        </form>
      </CustomAuthBody>
    </div>
  );
};

export default Login;
