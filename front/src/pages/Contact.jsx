import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import http from "../http";
import { setInState } from "../lib";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);

    http
      .post("contacts", form)
      .then(() => {
        navigate("/contacts");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="mt-2 mb-2">
        <nav className="sub-nav">
          <Link to="/" className="sub-link">
            Home
          </Link>{" "}
          /
          <Link to="/contacts" className="sub-link">
            Contact Us
          </Link>
        </nav>
        <h2 className="text-center feature-title">Contact Us</h2>{" "}
      </div>
      {/* <div className="mt-2 mb-2">
      <h2 className="text-center feature-title">Contact Us</h2>
    </div> */}
      <section className="contact-section mb-5">
        <div className="container">
          <div className="row align-items-center mt-4">
            <div className="col-lg-6">
              <div className="section-title mt-4 mt-lg-0">
                <h3 className="title">Get in touch</h3>

                <Form
                  onSubmit={handleSubmit}
                  className="contact-form mt-4"
                  name="myForm"
                  id="myForm"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <Form.Label htmlFor="name" className="form-label">
                          Name
                        </Form.Label>
                        <Form.Control
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Enter your name"
                          onChange={(ev) => setInState(ev, form, setForm)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <Form.Label htmlFor="email" className="form-label">
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          onChange={(ev) => setInState(ev, form, setForm)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <Form.Label htmlFor="subject" className="form-label">
                          Subject
                        </Form.Label>
                        <Form.Control
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Enter your subject"
                          onChange={(ev) => setInState(ev, form, setForm)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <Form.Label htmlFor="meassage" className="form-label">
                          Your Message
                        </Form.Label>
                        <textarea
                          className="form-control"
                          id="meassage"
                          placeholder="Enter your message"
                          name="message"
                          rows="3"
                          onChange={(ev) => setInState(ev, form, setForm)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-start">
                    <button
                      loading={loading}
                      type="submit"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                    >
                      {" "}
                      Send Message
                    </button>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-lg-5 ms-auto order-first order-lg-last">
              <div className="mt-5">
                <img src="img/photo-4.png" alt="" className="img-fluid" />
              </div>
              <div className="mt-4 pt-3">
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">New Baneshwor, kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="fa-solid fa-message"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">foodology@mail.net</p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">+977-1254224</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
