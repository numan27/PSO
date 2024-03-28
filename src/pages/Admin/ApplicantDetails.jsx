import { startTransition } from "react";
import { Container, Row, Col, Table, Form, Button, Dropdown } from "react-bootstrap";
import AppLayout from '../../components/Layout/AppLayout';
import { useNavigate } from "react-router-dom";
import { CgAsterisk } from 'react-icons/cg';
import { BsChevronDown } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import PATH from "../../utils/path";


const ApplicantDetails = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  
    const name = queryParams.get('name');
    const cnic = queryParams.get('cnic');


    const navigate = useNavigate();

    const handleNavigate = (path) => {
        startTransition(() => {
            navigate(path);
        });
    }

    return (
        <AppLayout isLoggedIn={true}>
            <Container fluid className="px-sm-5 mb-5 px-3 applicant_details">
                <Row>
                    <Col xl={9} lg={11} md={11} sm={11} className='mx-auto'>
                        <div className='my-5'>
                            <h1 className='fw-bold'>Applicant’s Details</h1>
                        </div>
                        <Row className='d-flex justify-content-between'>
                            <Col md={5}>
                                <Table className='' bordered>
                                    <thead>
                                        <tr>
                                            <th className='w-50'>Name</th>
                                            <td>{name}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>District</th>
                                            <td>Bahawalpur</td>
                                        </tr>
                                        <tr>
                                            <th>Tehsil</th>
                                            <td>Bahawalpur City</td>
                                        </tr>
                                        <tr>
                                            <th>Date & Time</th>
                                            <td>05/11/2022 13:46</td>
                                        </tr>
                                        <tr>
                                            <th>Fard Malkiat</th>
                                            <td>Attached</td>
                                        </tr>
                                        <tr>
                                            <th>CNIC</th>
                                            <td>{cnic}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={5}>
                                <Table className='' bordered>
                                    <thead>
                                        <tr>
                                            <th className='w-50'>Aks Shajra</th>
                                            <td>Attached</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Company</th>
                                            <td>Active</td>
                                        </tr>
                                        <tr>
                                            <th>Ogra Status</th>
                                            <td>Active</td>
                                        </tr>
                                        <tr>
                                            <th>Company Layout Plan</th>
                                            <td>Attached</td>
                                        </tr>
                                        <tr>
                                            <th>Company MOU Copy</th>
                                            <td>Attached</td>
                                        </tr>
                                        <tr>
                                            <th>Affidavit</th>
                                            <td>Attached</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fs-4 fw-bold'>Remarks <CgAsterisk className='text-danger' /></Form.Label>
                                    <Form.Control rows={5} as="textarea" className='rounded-0' placeholder="Enter remarks" />
                                </Form.Group>
                            </Col>

                            {/* Buttons */}
                            <div className='d-flex flex-lg-row flex-column justify-content-end'>

                                <Button variant="danger" size="lg" className="rounded-0 fw-semibold py-2 py-sm-3 px-0 px-md-5">Objection / Refer back
                                </Button>


                                <Button size="lg" className="rounded-0 fw-semibold py-2 py-sm-3 px-5 btn_primary mx-lg-5 mx-0 my-lg-0 my-3 "
                                >
                                    Verify
                                </Button>
                                <Button variant="warning" size="lg" className="rounded-0 fw-semibold py-2 py-sm-3 px-5">
                                    Register
                                </Button>
                            </div>

                            {/* Checkboxes */}
                            <div className='d-flex flex-wrap justify-content-between mt-4 mb-5 checkBox_wrapper'>
                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Label className='mb-0 ms-2'>DPO</Form.Label>
                                </Form.Group>

                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Group className='d-flex align-items-center'>
                                        <Form.Check aria-label="option 1" />
                                        <Form.Label className='mb-0 ms-2'>ACs</Form.Label>
                                    </Form.Group>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <BsChevronDown className='text-black ms-1' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>

                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Group className='d-flex align-items-center'>
                                        <Form.Check aria-label="option 1" />
                                        <Form.Label className='mb-0 ms-2'>CO MCs</Form.Label>
                                    </Form.Group>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <BsChevronDown className='text-black ms-1' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>

                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Label className='mb-0 ms-2'>XEN Highway</Form.Label>
                                </Form.Group>

                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Label className='mb-0 ms-2'>PTCL</Form.Label>
                                </Form.Group>

                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Label className='mb-0 ms-2'>SNGPL</Form.Label>
                                </Form.Group>

                            </div>
                        </Row>
                    </Col>
                </Row>


            </Container>
        </AppLayout>
    )
}

export default ApplicantDetails