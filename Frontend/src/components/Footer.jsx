import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-top-section container-fluid ">
        <div className="container d-flex flex-column flex-lg-row justify-content-around gap-4 ">
          <div className="w-100 w-lg-25">
            <a href="#areas-of-work">
              <img
                className="pt-4"
                src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/25123706/eGov-Foundation.png"
                alt=""
                width={100}
              />
            </a>
            <p className="pt-3">
              Catalysing digital transformation in public service delivery at
              speed & scale.
            </p>
          </div>

          <div className="w-100 w-lg-25 pt-2">
            <h4 className=" fw-bold fs-5 pt-2">Useful Links</h4>
            <p className="p-1 m-0">Home</p>
            <p className="p-1 m-0">Our Impact</p>
            <p className="p-1 m-0">DIGIT Sandbox</p>
          </div>

          <div className="w-100 w-lg-25">
            <h4 className="pt-3 invisible">Hidden</h4>{" "}
            <p className="p-1 m-0">Our People</p>
            <p className="p-1 m-0">Financials</p>
            <p className="p-1 m-0">Contact Us</p>
          </div>

          <div className="w-100 w-lg-25">
            <h4 className="fw-bold fs-5 pt-3">Subscribe Now</h4>
            <p>
              Receive regular updates of our monthly newsletter DOT – in your
              inbox.
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="User email"
              />
              <span className="input-group-text">@email.com</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center pt-3 text-light">
        <div className="container d-flex justify-content-evenly">
          <p>©2024. eGov. All Rights Reserved.</p>
          <p>Privacy Policy Terms and Conditions</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
