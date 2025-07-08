import { Button2 } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { listed } from "../constant/listed";


const Navbar = () => {

    const navigate = useNavigate();

  const handleStart = () => {
    console.log("Button clicked!");
    navigate(listed.action);
  };
  
    const handle = () => {
    console.log("Button clicked!");
    navigate(listed.login);
  };
    const Co = () => {
    console.log("Button clicked!");
    navigate(listed.comedi);
  };
  
    const  Hor = () => {
    console.log("Button clicked!");
    navigate(listed.horror);
  };

      const Home = () => {
    console.log("Button clicked!");
    navigate(listed.home);
  };
  
  
    
  return (
    <>
   
    <div className="navbar shadow-sm bg-gray-700 z-50 fixed top-0 w-full ">
          <div className="navbar-start">
            <div className="dropdown scale-z-100">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
            </div>
            <a className="btn btn-ghost text-xl">GIDLIX</a>
          </div>
          <div className="navbar-center hidden lg:flex ml-10 mr-10">
            <ul className="menu menu-horizontal px-1">
              <li><a onClick={Home}>Home</a></li>
              <li>
                <details>
                  <summary>Genre</summary>
                  <ul className="p-2 bg-red-50">
                    <li><Button2 label="Action" onClick={handleStart} />
                    
                     </li>
                    <li><Button2 label="Cartoon" onClick={Co} /></li>
                    <li><Button2 label="Horror" onClick={Hor} /></li>
                  </ul>
                </details>
              </li>
              <li><a onClick={handle}>Login</a></li>
            </ul>
          </div>
          <div className="navbar-end">
               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://cdn1.iconfinder.com/data/icons/halloween-illustrations/128/9-1024.png" />
        </div>
      </div>
          </div>
        
        </div>
    </>
  )
}

export default Navbar;