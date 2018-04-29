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
    var studentName = this.refs.name.value;
    this.setState({studentName : studentName}, function() {
      console.log(this.state);
    });
  }

  answerSelected(event){
    let answers = this.state.answers;
    if(event.target.name === 'answer1'){
      answers.answer1 = event.target.value;
    } else if (event.target.name === 'answer2'){
      answers.answer2 = event.target.value;
    } else if (event.target.name === 'answer3'){
      answers.answer3 = event.target.value;
    }

    this.setState({answers}, function(){
      console.log(this.state);
    });
  };

  questionSubmit(event){

  }

  constructor(props){
    super(props);

    this.state = {
      uuid: uuid.v1(),
      studentName: 'Test',
      answers: {
        answer1: '',
        answer2: '',
        answer3: ''
      },
      isSubmitted: false
    };

    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
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
        questions = <div>
          <h2> Here are some questions </h2>
          <form onSubmit={this.questionSubmit}>
            <div className="card">
              <label> What kind of courses you like the most? </label> <br />
              <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected}/> Technology
              <input type="radio" name="answer1" value="Design" onChange={this.answerSelected}/> Design
              <input type="radio" name="answer1" value="Digital Marketing" onChange={this.answerSelected}/> Digital Marketing
            </div>
            <div className="card">
              <label> What kind of programming language you like the most? </label> <br />
              <input type="radio" name="answer2" value="Technology" onChange={this.answerSelected}/> JavaScript
              <input type="radio" name="answer2" value="Design" onChange={this.answerSelected}/> Python
              <input type="radio" name="answer2" value="Digital Marketing" onChange={this.answerSelected}/> Other
            </div>
            <div className="card">
              <label> What kind of IDE you like the most? </label> <br />
              <input type="radio" name="answer3" value="Technology" onChange={this.answerSelected}/> VS Code
              <input type="radio" name="answer3" value="Design" onChange={this.answerSelected}/> Atom
              <input type="radio" name="answer3" value="Digital Marketing" onChange={this.answerSelected}/> XCode
            </div>
            <input type="submit" value="submit" className="feedback-button"/>
          </form>
          </div>
    } else if (this.state.isSubmitted === true){

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
