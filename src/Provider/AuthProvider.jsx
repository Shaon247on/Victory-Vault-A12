import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, deleteUser } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const axios = useAxiosPublic()
    const [loading, setLoading] = useState(true)
    const signUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const deleteAccount = (users)=>{
        setLoading(true)
        return deleteUser(users)
    }

    const updateUserProfile= (name, photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current user:', currentUser)
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axios.post('/jwt', userInfo)
                .then(res=>{
                    console.log(res.data.token);
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[axios])

    const authInfo={
        user,
        loading,
        logIn,
        signUp,
        logOut,
        updateUserProfile,
        googleLogin,
        githubLogin,
        deleteAccount
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;