import author from "../img/author.jpg";
import {Form} from 'react-bootstrap';
import { useState } from "react";
import Axios from "../utils/axios";
import { useHistory } from "react-router";
import InputErrorMessage from "./InputErrorMessage";
import Swal from 'sweetalert2';

const initialState = {
    firstName: "",
    lastName: "",
    date_of_birth: null,
    date_of_death: null,
}

export default function AddAuthor () {
    const history = useHistory(null);
    const [errorObj, setErrorObj] = useState({});
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        date_of_birth: "",
        date_of_death: "",
    });
    
    const changeInputHendler = (e) => {
        const {name, value} = e.target;
        setState(() => {
            return{
                ...state, [name]: value
            }
        });
    } 

    const submitFormHendler = async (e) => {
        e.preventDefault();
        try{
            const {data} = await Axios.post("/authors", state);
            console.log(data);

            if(data?.success){
                Swal.fire({
                    icon: "success",
                    title: 'Success',
                    text: 'Author has been added successfully',
                    footer: '<a href="">Why do I have this issue?</a>',
                    showCancelButton: true,
                    cancelButtonText: 'Finished adding',
                    confirmButtonText: 'Add more'
                }).then(({value}) => {
                    if(!value){
                        history.replace('/');
                    }
                    setState(initialState);
                });
            }else{
                const errMsg = data?.details[0]?.message;
                Swal.fire({
                    title: 'Error',
                    text: errMsg,
                    icon: 'error'
                })
            }
        }
        catch (err){
            console.log(err.response);
            Swal.fire({
                title: 'Error',
                text: err.message,
                icon: 'error'
              })
        }
    }

    return(
        <div className="signUp">
            <div className="book-img">
                <div className="book-center" style={{marginBottom: "20px"}}>
                    <img src={author} alt="" /> 
                </div>
                <div className="book-upload">
                    <h2 style={{margin: "0 0 20px 0", width: "300px", padding: "10px 10px"}}>Ulug'bek xazinasi</h2>
                    <button className="button" type="submit">Upload cover</button>
                </div>
            </div>
            <div className="signUp-form">
                <div className="form-center">
                    <h1 style={{marginBottom: "20px"}}>Add author</h1>
                    <Form onSubmit={submitFormHendler}>
                        <Form.Group className="form-group" controlId="formGroupFirstName">
                            <Form.Control 
                                type="text"
                                value={state.firstName}
                                name="firstName"
                                placeholder="First name"
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="firstName" errorObj={errorObj} />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupLastName">  
                            <Form.Control
                                type="text"
                                value={state.lastName}
                                name="lastName"
                                placeholder="Last name" 
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="lastName" errorObj={errorObj} />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupDateOfBirth">
                            <Form.Control
                                type="date"
                                value={state.date_of_birth}
                                name="date_of_birth"
                                placeholder="Date of birth"
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="date_of_birth" errorObj={errorObj} />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupDateOfDeath">   
                            <Form.Control
                                type="date"
                                value={state.date_of_death}
                                name="date_of_death"
                                placeholder="Date of birth"
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="date_of_death" errorObj={errorObj} />
                        </Form.Group>
                        <button className="button" type="submit">Create</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}