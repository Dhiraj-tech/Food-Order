import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Layout.css";
import "bootstrap";
import { Link, Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { SearchBox } from "./";
import { useDispatch, useSelector } from "react-redux";
import { clearStorage, fromStorage, isEmpty, isString } from "../lib";
import { clearUser, setUser } from "../store";
import { useEffect, useState } from "react";
import http from "../http";
import { Button, Nav, NavDropdown } from "react-bootstrap";

export const Layout = () => {
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  const user = useSelector((st) => st.user.value);
  const cart = useSelector((st) => st.cart.value);

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

  useEffect(() => {
    if (Object.keys(cart).length) {
      let qt = 0,
        tl = 0;

      for (let k in cart) {
        qt += isString(cart[k].qty) ? parseInt(cart[k].qty) : cart[k].qty;
        tl +=
          cart[k].qty *
          (isEmpty(cart[k].product.discounted_price)
            ? cart[k].product.price
            : cart[k].product.discounted_price);
      }

      setQty(qt);
      setTotal(tl);
    } else {
      setQty(0);
      setTotal(0);
    }
  }, [cart]);

  const handleLogout = (ev) => {
    ev.preventDefault();

    dispatch(clearUser());
    clearStorage("user_token");
  };

  return (
    
      <div className="row min-vh-100">
        <div className="col-12">
          
            <div className="col-12 bg-dark py-2 d-md-block d-none">
              <div className="row">
                <div className="col-auto me-auto">
                  <ul className="top-nav">
                    <li>
                      <a href="tel:+123-456-7890">
                        <i className="fa fa-phone-square me-2"></i>+977-1254224
                      </a>
                    </li>
                    <li>
                      <a href="mailto:mail@ecom.com">
                        <i className="fa fa-envelope me-2"></i>foodology@mail.net
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-auto">
                  {isEmpty(user) ? (
                    <ul className="top-nav">
                      <li>
                        <Link to="/register">
                          <i className="fas fa-user-edit me-2"></i>Register
                        </Link>
                      </li>
                      <li>
                        <Link to="/login">
                          <i className="fas fa-sign-in-alt me-2"></i>Login
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    // <ul className="top-nav">
                    //   <li>
                    //     <Link to="/profile">
                    //       <i className="fas fa-user-circle me-2"></i>
                    //       {user.name}
                    //     </Link>
                    //   </li>
                    //   <li>
                    //     <a href="#" onClick={handleLogout}>
                    //       <i className="fas fa-sign-in-alt me-2"></i>Logout
                    //     </a>
                    //   </li>
                    // </ul>
                    <Nav>
                      <NavDropdown title={<><i className="fa-solid fa-user-circle me-2 white-text"></i><span className="white-text">{user.name}</span></>} align="end">
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
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 bg-white pt-4">
              <div className="row">
                <div className="col-lg-auto">
                  <div className="header-style">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="38"
                        viewBox="0 0 163 38"
                      >
                        <g id="Logo" transform="translate(-260 -51)">
                          <g
                            id="Logo-2"
                            data-name="Logo"
                            transform="translate(260 51)"
                          >
                            <g id="Elements">
                              <path
                                id="Path_1429"
                                data-name="Path 1429"
                                d="M315.086,140.507H275.222v-.894c0-11.325,8.941-20.538,19.933-20.538s19.931,9.213,19.931,20.538Z"
                                transform="translate(-270.155 -115.396)"
                                fill="#f29f05"
                              />
                              <path
                                id="Path_1430"
                                data-name="Path 1430"
                                d="M301.13,133.517a1.488,1.488,0,0,1-1.394-.994,11.361,11.361,0,0,0-10.583-7.54,1.528,1.528,0,0,1,0-3.055,14.353,14.353,0,0,1,13.37,9.527,1.541,1.541,0,0,1-.875,1.966A1.444,1.444,0,0,1,301.13,133.517Z"
                                transform="translate(-264.176 -113.935)"
                                fill="#fff"
                              />
                              <path
                                id="Path_1431"
                                data-name="Path 1431"
                                d="M297.343,146.544a14.043,14.043,0,0,1-13.837-14.211h2.975a10.865,10.865,0,1,0,21.723,0h2.975A14.043,14.043,0,0,1,297.343,146.544Z"
                                transform="translate(-266.247 -108.544)"
                                fill="#363636"
                              />
                              <path
                                id="Path_1432"
                                data-name="Path 1432"
                                d="M302.183,132.519a7.064,7.064,0,1,1-14.122,0Z"
                                transform="translate(-264.027 -108.446)"
                                fill="#363636"
                              />
                              <path
                                id="Path_1433"
                                data-name="Path 1433"
                                d="M320.332,134.575H273.3a1.528,1.528,0,0,1,0-3.055h47.033a1.528,1.528,0,0,1,0,3.055Z"
                                transform="translate(-271.815 -108.923)"
                                fill="#f29f05"
                              />
                              <path
                                id="Path_1434"
                                data-name="Path 1434"
                                d="M289.154,123.4a1.507,1.507,0,0,1-1.487-1.528v-3.678a1.488,1.488,0,1,1,2.975,0v3.678A1.508,1.508,0,0,1,289.154,123.4Z"
                                transform="translate(-264.154 -116.667)"
                                fill="#f29f05"
                              />
                              <path
                                id="Path_1435"
                                data-name="Path 1435"
                                d="M284.777,138.133H275.3a1.528,1.528,0,0,1,0-3.055h9.474a1.528,1.528,0,0,1,0,3.055Z"
                                transform="translate(-270.84 -107.068)"
                                fill="#363636"
                              />
                              <path
                                id="Path_1436"
                                data-name="Path 1436"
                                d="M284.8,141.691h-6.5a1.528,1.528,0,0,1,0-3.055h6.5a1.528,1.528,0,0,1,0,3.055Z"
                                transform="translate(-269.379 -105.218)"
                                fill="#363636"
                              />
                            </g>
                          </g>
                          <text
                            id="Quickeat"
                            transform="translate(320 77)"
                            fill="#363636"
                            font-size="20"
                            font-family="Poppins"
                            font-weight="700"
                          >
                            <tspan x="0" y="0">
                              FOODO
                            </tspan>
                            <tspan y="0" fill="#f29f05">
                              LOGY
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </Link>
                    
                  </div>
                </div>
                <div className="col-lg-5 mx-auto mt-4 mt-lg-0">
                  <SearchBox />
                </div>
                <div className="col-lg-auto text-center text-lg-left header-item-holder">
                  <Link to="/cart" className="header-item">
                    <i className="fas fa-shopping-bag me-2"></i>
                    <span id="header-qty" className="me-3">
                      {qty}
                    </span>
                    <i className="fas fa-money-bill-wave me-2"></i>
                    <span id="header-price">Rs. {total}</span>
                  </Link>
                </div>
              </div>

              <NavBar />
            </div>
        </div>

        <Outlet />

        <footer className="gap no-bottom" id="foot">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="footer-description">
                <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="38"
                        viewBox="0 0 163 38"
                      >
                      <g id="Logo-w" transform="translate(-260 -51)">
                        <g
                          id="Logo-2-w"
                          data-name="Logo-w"
                          transform="translate(260 51)"
                        >
                          <g id="Elements-w">
                            <path
                              id="Path_2429"
                              data-name="Path 2429"
                              d="M315.086,140.507H275.222v-.894c0-11.325,8.941-20.538,19.933-20.538s19.931,9.213,19.931,20.538Z"
                              transform="translate(-270.155 -115.396)"
                              fill="#f29f05"
                            />
                            <path
                              id="Path_2430"
                              data-name="Path 2430"
                              d="M301.13,133.517a1.488,1.488,0,0,1-1.394-.994,11.361,11.361,0,0,0-10.583-7.54,1.528,1.528,0,0,1,0-3.055,14.353,14.353,0,0,1,13.37,9.527,1.541,1.541,0,0,1-.875,1.966A1.444,1.444,0,0,1,301.13,133.517Z"
                              transform="translate(-264.176 -113.935)"
                              fill="#fff"
                            />
                            <path
                              id="Path_2431"
                              data-name="Path 2431"
                              d="M297.343,146.544a14.043,14.043,0,0,1-13.837-14.211h2.975a10.865,10.865,0,1,0,21.723,0h2.975A14.043,14.043,0,0,1,297.343,146.544Z"
                              transform="translate(-266.247 -108.544)"
                              fill="#fff"
                            />
                            <path
                              id="Path_2432"
                              data-name="Path 2432"
                              d="M302.183,132.519a7.064,7.064,0,1,1-14.122,0Z"
                              transform="translate(-264.027 -108.446)"
                              fill="#fff"
                            />
                            <path
                              id="Path_2433"
                              data-name="Path 2433"
                              d="M320.332,134.575H273.3a1.528,1.528,0,0,1,0-3.055h47.033a1.528,1.528,0,0,1,0,3.055Z"
                              transform="translate(-271.815 -108.923)"
                              fill="#f29f05"
                            />
                            <path
                              id="Path_2434"
                              data-name="Path 2434"
                              d="M289.154,123.4a1.507,1.507,0,0,1-1.487-1.528v-3.678a1.488,1.488,0,1,1,2.975,0v3.678A1.508,1.508,0,0,1,289.154,123.4Z"
                              transform="translate(-264.154 -116.667)"
                              fill="#f29f05"
                            />
                            <path
                              id="Path_2435"
                              data-name="Path 2435"
                              d="M284.777,138.133H275.3a1.528,1.528,0,0,1,0-3.055h9.474a1.528,1.528,0,0,1,0,3.055Z"
                              transform="translate(-270.84 -107.068)"
                              fill="#fff"
                            />
                            <path
                              id="Path_2436"
                              data-name="Path 2436"
                              d="M284.8,141.691h-6.5a1.528,1.528,0,0,1,0-3.055h6.5a1.528,1.528,0,0,1,0,3.055Z"
                              transform="translate(-269.379 -105.218)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <text
                          id="Quickeat-w"
                          transform="translate(320 77)"
                          fill="#fff"
                          font-size="20"
                          font-family="Poppins"
                          font-weight="700"
                        >
                          <tspan x="0" y="0">
                            FOODO
                          </tspan>
                          <tspan y="0" fill="#f29f05">
                            LOGY
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </Link>
                  <h2>The Best Restaurants in Your Home</h2>
                  <p>
                    Vitae congue mauris rhoncus aenean. Enim nulla aliquet
                    porttitor lacus luctus accumsan tortor posuere. Tempus
                    egestas sed sed risus pretium quam.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="menu">
                  <h4>Menu</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to="/">
                        home<i clLinkss="fa-solid fa-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        about us<i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/menu">
                        Menu<i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contacts">
                        Contact Us<i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="menu contacts">
                  <h4>Contacts</h4>
                  <div className="footer-location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>
                      New Baneshwor, Street No 2 , Kathmandu
                    </p>
                  </div>
                  <Link to="#">
                    <i className="fa-solid fa-envelope"></i>foodology@mail.net
                  </Link>
                  <Link to="#">
                    <i className="fa-solid fa-phone"></i>+977-1254224
                  </Link>
                </div>
                <ul className="social-media">
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-two gap no-bottom">
              <p>Copyright © 2024. Foodology. All rights reserved.</p>
              <div className="privacy">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms & Services</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
   
  );
};
