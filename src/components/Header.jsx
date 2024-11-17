import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment/moment';


const Header = () => {
    return (
         <div className='my-3 flex flex-col justify-center items-center gap-2'>
            <div className="logo">
                <img className='max-w-80' src={logo} alt="" />
            </div>
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
            <p className='font-semibold'>{moment().format("dddd, MMMM Do YYYY")}</p>
            
        </div>

    );
};

export default Header;