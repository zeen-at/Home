import { useState, useEffect } from "react"
import CustomAuthBody from "../components/Auth"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import { Link } from "react-router-dom"
import { registerAction } from "../utils/endpoints"
import CustomLoader from "../components/CustomLoader"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import OAuth from "../components/OAuth"



const Register = () => {

  const navigate = useNavigate();


  const [isdisabled, setIsDisabled] = useState(true)
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [formDetails, setFormDetails] = useState({
    fullname: "",
    email: "",
    password: ""

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await registerAction(formDetails);
      const { message } = res?.data;


      toast.success(message);

      navigate("/login");

    } catch (error) {
      console.error(error)
      setLoading(false);
    }
  }

  useEffect(() => {
    if (formDetails.fullname !== "" && formDetails.email !== "" && formDetails.password !== "") {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)

    }
  }, [formDetails.fullname, formDetails.email, formDetails.password])

  const handleClick = () => {
   
    setLoading(!loading)
  }

	return (
		<div>
			<CustomAuthBody
				title="Create Account"
				subtitle="Create your account"
			>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col gap-8 my-5">
						<CustomInput placeholder="Full Name" onChange={handleChange} name="fullname" value={formDetails.fullname} />
            <CustomInput placeholder="Email" onChange={handleChange} name="email" value={formDetails.email} />
            <CustomInput placeholder="Password" onChange={handleChange} name="password" value={formDetails.password} password={true} />

          </div>
          <div className="my-2 flex flex-col gap-4">
            <CustomButton title={loading ? <CustomLoader /> : "Create account"} onClick={handleClick} disabled={isdisabled} />
            <OAuth />

          </div>
          <div className="items-center flex gap-2">
        <div>Have an account? <Link to="/login" className="text-blue-700 hover:text-blue-900">Login</Link></div>

        </div>
				</form>

        
			</CustomAuthBody>
		</div>
	)
}

export default Register
