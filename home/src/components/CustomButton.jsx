const CustomButton = ({title, onClick, disabled}) => {
    return (
        <div >
            <button
                disabled={disabled}
                type="submit"
                onClick={onClick}
                className="float-end flex bg-emerald-900 text-white justify-center p-3 w-[150px] rounded-full hover:bg-opacity-95 disabled:bg-slate-300"
            >{title}</button>
      </div>
  
    )
  }
  
  export default CustomButton