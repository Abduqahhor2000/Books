import signUp from "../img/signup.png";
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCallback, useContext, useState } from "react";
import Axios from "../utils/axios";
import AuthContext from "../contexts/AuthContext";

export default function SignUp() {
    const context = useContext(AuthContext);
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: ""
    });
    
    const onClickForm = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Axios.post('/sign-up', state);
            if (!data.success) {
              return console.log(data.msg);
            }
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            context.setAuthDetails(data);
          }
          catch (err) {
            console.log(err.response);
          }
    }

    const inputChangeHendler = useCallback(e => {
        const {name, value} = e.target;
        setState(prevState => ({ ...state, [name]: value })); 
    }, [state]);

    return(
        <div className="signUp">
            <div className="signUp-img">
                <div className="img-center">
                    <img src={signUp} alt=""></img>  
                </div>
            </div>
            <div className="signUp-form">
                <div className="form-center">
                    <h1>Sign Up</h1>
                    <p>Already have an account? <Link to="/sign-in">Sign in</Link></p>
                    <Form onSubmit={onClickForm}>
                        <Form.Group className="form-group" controlId="formGroupFirstName" >
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={state.firstName}
                                placeholder="First name"
                                onChange={inputChangeHendler}
                            />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupLastName">
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={state.lastName}
                                placeholder="Last name"
                                onChange={inputChangeHendler}
                            />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPhoneNumber">   
                            <Form.Control 
                                type="text" 
                                name="phone"
                                value={state.phone}
                                placeholder="Phone number" 
                                onChange={inputChangeHendler}
                            />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                value={state.email}
                                placeholder="Enter email" 
                                onChange={inputChangeHendler}
                            />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPassword">   
                            <Form.Control 
                                type="password"
                                name="password"
                                value={state.password}
                                placeholder="Password" 
                                onChange={inputChangeHendler}
                            />
                        </Form.Group>
                        <button className="button" type="submit">Next step</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}