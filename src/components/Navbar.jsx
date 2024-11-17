import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../context/AuthProvider';


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    // console.log(user);
    // console.log(name);
    return (
        <div className='flex items-center justify-between'>
            <div>{user && <h3 className='font-semibold'>{user.displayName}</h3>}</div>
            <div className='flex gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
                <div>
                    {
                        user ? <img className='w-10 h-10 rounded-full border-green-500 border-2' src={user.photoURL} alt="" /> : <img src={userIcon} alt="" />
                    }
                </div>
                <div>
                    {
                        user ? 
                        <Link onClick={()=>logOut()} className="btn rounded-none bg-neutral text-white px-8">Logout</Link>
                        : 
                        <Link to='/auth/login'  className="btn rounded-none bg-neutral text-white px-8">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;