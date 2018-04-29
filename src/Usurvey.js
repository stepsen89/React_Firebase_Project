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

  constructor(props){
    super(props);

    this.state = {
      uuid: uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: ''
      },
      isSubmitted: false
    };
  }
  render(){
    let studentName;
    let questions;

    if(this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
        <h1> Hey Student, please let us know your name </h1>
        <form>
          <input type="text" placeholder="Enter your name here" ref="name">
        </form>
        </div>
    }

    return(
      <div>
        {studentName}
        -----------------
        {questions}
      </div>
    );
  }
}

export default Usurvey;
