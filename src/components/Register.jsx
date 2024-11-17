import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {
    const {createUserProfile, user, setUser, updateUserProfile} = useContext(AuthContext)
    const [error, setError] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        // console.log({name, photo, email, password});

        createUserProfile(email, password)
        .then(result => {
            // console.log(result.user);
            setUser(result.user)
            navigate('/')
            updateUserProfile({displayName:name, photoURL:photo})
            .then(() => {
               
            }).catch(err => {
                // console.log(err.message);
            })

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
            <h2 className='text-2xl font-bold text-center'>Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' type="name" placeholder="name" className="input input-bordered" required />
                    {
                        error?.name && <p className='text-red-500 text-xs'>{error.name}</p>
                    }
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name='photo' type="name" placeholder="photo url" className="input input-bordered" required />
                </div>
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#403F3F] text-white">Register</button>
                </div>
            </form>
            <p className='text-center font-medium'>Already Have An Account ? <Link to='/auth/login' className='text-red-500'>Login</Link></p>
        </div>
    </div>
</div>
    );
};

export default Register;