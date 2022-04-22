import React from "react";

const Services = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row z">
            <div className="col-10 mx-auto ">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Hii We are Investing in Your Skills{" "}
                    <strong className="brand-name text-danger">
                      {" "}
                      Zuber SkillShala.in
                    </strong>
                  </h1>
                  <h2 className="my-3">
                    We Support Poor but Talented Enterpreners.
                  </h2>
                  .-
                  <a className="btn btn-outline-info mt-3">Enroll Now </a>
                  <div className="mt-3"></div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src="https://lodestar.guru/challenge/assets/images/banner-imgg.png"
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
