import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Successfully signed out!");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-emerald-700 font-semibold" : "hover:text-emerald-700"
          }

        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="DonationCamp"
          className={({ isActive }) =>
            isActive ? "text-emerald-700 font-semibold" : "hover:text-emerald-700"
          }

        >
          Donation Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink
          to="HowTo"
          className={({ isActive }) =>
            isActive ? "text-emerald-700 font-semibold" : "hover:text-emerald-700"
          }

        >
          How to Help
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="Dashboard"
            className={({ isActive }) =>
              isActive ? "text-emerald-700 font-semibold" : "hover:text-emerald-700"
            }>
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        {user ? (
          <>
            <button
              onClick={handleSignOut}
              className=" rounded-[36px] px-2 py-4 flex text-nowrap bg-emerald-700 hover:bg-emerald-800 text-white"
            >
              Sign Out
              <div>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-7 h-7 rounded-full mr-2 border-2 border-emerald-700"
                  />
                )}
              </div>
            </button>
          </>
        ) : (
          <Link to="/login" className="text-emerald-700 hover:underline lg:pr-32 ">
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div
      className={`navbar transition-all bg-white duration-300 top-0 left-0 right-0 z-50 mx-auto ${location.pathname === "/" ? (isScrolled ? "bg-white text-emerald-700 fixed max-w-full" : "shadow-inner bg-transparent text-white fixed max-w-screen-full") : "text-emerald-700 bg-[#f0f8ff] max-w-screen-md"}`}
    >


      <div className="navbar-start items-center">

        <div className="dropdown hidden">
          <div
            tabIndex={0}
            role="button"
            className="ml-4 lg:hidden text-emerald-700"

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg `}
          >
            {links}
          </ul>
        </div>



      </div>


      <a className="ml-2 lg:mr-48 text-nowrap text-[20px] lg:text-[26px] font-extrabold  text-emerald-600">Winter Clothing <br />Donation</a>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end mr-10">





      </div>
    </div>
  );
};

export default Navbar;
