import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/Actions/UserActions';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector(state => state.UserReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    dispatch(loginUser(email, password)); //call function
  };

  useEffect(() => {
    if (user) {
      navigate("/Profil");
    }
  }, [user, navigate]);


  const appStyle = {
    backgroundImage: `url('https://marketplace.canva.com/EAD_IsMYK_w/1/0/1600w/canva-arri%C3%A8re-plan-virtuel-arc-en-ciel-d%C3%A9grad%C3%A9-rose-orange-et-bleu-VwJMC37j5jQ.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={appStyle}>
      <Container style={{ maxWidth: '600px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
            <Form>
              <Form.Group controlId="formEmail">
                <InputGroup size="lg" className="mb-3">
                  <InputGroup.Text style={{ width: '120px' }}>Email</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <InputGroup size="lg" className="mb-3">
                  <InputGroup.Text style={{ width: '120px' }}>Password</InputGroup.Text>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    aria-label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                </InputGroup>
              </Form.Group>

              <Button variant="primary" className="w-100" onClick={handleClick}>
                Login
              </Button>
              <div className="text-center mt-3">
              <Link to={"/"}>Forget my password!</Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
