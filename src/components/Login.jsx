import React, {useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const [error, setError] = useState({})
    
    const navigate = useNavigate()
    const location = useLocation()

    // console.log(import.meta.env.VITE_name);

    // console.log(location);

    const handleLogin = (e) => {
        e.preventDefault()
    
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        // console.log(email, password);

        logIn(email, password)
        .then(result => {
            // console.log(result.userData);
            // navigate('/')

            location.state? navigate(location.state) : navigate('/'); 

        }).catch(err => {
            // console.log(err.message);
        })
        
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className='my-8'>
            <Navbar ></Navbar>
            </div>
            <div className='min-h-screen flex justify-center items-center'>
                <div className="card bg-base-100 w-full py-8 max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-2xl font-bold text-center'>Login your account</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            {
                                error.login && <p className='text-red-500 text-xs'>{error.login}</p>
                                // console.log(error.login)

                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#403F3F] text-white">Login</button>
                        </div>
                    </form>
                    <p className='text-center font-medium'>Dont’t Have An Account ? <Link to='/auth/register' className='text-red-500'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;