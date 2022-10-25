import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    const singInwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleprovider);
    }
    const singinWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubprovider);
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateuserprofile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const verfiemail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            if (currentUser == null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = { user, loading, providerLogin, logout, createUser, singIn, setLoading, updateuserprofile, verfiemail, singInwithGoogle, singinWithGitHub };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;