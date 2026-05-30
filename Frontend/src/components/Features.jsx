import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "../styles/Features.css";
import { cardsData, buttonsData } from "../assets/cardData";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true,
    });
  }, []);

  const [aboutUs, setAboutUs] = useState(false);
  const [whatsNew, setWhatsNew] = useState(false);

  const handleAboutUs = () => {
    setAboutUs(true);

    setTimeout(() => {
      setAboutUs(false);
      alert("No Result Found");
    }, 2000);
  };

  const handleWhatsNew = () => {
    setWhatsNew(true);

    setTimeout(() => {
      setWhatsNew(false);
      alert("No Data Found");
    }, 2000);
  };

  return (
    <>
      <section className="resources-section container py-5" id="resources">
        <div className="ms-2 ms-lg-5 ps-2 pt-5">
          <h1 className="pb-2 fw-light">
            Latest at <span className="fw-bold text-warning">eGov</span>
          </h1>
          <div className="d-flex flex-wrap gap-2">
            {buttonsData.map((btn) => (
              <button
                key={btn.id}
                className={`rounded-pill border btn btn-${btn.type}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-5 mb-5">
        <div className="d-flex flex-column flex-lg-row justify-content-center gap-4 gap-lg-5 fw-light mx-5">
          <div className="d-flex flex-column flex-lg-row justify-content-center gap-4 gap-lg-5 fw-light">
            {cardsData.map((card) => (
              <div
                key={card.id}
                data-aos={card.animation}
                className="border w-100 w-lg-25 rounded-4 bg-dark text-light"
              >
                <img
                  className="rounded-top-4 w-100 card-img"
                  src={card.image}
                  alt={card.title}
                />
                <h4 className="p-3">{card.title}</h4>
                <div className="d-flex flex-column flex-md-row gap-1 gap-md-2 px-2  fw-light ">
                  <p>• {card.author}</p>
                  <p>• {card.date}</p>
                </div>
                <button
                  className="btn btn-light rounded-pill border m-3"
                  onClick={handleWhatsNew}
                  disabled={aboutUs}
                >
                  {whatsNew ? (
                    <span>
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                      <span role="status"> Loading...</span>
                    </span>
                  ) : (
                    "What's New"
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-lg-start ms-lg-5 pt-3 ps-1">
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
              "See All"
            )}
          </button>
        </div>
      </section>
    </>
  );
};

export default Features;
