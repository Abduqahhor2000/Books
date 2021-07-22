import signIn from "../img/signin.png";
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from "../contexts/AuthContext"
import { useCallback, useContext, useState } from "react";
import Axios from "../utils/axios";

export default function SignIn() {
    const context = useContext(AuthContext);
    const [state, setState] = useState({
        email: 'aka@mail.ru',
        password: '123456'
    });

    const formSubmitHendler = useCallback(e => {
        const {name, value} = e.target;
        setState(prevState => ({ ...state, [name]: value })); 
    }, [state]);

    
    const onClickForm = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Axios.get('/login', state);
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
                    <p>Do not you have an account? <Link to="/sign-up">Sign up</Link></p>
                    <Form onSubmit={onClickForm}>
                        <Form.Group className="form-group" controlId="formGroupEmail">
                            <Form.Control
                             type="email" 
                             name="email"
                             value={state.email}
                             placeholder="Enter email"
                             onChange={formSubmitHendler}
                            />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPassword">   
                            <Form.Control
                             type="password"
                             name="password"
                             value={state.password}
                             placeholder="Password"
                             onChange={formSubmitHendler}  
                            />
                        </Form.Group>
                        <button
                         className="button" 
                         type="submit"
                         >Next step</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}