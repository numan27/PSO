import { startTransition } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AppLayout from '../../components/Layout/AppLayout'
import PATH from "../../utils/path";

const SubmitRegistration = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        startTransition(() => {
            navigate(path);
        });
    }

    return (
        <AppLayout>
            <Container>
                <div className="h_screen d-flex flex-column justify-content-center align-items-center text-center">
                    <h2 className='fw-bold'>Thanks for submitting your application.</h2>
                    <p className='fs-4'>Your login credentials & application ID have been sent to you email address for further follow up</p>
                    <p className='fs-4'>After Verification of your documents. We Will inform you accordingly.</p>
                    <div className='w-50 text-center'>
                        <Button variant="warning" size="lg" className="rounded-0 fw-semibold w-50 mobile_width md_width py-3 mt-3 px-5" onClick={() => handleNavigate(PATH.LANDING_PAGE)}>Back</Button>
                    </div>
                </div>
            </Container>

        </AppLayout>
    )
}

export default SubmitRegistration