import React, { Component } from 'react';
import NavBar from "./NavBar";
import Grid from "./Grid"
import characters from "./characters.json"
import './App.css';

class App extends Component {
  state = {
    clicked: [],
    highest: 0,
    current: 0,
    isCorrect: "",
    characters: characters,
    alert: "alert"
  };

  


  checkCharacter = (id)=>{
    let found = this.state.clicked.find(function(element) {
      return element === id;
    });
    if(found){
      return "Is Incorrect Guess! You Lose";
    }else{
      return "Is Correct Guess!"
    }

  }

  handleOnCickEvent = (event)=>{
    let highest=this.state.highest;
    let current = this.state.current;
    let imagesArray = this.state.clicked;
    const currentImage = event.target.dataset.id;
    const isCorrect = this.checkCharacter(currentImage);
    let alert = this.state.alert;
    if(isCorrect==="Is Incorrect Guess! You Lose"){
      highest= current>highest? current:highest;
      current=0;
      imagesArray=[];
      alert = "alertWrong";
    }
    else{

      imagesArray.push(currentImage);
      current++;
      highest= current>highest? current:highest;
      alert = "alertCorrect"
    }
    this.setState({
      characters: this.state.characters.sort(() => Math.random() - 0.5),
      isCorrect: isCorrect,
      clicked: imagesArray,
      highest: highest,
      current:current,
      alert: alert
    })
  }
  render(){
    return(
      <div className="App">
        <NavBar current={this.state.current} alert={this.state.alert} highest={this.state.highest} isCorrect={this.state.isCorrect}/>
        <div className="container">
          <Grid characters={this.state.characters} handleOnCickEvent = {this.handleOnCickEvent}/>
        </div>
      </div>
    )
  }
}

export default App;