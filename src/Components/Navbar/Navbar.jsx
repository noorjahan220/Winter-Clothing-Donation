import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

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
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`navbar transition-all duration-300 fixed  w-11/12 mx-auto z-50 ${isScrolled ? "bg-white text-emerald-700" : "bg-transparent text-white"
        }  shadow-inner `}
    >

      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:text-emerald-700"
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
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>
        <a className="text-[26px] font-extrabold text-emerald-600">Winter Clothing Donation</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full mr-2 border-2 border-emerald-700"
              />
            )}
            <button
              onClick={handleSignOut}
              className="btn bg-emerald-700 hover:bg-emerald-800 text-white"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="text-emerald-700 hover:underline">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
