import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AdminContext, UserContext } from '../../App';
import Menubar from '../Shared/Menubar/Menubar';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loginUser, setLoginUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useContext(AdminContext)


    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };



    const adminOrNot = (email) => {
        fetch(`http://localhost:4965/getadmin/${email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data))

    }




    const handleLogin = () => {
        if (!Object.keys(loginUser).length) {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(res => {
                    const user = res.user;
                    const newLogin = {
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL,
                    }
                    setLoginUser(newLogin)
                    history.replace(from)
                    adminOrNot(user.email)
                })
        }
        else {
            firebase.auth().signOut()
                .then(res => {
                    setLoginUser({})
                    setIsAdmin(false)
                })
        }
    }


    
    return (
        <div>
            <Menubar></Menubar>
            <div className="loginpage">
                {
                    (Object.keys(loginUser).length)
                        ?
                        <div className="text-center">
                            <div className="text-center mb-5">
                                <img src={loginUser.photo} alt="..." className="mx-auto rounded-circle" />
                            </div>
                            <h4 className="text-center text-brand text-uppercase"> {loginUser.name}</h4>
                            <p className="text-center lead">{loginUser.email}</p>
                            <button className="loginButton" onClick={handleLogin}>
                                <span> <i className="fas text-success fa-sign-out-alt" aria-hidden="true"></i> Log Out</span>
                            </button>
                        </div>
                        :
                        <div>
                            <div className="text-center mb-5">
                                <img src='https://i.ibb.co/5WSL7hQ/logo.png' alt="..." className="mx-auto" />
                            </div>
                            <h4 className="text-center text-brand text-uppercase"> Login </h4>
                            <p className="text-center lead">Feel free to login using gmail</p>
                            <button className="loginButton" onClick={handleLogin}>
                                <span> <i className="fab text-primary fa-google" aria-hidden="true"></i> Continue with google</span>
                            </button>
                        </div>
                }


            </div>



        </div>
    );
};

export default Login;