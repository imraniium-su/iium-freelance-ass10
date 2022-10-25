import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);
    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }
    const handleNamechange = event => {
        setName(event.target.value)
    }
    return (
        <div className='bg-light mt-4 py-3 w-60 mx-auto shadow-lg rounded'>
            <Form className='w-50 mx-auto' onClick={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleNamechange} defaultValue={name} type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>photo URL</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;