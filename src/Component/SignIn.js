import signIn from "../img/signin.png";
import {Form} from 'react-bootstrap';

export default function SignIn() {
    return(
        <div className="signUp">
            <div className="signUp-img">
                <div className="img-center">
                    <img src={signIn}></img>  
                </div>
            </div>
            <div className="signUp-form">
                <div className="form-center">
                    <h1>Sign In</h1>
                    <p>Do not you have an account? Sign up</p>
                    <Form>
                        <Form.Group className="form-group" controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPassword">   
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <button className="button" type="submit">Next step</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}