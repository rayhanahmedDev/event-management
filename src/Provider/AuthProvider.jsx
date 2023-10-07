import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase-config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';



const auth = getAuth(app);
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // on state change
    useEffect(()=>{
       
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        } 
    },[])

    // google section
    const googleSingUp = ()=>{
        
      return signInWithPopup(auth,googleProvider)
    }

    // register section
    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // login section
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out 
    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }
    const authInfo ={
        user,
        googleSingUp,
        createUser,
        signIn,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children:PropTypes.element.isRequired  
  };
export default AuthProvider;