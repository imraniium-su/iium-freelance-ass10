import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { singIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSingIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.password;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not Verified , Please verified your email address')
                }
            })
            .catch(error => {
                console.error(error)
                setError(false);
            })
    }
    return (
        <div className='bg-light mt-4 py-3 w-50 mx-auto'>
            <Form className='w-50 mx-auto' onSubmit={handleSingIn}>
                <h1>Please log In!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;