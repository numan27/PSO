import { useState, useEffect, startTransition } from "react";
import { Col, Button, Row, Container, Form, Spinner } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AppLayout from '../../../components/Layout/AppLayout';
import INPUT_FILE_LIST from '../InputFileList';
import PATH from "../../../utils/path";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    startTransition(() => {
      navigate(path);
    });
  };

  const [formOneData, setFormOneData] = useState(null);
  const [formData, setFormData] = useState({
    files: [],
  });
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileChange = (e, index) => {
    const files = [...formData.files];
    files[index] = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      files,
    }));
    setIsFileUploaded(files.every((file) => file && file.type === "application/pdf"));
  };

  useEffect(() => {
    const storedFormOneData = JSON.parse(localStorage.getItem("formOneData"));
    if (storedFormOneData) {
      setFormOneData(storedFormOneData);
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...storedFormOneData,
      }));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFileUploaded) {
      setIsLoading(true);
      setTimeout(() => {
        const existingFormData = JSON.parse(localStorage.getItem("formData")) || [];
        const updatedFormData = [
          ...(Array.isArray(existingFormData) ? existingFormData : []),
          formData,
        ];
        localStorage.setItem("formData", JSON.stringify(updatedFormData));
        console.log(updatedFormData);
        setFormData({
          files: [],
        });
        setIsFileUploaded(false);
        setIsLoading(false);
      }, 4000);
    }
  };



  return (
    <AppLayout>
      <Container>
        <Row className="d-flex justify-content-center align-items-center my-5">
          <div className="d-flex justify-content-end px-lg-5 px-0 mb-5">
            <div className="d-flex align-items-center justify-content-between px-lg-5 px-0 w-100">
              <Button
                onClick={() => handleNavigate(PATH.REGISTER_STEP_ONE)}
                variant="outline-dark" className="fs-6 d-flex align-items-center"><BsArrowLeft className="me-2" /> Back</Button>
              <span className="text_secondary mx-lg-0 mx-auto fs-5 fw-semibold pe-lg-5 px-0">Step: 2/2</span>
            </div>
          </div>
          <Col md={10} xs={12}>
            <Form className='register_form' onSubmit={handleSubmit}>

              {INPUT_FILE_LIST.map((item, index) => (
                <Form.Group key={index} className="mb-4 px-0 px-lg-4 md_flexCol d-flex align-items-center justify-content-center cursor-pointer">
                  <Form.Label className='w-50 md_width fs-4 pe-md-5 px-0 cursor-pointer'>{item.label}</Form.Label>
                  <div className='w-50 md_width inputFile rounded cursor-pointer'>
                    <Form.Control
                      type="file"
                      id={`fileInput-${index}`}
                      name={`fileInput-${index}`}
                      className='cursor-pointer'
                      onChange={(e) => handleFileChange(e, index)}
                      accept="application/pdf"
                      required={index === 0}
                    />
                    <label htmlFor={`fileInput-${index}`} className='w-100 px-3 text-center cursor-pointer'>
                      {formData.files[index] && formData.files[index].type === 'application/pdf' ? (
                        <span className="mtext-success cursor-pointer d-flex align-items-center justify-content-center">
                          <FaCheck className="text-success me-3" /> File Uploaded Successfully
                        </span>
                      ) : (
                        "Upload PDF document"
                      )}
                    </label>
                  </div>
                </Form.Group>
              ))}

              <Form.Group className="d-flex align-items-center">
                <Form.Check
                  label=""
                  name="group1"
                  className="me-4"
                  checked={formData.group1}
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      group1: e.target.checked,
                    }))
                  }
                />
                <Form.Label className="fw-normal fst-italic">
                  I, hereby, declare that, the entries made by me in the Application Form are complete and true to the best of my knowledge and based on records. I, hereby, undertake to present all the required original documents in time.
                </Form.Label>
              </Form.Group>


              <div className="d-grid w-75 md_width px-0 px-lg-5 mt-3 mt-md-4 pt-5 mx-auto">
                <Button
                  className='submit_btn border rounded-3 py-2 fs-2'
                  type="submit"
                  disabled={formData.files.length < 1 || !formData.files[0] || !formData.group1}

                  onClick={() => handleNavigate(PATH.SUBMIT_REGISTRATION)}
                >
                  {isLoading ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    "Submit Application"
                  )}
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