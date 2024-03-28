import { useState, startTransition } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/Layout/AppLayout";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from "react-toastify";
import { login } from "../../app/features/auth/auth.slice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    startTransition(() => {
      setIsLoading(true);
      if (data.email === "admin@ppr.com" && data.password === "password@123") {
        // localStorage.setItem("user", JSON.stringify(data));
        // navigate("/stats");
        dispatch(login(data));
      } else {
        toast.error("Invalid credentials", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setIsLoading(false);
      }
    });
  };

  const validateEmail = (value) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value) || "Invalid email address";
  };

  return (
    <AppLayout>
      <Container>
        <Row className="h_screen d-flex justify-content-center align-items-center">
          <Col md={8} lg={5} xs={12}>
            <Card className="loginPage border-0 px-2 px-sm-5 pb-4 pt-2">
              <Card.Body>
                <div className="mb-3 mt-md-2">
                  <h2 className="fw-bold mb-4 text-uppercase text-center text_secondary">
                    LOGIN
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          className="py-3 rounded-0"
                          placeholder="Enter User Id"
                          {...register("email", { validate: validateEmail })}
                        />
                        {errors.email && (
                          <Form.Text className="text-danger">
                            {errors.email.message}
                          </Form.Text>
                        )}
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <div className="input-group d-flex align-items-center position-relative">
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            className="py-3 rounded-0"
                            placeholder="Enter Password"
                            {...register("password")}
                          />
                          <div className="input-group-append px-0">
                            <div
                              className="input-group-text eyeIcon cursor-pointer px-1 position-absolute"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <BiHide className="fs-4" />
                              ) : (
                                <BiShow className="fs-4" />
                              )}
                            </div>
                          </div>
                        </div>
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          className="bg_primary_2 block_btn py-sm-3 py-2 border-0 rounded-0"
                          type="submit"
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
};

export default Login;
