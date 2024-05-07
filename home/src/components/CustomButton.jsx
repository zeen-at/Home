const CustomButton = ({type, title, onClick, disabled, backgroundColor}) => {
    return (
        <div >
            <button
                disabled={disabled}
                type={type ? type : "submit"}
                onClick={onClick}
                className={` flex ${backgroundColor ? `${backgroundColor}` : "bg-emerald-900"}  text-white justify-center p-3 w-full rounded-md  hover:bg-opacity-95 disabled:bg-slate-300`}
            >{title}</button>
      </div>
  
    )
  }
  
  export default CustomButton