import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div className="mt-2 mb-2">
        <nav className="sub-nav">
          <Link to="/" className="sub-link">
            Home
          </Link>{" "}
          /
          <Link to="/about" className="sub-link">
            About Us
          </Link>
        </nav>
        <h2 className="text-center feature-title">About Us</h2>
      </div>

      {/* <div className="mt-2 mb-2">
      <h2 className="text-center feature-title">About Us</h2>
    </div> */}
      <section className="about">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay="200"
              data-aos-duration="300"
            >
              <div className="img-subscribe">
                <img alt="Illustration" src="about-us.jpg" />
              </div>
            </div>
            <div
              className="col-lg-5 offset-lg-1"
              data-aos="flip-up"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              <div className="about-content">
                <h2>About Chiyalogy</h2>
                <br />
                <h5>Tradition since 2022</h5>
                <p>
                  The Catering was founded in blabla by Mr. Smith in lorem ipsum
                  dolor sit amet, consectetur adipiscing elit consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute iruredolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.We only use
                  seasonal ingredients.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum consectetur
                  adipiscing elit, sed do eiusmod temporincididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
