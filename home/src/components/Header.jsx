import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const { currentUser } = useSelector((state) => state.user)
  return (
      <header className="bg-slate-200 shadow-md">
          <div className="flex justify-between max-w-6xl items-center mx-auto p-3" > 
              <Link to="/">
              <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-500">Zee </span>
              <span className="text-slate-700">Estate</span>
          </h1>
              </Link>
          
          <form className="bg-slate-100 p-3 rounded-lg flex justify-between items-center">
                  <input placeholder="Search here..." type="text" className="bg-transparent focus:outline-none w-24 sm:w-64" /> 
                  <CiSearch className="text-slate-500" />
              </form>
              <ul className="flex gap-4">
                  <Link to="/">
                  <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
                  </Link>
                  <Link to="/about">
                  <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
                  </Link>
                  <Link to="/profile">
                    {currentUser ? (
                        <img src={currentUser?.data?.avatar} alt="profile_pic" className="rounded-full w-7 h-7 object-cover" />
                    ): (
                  <li className="hidden sm:inline text-slate-700 hover:underline">Login</li>
                    )}
                  </Link>
              </ul>
          </div>
          
    </header>
  )
}

export default Header