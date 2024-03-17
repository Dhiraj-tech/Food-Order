import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setInState } from "../lib";
import http from "../http";

export const Register = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);

    http
      .post("register", form)
      .then(() => navigate("/login"))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  return (
    <div className="boxy">
      <section className="signup">
        <div className="container-box">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Register</h2>
              <Form
                onSubmit={handleSubmit}
                className="register-form"
                id="register-form"
              >
                <div className="form-groupy">
                  <label className="label-class" for="name">
                    <i className="fa-solid fa-user"></i>
                  </label>
                  <input
                    className="input-class"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    onChange={(e) => setInState(e, form, setForm)}
                    required
                  />
                </div>
                <div className="form-groupy">
                  <label className="label-class" for="email">
                    <i className="fa-solid fa-envelope"></i>
                  </label>
                  <input
                    className="input-class"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={(e) => setInState(e, form, setForm)}
                    required
                  />
                </div>
                <div className="form-groupy">
                  <label className="label-class" for="password">
                    <i className="fa-solid fa-lock"></i>
                  </label>
                  <input
                    className="input-class"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setInState(e, form, setForm)}
                    required
                  />
                </div>
                <div className="form-groupy">
                  <label className="label-class" for="confirm_password">
                    <i className="fa-solid fa-lock"></i>
                  </label>
                  <input
                    className="input-class"
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    onChange={(e) => setInState(e, form, setForm)}
                    required
                  />
                </div>
                <div className="form-groupy">
                  <label className="label-class" for="phone">
                    <i className="fa-solid fa-phone"></i>
                  </label>
                  <input
                    className="input-class"
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    onChange={(e) => setInState(e, form, setForm)}
                    required
                  />
                </div>
                <div className="form-groupy">
                  <label className="label-class" for="address">
                    <i className="fa-solid fa-address-book"></i>
                  </label>
                  <input
                    className="input-class"
                    name="address"
                    id="address"
                    placeholder="Your Address"
                    onChange={(e) => setInState(e, form, setForm)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn 
                            btn-dark"
                    disabled={loading}
                  >
                    {loading ? (
                      <i
                        className="fa-solid
                                fa-spinner fa-spin me-2"
                      ></i>
                    ) : null}
                    Register
                  </button>
                </div>
              </Form>
              <p className="para">
                Already a member ?{" "}
                <Link to="/login" className="fw-bold text-decoration-underline">
                  {" "}
                  Sign In{" "}
                </Link>
              </p>
            </div>
            <div className="signup-image">
              <figure>
                <img
                  src="signup-image.jpg"
                  className="img-regis"
                  alt="sing up image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
