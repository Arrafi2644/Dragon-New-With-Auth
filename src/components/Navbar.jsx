import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../context/AuthProvider';


const Navbar = () => {
    const {user, logOut, loading, setLoading,} = useContext(AuthContext)
    // console.log(user?.photoURL);
    // console.log(loading);
    // console.log(user);
    

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
                        // user ? <img className='w-10 h-10 rounded-full border-green-500 border-2' src={user.photoURL} alt="" /> : <img src={userIcon} alt="" />

                        user && user.photoURL ? (
                            <img
                              className="w-10 h-10 rounded-full"
                              src={user.photoURL}
                              alt="User"
                            />
                          ) : user && user.displayName ? (
                            <span className="text-xl font-bold text-green-500 w-10 h-10 flex justify-center items-center border-green-500 border-2 bg-blue-950 rounded-full">
                              {user.displayName.charAt(0).toUpperCase()}
                              
                            </span>
                          ) : (
                            <img className="w-10 h-10 rounded-full" src={userIcon} alt="Default User Icon" />
                          )
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