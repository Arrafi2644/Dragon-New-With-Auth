import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const About = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className='text-2xl font-semibold mt-8 text-center'>About page this is </h2>
        </div>
    );
};

export default About;