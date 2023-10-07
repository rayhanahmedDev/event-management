import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase-config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';



const auth = getAuth(app);
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)


    // on state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('state change', currentUser)
            setUser(currentUser)
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
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // login section
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo ={
        user,
        googleSingUp,
        createUser,
        signIn,
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