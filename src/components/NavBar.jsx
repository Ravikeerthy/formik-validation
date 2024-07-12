import React from "react";
import "./styles/navstyle.css";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" aria-current="page">
                  <i className="fa-solid fa-face-laugh-wink" id="face-wink"></i>
                  KR Admin
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fa-solid fa-book-open-reader"></i>
                  Dash Board
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/createuser">
                  <i className="fa-solid fa-book-open-reader"></i>
                  Create User
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fa-solid fa-book-open-reader"></i>
                  Edit User
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fa-solid fa-book-open-reader"></i>
                  Add Editor
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link">
                  {" "}
                  <i className="fa-solid fa-book-open-reader"></i>
                  Users
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link">
                  <i className="fa-solid fa-book-open-reader"></i>Books List
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
