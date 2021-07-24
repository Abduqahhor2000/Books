import author from "../img/author.jpg";
import {Form} from 'react-bootstrap';

export default function AddAuthor () {
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
                    <Form>
                        <Form.Group className="form-group" controlId="formGroupEmail">
                            <Form.Control type="text" placeholder="Title" />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPassword">   
                            <Form.Control type="text" placeholder="Pages" />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupEmail">
                            <Form.Control type="text" placeholder="Year" />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPassword">   
                            <Form.Control type="text" placeholder="Price" />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupEmail">
                            <Form.Control type="text" placeholder="Country" />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPassword">   
                            <Form.Control type="text" placeholder="Author" />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formGroupPassword">   
                            <Form.Control type="textarea" placeholder="Description" />
                        </Form.Group>
                        <button className="button" type="submit">Create</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}