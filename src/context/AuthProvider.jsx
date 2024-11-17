import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUserProfile = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (userData) => {
        setLoading(true);
        console.log(userData);
        return updateProfile(auth.currentUser, userData)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
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

    // console.log(error);

    const info = {
        user, 
        createUserProfile,
        setUser,
        updateUserProfile,
        logOut,
        logIn,
        loading,
        setLoading,
        logInWithGoogle,
        logInWithGithub,
        error,
        setError
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;