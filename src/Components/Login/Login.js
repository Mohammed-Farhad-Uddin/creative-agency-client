import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { initializeApp } from "firebase/app";
import { UserContext } from '../../App';
import { firebaseConfig } from './firebaseConfig';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import logo from '../../images/logos/logo.png';
import googleLogin from '../../images/google-login.png';
import './Login.css'
import { useHistory , useLocation } from 'react-router-dom';



const Login = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                // console.log(user);
                setUserLoggedIn({
                    displayName: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                });
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };
    // console.log(userLoggedIn);


    return (
        <div>
            <Container>
                <div className='text-center mt-5'>
                    <img style={{ height: '50px' }} src={logo} alt="" />
                    <div className='login-div'>
                        <h3>Login With</h3>
                        <button onClick={googleSignIn} className='btn google-btn'> <img style={{ height: '25px', marginRight: '70px' }} src={googleLogin} alt="" /> Continue with google</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;