import { startTransition } from "react";
import { Button, Col, Row } from "react-bootstrap"
import IMAGES from "../../assets/images"
import AppLayout from "../../components/Layout/AppLayout"
import { Link, useNavigate } from "react-router-dom";
import PATH from "../../utils/path";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    startTransition(() => {
      navigate(path);
    });
  }

  const handleClick = () => {
    startTransition(() => {
      navigate("/noc");
    });
  };


  return (

    <AppLayout showTrackApplication={false} isLoggedIn={false}>

      {/* Hero */}
      <section>
        <img className="w-100" src={IMAGES.BANNER_2} alt="banner" />
      </section>

      {/* Fort */}
      <section>
        <Row className="bg_primary_2 text-white">
          <Col lg={7} className="d-flex justify-content-center align-items-center py-lg-0 py-5 px-lg-5">
            <div className="mx-auto px-3 px-sm-5 py-5">
              <div className="textAlign">
                <h2 className="fw-semibold mainHeading mb-5 mobileText_h textJustify">Welcome Online Petrol Pump Registration Portal</h2>
                <p className="fs-4 fw-light textJustify mobileText_p mb-5 pe-xl-5 pe-0">
                  The Administration of Bahawalpur has developed online dashboard for Petrol Pump registration. The application submission process will minimize human interventions, in this process leading to managerial efficiency and process transparency.
                </p>
              </div>
              <Row className="w-100 mx-auto">
                <Col md={5} className="mb-3 mb-md-0 me-md-3 mx-0">
                  <Button variant="warning" size="lg" className="rounded-0 w-100 login_btn py-2 py-sm-3 px-5" onClick={() => handleNavigate(PATH.REGISTER_STEP_ONE)}>Register</Button>
                </Col>

                <Col md={5}>
                  <Button variant="warning" size="lg" className="rounded-0 w-100 login_btn py-2 py-sm-3 px-5" onClick={() => handleNavigate(PATH.LOGIN)}>Login</Button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={5} className="bg-danger px-0">
            <img src={IMAGES.FORT} className="w-100 h-100" alt="" />
          </Col>
        </Row>
      </section>

      {/* Policy */}
      <section>
        <Row className="policy_section text_primary d-flex justify-content-center align-items-center">
          <Col lg={5} md={10} sm={10} xs={12} className="mt-xl-5 pt-5 px-4 px-sm-0">
            <h2 className="fw-semibold fs-3 mb-4 mt-xl-0 mt-sm-5 mt-0">Register a Petrol Pump
            </h2>
            <h1 className="fw-bold mb-4 text-white">Policy/ Procedure for
              Establishment of
              Petrol Pump
            </h1>

            <h2
              onClick={handleClick}
              className="fw-semibold fs-3 mb-4 cursor-pointer">
              Click here to View
            </h2>
          </Col>
        </Row>
      </section>


      {/* Checklist */}
      <section>
        <Row className="checklist text_primary d-flex justify-content-center align-items-center">
          <Col lg={4} className="">
            <img src={IMAGES.CHECKLIST} alt="checklist" className="w-100" />
          </Col>
          <Col lg={8} className="">
            <div className="checkWrapper px-4 text-center pt-5 pt-lg-0 mb-5 mb-lg-0 mb-md-2">

              <div className="d-flex flex-column align-items-center cursor-pointer">
                <img src={IMAGES.CHECK_1} alt="check" width="220" height="220" className="" />
                <h3 className="fs-5 fw-bold mt-3 mb-0">Checklist</h3>
              </div>

              <div className="d-flex flex-column align-items-center my-3 my-md-0 cursor-pointer">
                <img src={IMAGES.CHECK_2} alt="check" width="220" height="220" className="" />
                <h3 className="fs-5 fw-bold mt-3 mb-0">Frequently Asked <br /> Questions</h3>
              </div>

              <div className="d-flex flex-column align-items-center cursor-pointer">
                <img src={IMAGES.CHECK_3} alt="check" width="220" height="220" className="" />
                <h3 className="fs-5 fw-bold mt-3 mb-0">Pending NOCs</h3>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </AppLayout >

  )
}

export default Home
