import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoutes = ({children}) => {
const {user, loading} = useContext(AuthContext)
const {pathname} = useLocation();
// console.log(pathname);
    if(loading){
        return <span className="loading loading-bars loading-lg absolute left-1/2 top-1/2"></span>
    }
    if(user){
        return children;
    }

    return (
        <div>
            <Navigate state={pathname} to='/auth/login'></Navigate>
        </div>
    );
};

export default PrivateRoutes;