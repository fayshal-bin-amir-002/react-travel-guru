import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config"

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }

    const userSignOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    },[]);

    const authData = { user, userSignUp, userSignIn, userSignOut }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;