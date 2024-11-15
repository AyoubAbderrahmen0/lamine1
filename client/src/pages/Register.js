import { Button, Card, Container, Form, InputGroup } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { registerUser } from '../redux/Actions/UserActions';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");

  const user = useSelector(state => state.UserReducer.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    await dispatch(registerUser({ userName: userName, email:email, password:password, age:age, phone:phone }));
  };

  useEffect(() => {
    if (user) {
      navigate("/Profile");
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
    <div className="App" style={appStyle}>
      <Container style={{ maxWidth: '600px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Register</h2>
            <Form>
              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>User Name</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  aria-label="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </InputGroup>

              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>Phone Number</InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  aria-label="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </InputGroup>

              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>Age</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Enter your age"
                  aria-label="Age"
                  onChange={(e) => setAge(e.target.value)}
                />
              </InputGroup>

              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>Email</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>

              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>Password</InputGroup.Text>
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

              <Button variant="primary" className="w-100" size="lg" onClick={handleClick}>
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Register;


// {userName: "Ayoub", email: "ayoubabderrahmen5@gmail.comm", password: "123ayoub123", age: "22",…}
// age
// : 
// "22"
// email
// : 
// "ayoubabderrahmen5@gmail.comm"
// password
// : 
// "123ayoub123"
// phone
// : 
// "12345678"
// userName
// : 
// "Ayoub"