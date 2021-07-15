import signUp from "../img/signup.png";
import {Form} from 'react-bootstrap';

export default function SignUp() {
    return(
        <div className="signUp">
            <div className="signUp-img">
                <div className="img-center">
                    <img src={signUp}></img>  
                </div>
            </div>
            <div className="signUp-form">
                <div className="form-center">
                    <h1>Sign Up</h1>
                    <p>Already have an account? Sign in</p>
                    <Form>
                        <Form.Group controlId="formGroupFirstName">
                            <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupLastName">
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPhoneNumber">   
                            <Form.Control type="text" placeholder="Phone number" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">   
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <button className="button" type="submit"></button>
                    </Form>
                </div>
            </div>
        </div>
    );
}