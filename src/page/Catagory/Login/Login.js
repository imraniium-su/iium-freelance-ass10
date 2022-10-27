import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('');
    const { singIn, setLoading, singInwithGoogle, singinWithGitHub, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handlesingin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                form.reset()
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('Successfully login')
                }
                else {
                    toast.error('Your email is not Verified , Please verified your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
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
        <div className='bg-light mt-4 py-3 w-60 mx-auto shadow-lg rounded'>
            <Form className='w-50 mx-auto' onSubmit={handlesingin}>
                <h2>Please log In Now!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>


                <Button className='w-100  fw-bold' variant="info" type="submit">
                    Login
                </Button>
                <label className="label mt-0 mb-3">
                    <Link to="/register" className="label-text-alt link link-hover"> You are new? Please Sign up  </Link>
                </label>

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

export default Login;