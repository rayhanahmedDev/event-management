import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase-config";
import { createContext } from "react";



const auth = getAuth(app);
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    // google section
    const googleSingUp = ()=>{
      return signInWithPopup(auth,googleProvider)
    }

    // register section
    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // login section
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={
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

export default AuthProvider;