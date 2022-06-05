import userEvent from "@testing-library/user-event";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authenticated, darkTheme } from "../store";

function NavBar({ children }) {
  const auth = useRecoilValue(authenticated);
  const [currentTheme, setCurrentTheme] = useRecoilState(darkTheme);
  const classTheme = currentTheme == true ? "bi-sun-fill" : "bi-moon-fill";
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              {auth.check && (
                <NavLink to="/dashboard" className="nav-link">
                  Dashboard
                </NavLink>
              )}
            </div>
            {auth.check ? (
              <div className="navbar-nav ms-auto">
                <NavLink to="/dashboard" className="nav-link">
                  {auth.user.name}
                </NavLink>
              </div>
            ) : (
              <div className="navbar-nav ms-auto">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </div>
            )}
            <div className="navbar-nav">
              <a
                className="nav-link"
                onClick={(e) => setCurrentTheme(!currentTheme)}
              >
                <i className={`bi ${classTheme}`}></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container py-4"><Outlet /></div>
    </div>
  );
}

export default NavBar;
