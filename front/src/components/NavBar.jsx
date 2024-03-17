import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStorage, fromStorage, isEmpty } from "../lib";
import { clearUser, setUser } from "../store";
import http from "../http";
import { Nav, NavDropdown, Button } from "react-bootstrap";

export const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Assuming tablets and phones have a maximum width of 768px
  const user = useSelector((st) => st.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(user)) {
      const token = fromStorage("user_token");

      if (!isEmpty(token)) {
        http
          .get("profile/details")
          .then(({ data }) => {
            dispatch(setUser(data));
          })
          .catch((err) => {
            clearStorage("user_token");
          });
      }
    }
  }, [user]);

  const handleLogout = (ev) => {
    ev.preventDefault();

    dispatch(clearUser());
    clearStorage("user_token");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white col-12">
      <button
        className="navbar-toggler d-lg-none border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contacts">
              Contact Us
            </Link>
          </li>

          {isMobile && (
            <>
              {isEmpty(user) ? (
                <>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* <li className="nav-item active">
                    <Link className="nav-link" to="/profile">
                      <i className="fas fa-user-circle me-2"></i>
                      {user.name}
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" onClick={handleLogout}>
                      <i className="fas fa-sign-in-alt me-2"></i>
                      Logout
                    </Link>
                  </li> */}
                  <Nav className="dropp">
                      <NavDropdown title={<><i className="fa-solid fa-user-circle me-2 black-text"></i><span className="black-text">{user.name}</span></>} align="end">
                        <div className="dropdown-item text-end"></div>
                        <Link to="/profile" className="dropdown-item">
                          <i className="fa-solid fa-house me-2"></i>Dashboard
                        </Link>
                        <hr className="nav-dropdown-divider" />
                        <Button variant="link" className="dropdown-item rounded-0" onClick={handleLogout}>
                          <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>Logout
                        </Button>
                      </NavDropdown>
                    </Nav>   
                </>
              )}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
