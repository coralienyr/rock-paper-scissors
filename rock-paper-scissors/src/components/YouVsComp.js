import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Choice = ({hand}) => {
  return(
    <div className="choice">
        <div className={hand}>
        </div>
    </div>
  )
}

const Score = ({score, num}) => {
  return(
    <div className="score flex">
        <p className="name">{num} :</p>
        <p>{score}</p>
    </div>
  )
}


class YouVsComp extends Component {
    constructor(props) {
        super(props);
        this.hand = [];
        this.hand["name"] = ["rock", "paper", "scissors"];
        this.hand["winAgainst"] = ["scissors", "rock", "paper"];
        //Default state
        this.state = {
            player : {
                hand: "",
                score: 0
            },
            computer : {
                hand : "",
                score: 0
            }
        }
    }
    chooseElement = (a) =>{
        //we choose a number between 0 and 2 for computer
        var random = Math.floor(Math.random()*3);
        //If the element chosen by the player and the same as that of the computer
        if(this.hand["name"][a] === this.hand["name"][random]){
            //there is an equality
            document.getElementById('result').innerHTML = "";
            document.getElementById('result').append('Equality !');
            document.getElementById("you").classList.remove('winner');
            document.getElementById("you").classList.remove('looser');
            document.getElementById("computer").classList.remove('winner');
            document.getElementById("computer").classList.remove('looser');
            this.setState({
                player : {
                    hand : this.hand["name"][a],
                    score: this.state.player.score
                },
                computer : {
                    hand : this.hand["name"][random],
                    score : this.state.computer.score
                }
            });
        }else if(this.hand["winAgainst"][a] === this.hand["name"][random]){ //if the element chosen by the player wins against the element of the computer
            //player win
            document.getElementById('result').innerHTML = "";
            document.getElementById('result').append('You win !');
            document.getElementById("you").classList.add('winner');
            document.getElementById("you").classList.remove('looser');
            document.getElementById("computer").classList.remove('winner');
            document.getElementById("computer").classList.add('looser');
            //we add 1 to the player's score
            var scorePlayer = (this.state.player.score)+1;
            this.setState({
                player : {
                    hand : this.hand["name"][a],
                    score: scorePlayer
                },
                computer : {
                    hand : this.hand["name"][random],
                    score : this.state.computer.score
                }
            });
        }else if(this.hand["winAgainst"][random] === this.hand["name"][a]){//if the element chosen by the player is beaten by the element of the computer
            //computer win
            document.getElementById('result').innerHTML = "";
            document.getElementById('result').append('Computer win !');
            document.getElementById("you").classList.remove('winner');
            document.getElementById("you").classList.add('looser');
            document.getElementById("computer").classList.add('winner');
            document.getElementById("computer").classList.remove('looser');
            //we add 1 to the computer's score
            var scoreComputer = (this.state.computer.score)+1;
            this.setState({
                player : {
                    hand : this.hand["name"][a],
                    score: this.state.player.score
                },
                computer : {
                    hand : this.hand["name"][random],
                    score: scoreComputer
                }
            })
        }
    }
  render() {
    return (
      <div className="YouVsComp">
      <Link to='/'>
          Home
      </Link>
      <h1>Rock, paper, scissors</h1>
      <h2>You vs Computer</h2>
      <h3>Choose your element</h3>
      <div className="flex space-b elements">
      <button onClick={() => this.chooseElement(0)} className="buttonRock"></button>
      <button onClick={() => this.chooseElement(1)} className="buttonPaper"></button>
      <button onClick={() => this.chooseElement(2)} className="buttonScissors"></button>
      </div>
      <div className="flex space-b">
      <div id="you">
        <Choice hand={this.state.player.hand} />
        </div>
        <div id="computer">
        <Choice hand={this.state.computer.hand} />
        </div>
    </div>
    <div id="result"></div>
        <div className="scores">
            <Score score={this.state.player.score} num="You" />
            <Score score={this.state.computer.score} num="Computer" />
        </div>
      </div>
    );
  }
}

export default YouVsComp;
