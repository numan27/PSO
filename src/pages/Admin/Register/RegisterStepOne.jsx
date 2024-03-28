import { useState, startTransition } from "react";
import { Col, Button, Row, Container, Form } from "react-bootstrap";
import { CgAsterisk } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import AppLayout from '../../../components/Layout/AppLayout';
import PATH from "../../../utils/path";

const Register = () => {
  const navigate = useNavigate();
  const [formOneData, setFormOneData] = useState({
    name: "",
    fatherName: "",
    email: "",
    phoneNumber: "",
    cnic: "",
    omc: "",
    address: "",
    tehsil: "",
    lat: "",
    long: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormOneData({ ...formOneData, [name]: value });
  };


  const handleNavigate = (path) => {
    startTransition(() => {
      navigate(path);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formOneData.name &&
      formOneData.fatherName &&
      formOneData.phoneNumber &&
      formOneData.cnic &&
      formOneData.omc &&
      formOneData.address &&
      formOneData.tehsil &&
      formOneData.lat &&
      formOneData.long
    ) {
      const updatedFormData = [formOneData];
      localStorage.setItem("formOneData", JSON.stringify(updatedFormData));
      console.log(updatedFormData); // Log the updated form data array
      setFormOneData({
        name: "",
        fatherName: "",
        email: "",
        phoneNumber: "",
        cnic: "",
        omc: "",
        address: "",
        tehsil: "",
        lat: "",
        long: "",
      });
    }
  };



  return (
    <AppLayout>
      <Container>
        <Row className="d-flex justify-content-center align-items-center my-md-5 my-4">
          <div className="d-flex justify-content-end px-lg-5 px-0 mb-5">
            <div className="d-flex md_flexCol align-items-center justify-content-between px-lg-5 px-0 w-75 md_width">
              <h1 className="text-center fw-bold">Application Form</h1>
              <div className="d-flex justify-content-end">
                <span className="text_secondary fs-5 fw-semibold pe-lg-5 px-0">Step: 1/2</span>
              </div>
            </div>
          </div>
          <Col md={10} xs={12}>
            <Form className='register_form mt-md-4 mt-0' onSubmit={handleSubmit}>
              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>Name of Applicant <CgAsterisk /> </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formOneData.name}
                  className='w-50 md_width inputField_register'
                  placeholder="Muhammad Jameel"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>Father Name <CgAsterisk /> </Form.Label>
                <Form.Control
                  type="text"
                  name="fatherName"
                  value={formOneData.fatherName}
                  className='w-50 md_width inputField_register'
                  placeholder="Saleem Afzal"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>Email ID <CgAsterisk /> </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formOneData.email}
                  className='w-50 md_width inputField_register'
                  placeholder="jameel232@gmail.com"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>Phone Number <CgAsterisk /> </Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  value={formOneData.phoneNumber}
                  className='w-50 md_width inputField_register'
                  placeholder="0300-9687482"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>
                  CNIC No. <CgAsterisk />
                </Form.Label>
                <Form.Control
                  type="number"
                  name="cnic"
                  className='w-50 md_width inputField_register'
                  placeholder="31202-0231421-5"
                  value={formOneData.cnic}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>
                  Name of OMC <CgAsterisk />
                </Form.Label>
                <Form.Control
                  type="text"
                  name="omc"
                  className='w-50 md_width inputField_register'
                  placeholder="TOTAL PARCO"
                  value={formOneData.omc}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>
                  Address of Proposed Site <CgAsterisk />
                </Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  className='w-50 md_width inputField_register'
                  placeholder="Mouza Fatu wali, Samma Satta Road"
                  value={formOneData.address}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>
                  Tehsil <CgAsterisk />
                </Form.Label>
                <Form.Control
                  type="text"
                  name="tehsil"
                  className='w-50 md_width inputField_register'
                  placeholder="Bahawalpur City"
                  value={formOneData.tehsil}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <div className="d-flex align-items-center justify-content-center px-0 ps-lg-4 pe-xl-0 pe-lg-4 md_flexCol">
                <Form.Label className='w-50 md_width fs-4'>
                  GPS Location <CgAsterisk />
                </Form.Label>

                <Row className="w-50 md_flexCol md_width">
                  <Col>
                    <Form.Group className="px-0 px-xl-4 md_flexCol md_width d-flex align-items-center me-xl-0 me-lg-2 mx-0">
                      <Form.Label className='fs-4 me-lg-2 mx-0'>
                        Lat:
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="lat"
                        className='md_width inputField_register'
                        placeholder="29.394295"
                        value={formOneData.lat}
                        onChange={handleInputChange}
                        required
                        step="0.0000001"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="px-0 px-xl-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                      <Form.Label className='fs-4 me-lg-2 mx-0'>
                        Long:
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="long"
                        className='md_width inputField_register'
                        placeholder="71.637586"
                        value={formOneData.long}
                        onChange={handleInputChange}
                        required
                        step="0.0000001"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              <div className="d-flex justify-content-end md_width mt-3 mt-md-5 pt-5 px-lg-4 px-0">
                <Button
                  className='submit_btn next_btn md_width border rounded-3 py-2 fs-2'
                  type="submit"
                  disabled={
                    !formOneData.name ||
                    !formOneData.fatherName ||
                    !formOneData.email ||
                    !formOneData.phoneNumber ||
                    !formOneData.cnic ||
                    !formOneData.omc ||
                    !formOneData.address ||
                    !formOneData.tehsil ||
                    !formOneData.lat ||
                    !formOneData.long
                  }
                  onClick={() => handleNavigate(PATH.REGISTER)}
                >
                  Next
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
};

export default Register;