import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateuserprofile, verfiemail, singInwithGoogle, singinWithGitHub, setUser, setLoading } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUserprofile(name, photoURL);
                handleemailVerfication();
                toast.success('please verify Your Email address .')
            })
            .catch(error => {

                console.error(error)
                setError(error.message);
            })
    }
    const handleUpdateUserprofile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateuserprofile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    const handleaccepted = event => {
        setAccepted(event.target.checked);
    }
    const handleemailVerfication = () => {
        verfiemail()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const handleGooglesingIn = () => {
        singInwithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handlegithubsingin = () => {
        singinWithGitHub()
            .then(result => {
                const user = result.user;
                user.emailVerified = true;
                setUser(user);
                console.log(user);

            })
            .catch(error => console.error(error))
            .finally(() => { setLoading(false) })
    }
    return (
        <div className='bg-light mt-4 py-3 w-56 mx-auto shadow-lg rounded'>
            <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <h3>Please Register Now!</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-0" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <label className="label mb-3">
                    <Link to="/login" className="label-text-alt link link-hover">Already have an account ?</Link>
                </label>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        onClick={handleaccepted}
                        label={<>Accept<Link to='/terms'>" Terms and Condition"</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <div className='w-50 mx-auto mt-3'>
                <Button onClick={handleGooglesingIn} className='w-100 mx-auto border mb-3 fw-bold' variant="light" type="submit"><FaGoogle className='me-2 text-primary'></FaGoogle>
                    Login with Google
                </Button>
                <Button onClick={handlegithubsingin} className='w-100 border fw-bold' variant="light" type="submit"><FaGithub className='me-2'></FaGithub>
                    Login with Git Hub
                </Button>
            </div>
        </div>
    );
};

export default Register;