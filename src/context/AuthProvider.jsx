import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    // console.log(user);

    const name = "Rafi";

    const createUserProfile = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (userData) => {
        return updateProfile(auth.currentUser, userData)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return ()=> {
            unSubscribe();
        }
    }, [])

    const info = {
        name,
        createUserProfile,
        user,
        setUser,
        updateUserProfile,
        logOut,
        logIn,
        loading
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;