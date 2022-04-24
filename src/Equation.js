import React, {Component} from 'react';
import Grade from './Grade.js';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;
export default class Equation extends Component{
    state={
     value1 : value1,
     value2 : value2,
	 value3 : value3,
     proposedAnswer : proposedAnswer  ,
     numQuestions : numQuestions,
     numCorrect : numCorrect
  }
  
  AnswerSelected(answer){
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    if((answer===true && this.state.proposedAnswer===this.state.value1 + this.state.value2 + this.state.value3) || 
       (answer===false && this.state.proposedAnswer!==this.state.value1 + this.state.value2 + this.state.value3)){
      this.setState((prevState)=>({
        value1 : value1,
        value2 : value2,
	    value3 : value3,
        proposedAnswer:proposedAnswer,
        numQuestions : prevState.numQuestions+1,
        numCorrect : prevState.numCorrect+1
      }))
    }else{
      this.setState((prevState)=>({
        value1 : value1,
        value2 : value2,
	    value3 : value3,
        proposedAnswer : proposedAnswer,
        numQuestions : prevState.numQuestions+1,
        numCorrect : prevState.numCorrect
      }))
    }
  }
render(){
  return(
    <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={()=>this.AnswerSelected(true)}>True</button>
          <button onClick={()=>this.AnswerSelected(false)}>False</button>
          <Grade numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
    </div>
  )
}
}
