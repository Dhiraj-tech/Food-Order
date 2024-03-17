import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { intoStorage, setInState } from "../lib";
import http from "../http";
import { useDispatch } from "react-redux";
import { setUser } from "../store";
import { toast } from "react-toastify";

export const Login = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);

    http
      .post("login", form)
      .then(({ data }) => {
        if (["Customer"].includes(data.user.type)) {
          intoStorage("user_token", data.token, remember);
          dispatch(setUser(data.user));
          navigate("/");
        } else {
          toast.error("Access denied");
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  return (
    <div className="boxy">
      <section className="sign-in">
        <div className="container-box">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src="signin-image.jpg" alt="sing up image" />
              </figure>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Login</h2>
              <Form
                onSubmit={handleSubmit}
                className="register-form"
                id="login-form"
              >
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
                <div className="mb-3 form-check">
                  <Form.Check.Input
                    id="remember"
                    checked={remember}
                    onChange={(ev) => setRemember(ev.target.checked)}
                  />
                  <Form.Check.Label htmlFor="remember">
                    Remember Me
                  </Form.Check.Label>
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
                    Login
                  </button>
                </div>
              </Form>
              <p className="para">
                Don't have an account ?{" "}
                <Link
                  to="/register"
                  className="fw-bold text-decoration-underline"
                >
                  {" "}
                  Sign Up{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
