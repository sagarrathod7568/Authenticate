import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true,
    });
  }, []);

  const [loadingApproach, setLoadingApproach] = useState(false);
  const [loadingImpact, setLoadingImpact] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const handleApproachClick = () => {
    setLoadingApproach(true);

    setTimeout(() => {
      setLoadingApproach(false);
      alert("No Results Found");
    }, 2000);
  };

  const handleImpactClick = () => {
    setLoadingImpact(true);

    setTimeout(() => {
      setLoadingImpact(false);
      alert("No Results Found");
    }, 2000);
  };

  const handleAboutUs = () => {
    setAboutUs(true);

    setTimeout(() => {
      setAboutUs(false);
      alert("No Result Found");
    }, 2000);
  };

  const handleReadMore = () => {
    setReadMore(true);

    setTimeout(() => {
      setReadMore(false);
      alert("No Data Found");
    }, 2000);
  };

  return (
    <>
      <section className="container areas-of-work-section" id="areas-of-work">
        <div className="d-flex flex-column-reverse flex-lg-row justify-content-evenly align-items-center px-5">
          <div data-aos="fade-right" className="w-100 w-lg-50 mb-4 mb-lg-0">
            <h2 className="fs-1">
              20 years of digital transformation in public service delivery
            </h2>
            <h1 className="fw-bold">It's possible.</h1>
            <p className="text-muted">
              Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we’re
              driven by the power of open digital infrastructure and ecosystems
              to enable governments deliver accessible, inclusive and
              transparent services to every citizen.
            </p>
            <div className="d-flex flex-wrap gap-3 areas-of-work-section-button">
              <button
                className="btn btn-primary rounded-pill mt-2"
                onClick={handleApproachClick}
                disabled={loadingApproach}
              >
                {loadingApproach ? (
                  <span>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status"> Loading...</span>
                  </span>
                ) : (
                  "Our Approach"
                )}
              </button>
              <button
                className="btn btn-light rounded-pill border mt-2"
                onClick={handleImpactClick}
                disabled={loadingImpact}
              >
                {loadingImpact ? (
                  <span>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status"> Loading...</span>
                  </span>
                ) : (
                  "Our Impact"
                )}
              </button>
            </div>
          </div>

          <div data-aos="zoom-out" className="text-center">
            <img
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/People-Hero-image.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "500px" }}
            />
            {/* <img
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/22121932/New-Home-Page-Banner-Image.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "650px" }}
            /> */}
          </div>
        </div>
      </section>

      <section className="container ecosystem-section" id="ecosystem">
        <div className=" position-relative top-0">
          <img
            data-aos="zoom-in"
            className="w-100"
            src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/10/World-Map.png"
            alt=""
            width={1200}
          />

          <div className=" position-absolute top-0 d-flex justify-content-center p-5 m-5 gap-5">
            <h1 data-aos="fade-left">1,000,000,100+</h1>
            <p data-aos="fade-right" className=" w-50 ms-5 ps-5">
              Citizens availing public services through eGov's Digital Public
              Goods (DPG)
            </p>
          </div>

          <div className="position-absolute top-50 d-flex justify-content-center p-5 m-5 align-items-center gap-5">
            <div className="ps-5 ms-5">
              <h2 data-aos="zoom-in">1.1 Billion+</h2>
              <p data-aos="zoom-in">Public services delivered</p>
            </div>
            <div>
              <h2 data-aos="zoom-in">50+ partners</h2>
              <p data-aos="zoom-in">From technology, governments and NGOs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5" id="products-solutions">
        <div className="products-solutions-section d-flex flex-column flex-lg-row justify-content-center gap-4 gap-lg-5 mt-5 pt-5 shadow-lg rounded-4 my-5 px-5">
          <div
            data-aos=""
            className="card-1 p-3 mb-5 rounded-4 w-100 w-lg-auto"
          >
            <p className="mb-0">Big problems need</p>
            <h1 className="fw-bold mb-4">bold approaches</h1>

            <button className="btn btn-primary rounded-pill border m-1 w-100">
              Public Health
            </button>
            <br />
            <button className="btn btn-light rounded-pill border m-1 w-100">
              Public Finance
            </button>
            <br />
            <button className="btn btn-light rounded-pill border m-1 w-100">
              Local Governance
            </button>
            <br />
            <button className="btn btn-light rounded-pill border m-1 w-100">
              Water & sanitation
            </button>
          </div>

          <div
            data-aos="fade-up"
            className="card-2 shadow-lg p-3 mb-5 rounded-4 position-relative w-100 w-lg-auto "
          >
            <img
              className="pt-5 mt-5 img-fluid"
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/ICU-Equipment.G16.2k-1-3.png"
              alt=""
            />

            <div className="position-absolute top-0 p-3 w-100">
              <h1 className="fw-bold text-light">210+</h1>
              <p>cities LIVE with 10BedICU across India</p>

              <button
                className="btn btn-light rounded-pill border m-1"
                onClick={handleReadMore}
                disabled={readMore}
              >
                {readMore ? (
                  <>
                    <span className="spinner-border spinner-border-sm"></span>
                    <span className="ms-2">Loading...</span>
                  </>
                ) : (
                  "Read More"
                )}
              </button>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="card-3 shadow-lg p-3 mb-5 rounded-4 position-relative w-100 w-lg-auto"
          >
            <img
              className="pt-5 mt-5 img-fluid"
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/10/covid-vaccine-1.png"
              alt=""
            />

            <div className="position-absolute top-0 p-3 w-100">
              <h1 className=" fw-bold text-light">2 Bn</h1>
              <p>COVID-19 vaccination certificates issued</p>

              <button
                className="btn btn-light rounded-pill border m-1"
                onClick={handleAboutUs}
                disabled={aboutUs}
              >
                {aboutUs ? (
                  <>
                    <span className="spinner-border spinner-border-sm"></span>
                    <span className="ms-2">Loading...</span>
                  </>
                ) : (
                  "Read More"
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container about-us-section pt-5" id="about-us">
        <div className="text-center pt-2 px-2 px-md-0 areas-of-work-section">
          <h2 className=" fw-lighter">
            20 years of reimagining for citizens and
          </h2>
          <h1 className=" fw-bold">sustaining change</h1>
          <p>
            Technology is powerful, but is only one piece of the puzzle, when it
            comes to enhancing the quality of life for every citizen. To have
            sustainable impact at scale, the collective energy of local networks
            to solve local problems needs to be tapped into. Our partners &
            networks bring this collective energy to life. The ecosystem already
            exists; our task is to facilitate and amplify their efforts. For 20
            years, we’ve been turning small steps into lasting, meaningful
            change, so that no citizen is left behind.
          </p>
        </div>

        <div className="p-5">
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-md-5">
            <img
              data-aos="fade-right"
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgDF0FG2a7z48-zslUJjZNSx0dTBw0JGtEA&s"
              alt=""
            />
            <img
              data-aos="fade-left"
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHUGOFHBmdyUQAKUF-MXhhnBRPxl9BGglA&s"
              alt=""
            />
          </div>

          <div className="d-flex justify-content-center p-4">
            <button
              className="btn btn-light rounded-pill border m-1"
              onClick={handleAboutUs}
              disabled={aboutUs}
            >
              {aboutUs ? (
                <span>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status"> Loading...</span>
                </span>
              ) : (
                "About Us"
              )}
            </button>
          </div>
        </div>
      </section>

      <section
        className="our-platform-section container-fluid my-5 "
        id="our-platform"
      >
        <div className="container p-1">
          <div className="our-platform position-relative px-lg-5">
            <div className="py-4">
              <div
                data-aos="fade-up"
                className="shadow-none text-light rounded w-50 w-lg-50"
              >
                <img
                  src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/10/digit-n.png"
                  alt=""
                  width={200}
                />
                <h2 className=" fs-3">Our open source</h2>
                <h1 className="fw-bold">technology-for-good platform</h1>
                <p>
                  DIGIT, short for Digital Infrastructure for Governance,
                  Inclusion and Transformation is eGov's open-source platform
                  with reusable building blocks and shared data registries that
                  can be used to build solutions in multiple sectors.
                </p>
                <button
                  className="btn rounded-pill border btn-light"
                  onClick={handleReadMore}
                  disabled={readMore}
                >
                  {readMore ? (
                    <span>
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                      <span role="status"> Loading...</span>
                    </span>
                  ) : (
                    "Explore the platform"
                  )}
                </button>
              </div>
            </div>

            <div
              data-aos="fade-down"
              className="platform-img position-absolute bottom-0 end-0"
            >
              <img
                src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/22154549/DIGIT-Image-Only.png"
                alt=""
                className="img-fluid"
                style={{ maxWidth: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
