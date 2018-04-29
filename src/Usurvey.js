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

  nameSubmit(event){
    let studentName = this.refs.name.value;
    this.setState({studentName : studentName}, function() {
      console.log(this.state);
    });
  }

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

    this.nameSubmit = this.nameSubmit.bind(this);
  }
  render(){
    let studentName;
    let questions;

    if(this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
        <h1> Hey Student, please let us know your name </h1>
        <form onSubmit={this.nameSubmit}>
          <input type="text" placeholder="Enter your name here" ref="name"/>
        </form>
      </div>;
      questions = '';
    } else if (this.state.studentName !== '' && this.state.isSubmitted === false){
      studentName = <h1> Hey there, welcome {this.state.studentName}!!</h1>
      questions = <p> Hey there </p>
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
