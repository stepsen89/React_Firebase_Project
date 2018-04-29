import React, { Component } from 'react';

const firebase = require('firebase');
const uuid = require('uuid');

const config = {
    apiKey: "AIzaSyB-9zrZH5Qo2YL5E_PAahpJ2IZDyqkXGXY",
    authDomain: "usurvey-e6bf4.firebaseapp.com",
    databaseURL: "https://usurvey-e6bf4.firebaseio.com",
    projectId: "usurvey-e6bf4",
    storageBucket: "usurvey-e6bf4.appspot.com",
    messagingSenderId: "483695084787"
  };
  firebase.initializeApp(config);

class Usurvey extends Component {
  render(){
    return(
      <div>
        I am from Survey Component
      </div>
    );
  }
}

export default Usurvey;
