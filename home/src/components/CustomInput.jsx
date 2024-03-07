import { useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";


const CustomInput = ({ placeholder, name, value, onChange, type, password }) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      {!password ? (
        <div className="flex flex-col">
        <input
          onChange={onChange}
          type={type ? type : "text"}
          className="input"
          placeholder={placeholder}
          name={name}
          value={value}
        />
  
          </div>
      ) : (
          <div className="inline">

            <input
            onChange={onChange}
            type={showPassword === true ? 'text' : 'password'}
            className="input w-[230px] md:w-[180px] lg:min-w-[440px]"
            placeholder={placeholder}
            name={name}
            value={value}
            />
        
            {showPassword && (<MdOutlineVisibility onClick={handleShowPassword} />)}
            {!showPassword && (<MdOutlineVisibilityOff onClick={handleShowPassword} />)}
  

          </div>
          
      )}
    </>

  )
}

export default CustomInput