import signUp from "../img/signup.png";
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCallback, useState } from "react";
import Axios from "../utils/axios";
import InputErrorMessage from "./InputErrorMessage";
import { useHistory } from "react-router";
import {signUpAction} from "../store/actions/authAction";
import { useDispatch } from "react-redux";

export default function SignUp() {
    const [errorObj, setErrorObj] = useState({type: "", msg: ""});
    const history = useHistory(null);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: ""
    });
    
    const onClickForm = async (e) => {
        e.preventDefault();
        console.log(state);
        try {
            const { data } = await Axios.post('/sign-up', state); 
            if (data.success) { 
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                dispatch(signUpAction(data));
                history.push("/");
            } else{
                const msg = hendlerErrorObject(data?.msg);
                setErrorObj(msg);
            }  
            console.log(data);
          }
        catch (err) {
            console.log(err);
            const msg = hendlerErrorObject(err.response?.data?.msg);
            setErrorObj(msg);
          }
    }

    const hendlerErrorObject = (errorMsg = "") => {
            if(errorMsg.includes("E11000")){
                return {
                    type: 'email',
                    message: 'This user exist. Choose another email!'
                }
            }

            const errorType = errorMsg.slice(errorMsg.indexOf('"'), errorMsg.lastIndexOf('"'));
            return {
                type: errorType.replace(`\"`, '').replace('\\',''),
                message: errorMsg
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
                            <InputErrorMessage type="firstName" errorObj={errorObj} />
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={state.firstName}
                                placeholder="First name"
                                onChange={inputChangeHendler}
                            />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupLastName">
                            <InputErrorMessage  type="lastName" errorObj={errorObj} />
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={state.lastName}
                                placeholder="Last name"
                                onChange={inputChangeHendler}
                            />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPhoneNumber">   
                            <InputErrorMessage type="phone" errorObj={errorObj} />
                            <Form.Control 
                                type="text" 
                                name="phone"
                                value={state.phone}
                                placeholder="Phone number" 
                                onChange={inputChangeHendler}
                            />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupEmail">
                            <InputErrorMessage type="email"  errorObj={errorObj} />
                            <Form.Control
                                type="email"
                                name="email"
                                value={state.email}
                                placeholder="Enter email" 
                                onChange={inputChangeHendler}
                            />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPassword">   
                            <InputErrorMessage type="password" errorObj={errorObj} />
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