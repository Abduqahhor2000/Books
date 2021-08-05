import book from "../img/book.jpg";
import {Form, InputGroup} from 'react-bootstrap';
import InputErrorMessage from "./InputErrorMessage";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import Axios from "../utils/axios";
import { useEffect, useState } from "react";

const initialState = {
    title: '',
    author: '',
    imageLink: '',
    link: '',
    description: '',
    price: null,
    pages: null,
    country: '',
    language: '',
}

export default function AddBook () {
    const history = useHistory(null);
    const [errorObj, setErrorObj] = useState({});
    const [state, setState] = useState(initialState);
    const [authors, setAuthors] = useState([]);

    const changeInputHendler = (e) => {
        const {name, value} = e.target;
        setState(() => {
            return{
                ...state, [name]: value
            }
        });
    } 

    useEffect(() => {
        (async () => {
            const {data} = await Axios.get("/authors");
            //    console.log(data);

            setAuthors(data.payload)
        })()
    }, []);

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
                    <img src={book} alt="" /> 
                </div>
                <div className="book-upload">
                    <h2 style={{margin: "0 0 20px 0", width: "300px", padding: "10px 10px"}}>Ulug'bek xazinasi</h2>
                    <button className="button" type="submit">Upload cover</button>
                </div>
            </div>
            <div className="signUp-form">
                <div className="form-center">
                    <h1 style={{marginBottom: "20px"}}>Add book</h1>
                    <Form onSubmit={submitFormHendler}>
                        <Form.Group className="form-group" controlId="formGroupTitle">
                            <Form.Control 
                                type="text"
                                value={state.title}
                                name="title"
                                placeholder="Title"
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="title" errorObj={errorObj} />
                        </Form.Group>
                        <InputGroup className="description">
                            <Form.Control
                                as="textarea"
                                aria-label="With textarea" 
                                value={state.description}
                                name="description"
                                placeholder="Description"
                                onChange={changeInputHendler}
                            />
                            <InputErrorMessage type="description" errorObj={errorObj} />
                        </InputGroup>
                        <select className="selectAuthors" name="author" value={state.author} onChange={changeInputHendler}>
                            {authors.map(item => {
                                const {_id, firstName, lastName} = item;
                                return(
                                    <option value={_id} key={_id}> {`${firstName} ${lastName}`} </option>  
                                )
                            })}
                        <InputErrorMessage type="firstName" errorObj={errorObj} /> 
                        </select>
                        <Form.Group className="form-group" controlId="formGroupLink">
                            <Form.Control 
                                type="text"
                                value={state.link}
                                name="link"
                                placeholder="Link"
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="link" errorObj={errorObj} />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupCountry">
                            <Form.Control 
                                type="text"
                                value={state.country}
                                name="country"
                                placeholder="Country"
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="country" errorObj={errorObj} />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupLanguage">
                            <Form.Control 
                                type="text"
                                value={state.language}
                                name="language"
                                placeholder="Language"
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="language" errorObj={errorObj} />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPages">
                            <Form.Control 
                                type="number"
                                value={state.pages}
                                name="pages"
                                placeholder="Pages"
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="pages" errorObj={errorObj} />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPrice">
                            <Form.Control 
                                type="number"
                                value={state.price}
                                name="price"
                                placeholder="Price"
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="price" errorObj={errorObj} />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupImageLink">
                            <Form.Control 
                                type="text"
                                value={state. imageLink}
                                name="imageLink"
                                placeholder="Image link"
                                onChange={changeInputHendler}
                            />
                          <InputErrorMessage type="imageLink" errorObj={errorObj} />
                        </Form.Group>
                        <button className="button" type="submit">Create</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}