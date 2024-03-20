import { Link } from "react-router-dom";
import { FeaturedList } from "../components/FeaturedList";
import React, { useState, useEffect } from "react";

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleRadioChange = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <>
      <div className="slider">
        <input
          type="radio"
          name="toggle"
          id="btn-1"
          checked={currentSlide === 1}
          onChange={() => handleRadioChange(1)}
        />
        <input
          type="radio"
          name="toggle"
          id="btn-2"
          checked={currentSlide === 2}
          onChange={() => handleRadioChange(2)}
        />
        <input
          type="radio"
          name="toggle"
          id="btn-3"
          checked={currentSlide === 3}
          onChange={() => handleRadioChange(3)}
        />

        <div className="slider-controls">
          <label htmlFor="btn-1"></label>
          <label htmlFor="btn-2"></label>
          <label htmlFor="btn-3"></label>
        </div>

        <ul className={`slides slide-${currentSlide}`}>
          <li className="slide">
            <div className="content">
              <span>our special dish</span>
              <h3 className="mt-2">spicy noodles</h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                natus dolor cumque?
              </p>
              <Link to="/menu" className="button button-2 mt-2">
                Order Now
              </Link>
            </div>
            <p className="slide-image">
              <img src="home-img-1.png" alt="stuff" width="320" height="240" />
            </p>
          </li>
          <li className="slide">
            <div className="content">
              <span>our special dish</span>
              <h3 className="mt-2">fried chicken</h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                natus dolor cumque?
              </p>
              <Link to="/menu" className="button button-2 mt-2">
                Order Now
              </Link>
            </div>
            <p className="slide-image">
              <img src="home-img-2.png" alt="stuff" width="320" height="240" />
            </p>
          </li>
          <li className="slide">
            <div className="content">
              <span>our special dish</span>
              <h3 className="mt-2">hot pizza</h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                natus dolor cumque?
              </p>
              <Link to="/menu" className="button button-2 mt-2">
                Order Now
              </Link>
            </div>
            <p className="slide-image">
              <img src="home-img-3.png" alt="stuff" width="320" height="240" />
            </p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="mt-5 mb-5">
        <h2 className="text-center feature-title">FEATURED MENU</h2>
        <FeaturedList uri="product/featured" />
      </div>

      <div className="col-12">
        <hr />
      </div>

      <section className="works-section gap no-top">
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="300"
          >
            <h2 className="text-center feature-title">How it works</h2>
            <p>
              Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
              tellus in
              <br /> metus vulputate eu scelerisque felis.
            </p>
          </div>
          <div className="row ">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay="200"
              data-aos-duration="300"
            >
              <div className="work-card">
                <img alt="img" src="illustration-1.png" />
                <h4>
                  <span>01</span> Select Restaurant
                </h4>
                <p>
                  Non enim praesent elementum facilisis leo vel fringilla.
                  Lectus proin nibh nisl condimentum id. Quis varius quam
                  quisque id diam vel.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              <div className="work-card">
                <img alt="img" src="illustration-2.png" />
                <h4>
                  <span>02</span> Select menu
                </h4>
                <p>
                  Eu mi bibendum neque egestas congue quisque. Nulla facilisi
                  morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla
                  pharetra diam sit amet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              <div className="work-card">
                <img alt="img" src="illustration-3.png" />
                <h4>
                  <span>03</span> Wait for delivery
                </h4>
                <p>
                  Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat
                  nisl vel pretium lectus quam id leo. A scelerisque purus
                  semper eget. Tincidunt arcu non.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section className="your-favorite-food gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="300"
            >
              <div className="img-subscribe">
                <img alt="img" src="photo-3.png" />
              </div>
            </div>
            <div
              className="col-lg-6 offset-lg-1"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              <div className="food-content-section">
                <h2>Food from your favorite restaurants to your table</h2>
                <p className="mt-3">
                  Pretium lectus quam id leo in vitae turpis massa sed. Lorem
                  donec massa sapien faucibus et molestie. Vitae elementum
                  curabitur vitae nunc.
                </p>
                <Link to="/menu" className="button button-2 mt-3">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="subscribe-section gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay="200"
              data-aos-duration="300"
            >
              <div className="img-subscribe">
                <img alt="Illustration" src="illustration-4.png" />
              </div>
            </div>
            <div
              className="col-lg-5 offset-lg-1"
              data-aos="flip-up"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              <div className="get-the-menu">
                <h2>Get the menu of your favorite restaurants every day</h2>
                <form>
                  <i className="fa-regular fa-bell"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <Link to="#" className="button button-2">
                    Subscribe
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
