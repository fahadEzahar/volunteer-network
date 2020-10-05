import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';
import "firebase/auth";
import './Login.css'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Logo from '../../logos/Group 1329.png';

firebase.initializeApp(firebaseConfig);

const Login = () => {

  const { loggedInUser } = useContext(userContext);
  const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;
  
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        setLoggedInUserValue(res.user);
        history.replace(from);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }

  return (
    <div className="text-center m-5">
      <div className="col-md-4  mx-auto ">
        <img className="logo" src={Logo} alt="" />
      </div>
      <div className="col-md-4  mx-auto m-5 border p-5">
        <h4 className="text-center">Login With</h4>
        <button onClick={handleGoogleSignIn} className="btn btn-outline-secondary mx-auto btn-block rounded-pill googleIcon text-dark font-weight-bold">Continue with Google</button>
        <p>Don't have an account? <a href="/login">Create an account</a> </p>
      </div>
    </div>
  );
};

export default Login;