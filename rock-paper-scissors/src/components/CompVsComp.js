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
        <p className="name">Computer {num} :</p>
        <p>{score}</p>
    </div>
  )
}


class CompVsComp extends Component {
    constructor(props) {
        super(props);
        this.hand = [];
        this.hand["name"] = ["rock", "paper", "scissors"];
        this.hand["winAgainst"] = ["scissors", "rock", "paper"];
        //default state
        this.state = {
            computer1 : {
                hand: "rock",
                score: 0
            },
            computer2 : {
                hand : "paper",
                score: 0
            }
        }
    }
    startGame = () => {
        //we choose a number between 0 and 2 for computers
        var random1 = Math.floor(Math.random()*3);
        var random2 = Math.floor(Math.random()*3);
        //If the element chosen by the computer 1 and the same as that of the computer 2
        if(this.hand["name"][random1] === this.hand["name"][random2]){
            //there is an equality
            document.getElementById('result').innerHTML = "";
            document.getElementById('result').append('Equality !');
            document.getElementById("computer1").classList.remove('winner');
            document.getElementById("computer1").classList.remove('looser');
            document.getElementById("computer2").classList.remove('winner');
            document.getElementById("computer2").classList.remove('looser');
            this.setState({
                computer1 : {
                    hand : this.hand["name"][random1],
                    score: this.state.computer1.score
                },
                computer2 : {
                    hand : this.hand["name"][random2],
                    score : this.state.computer2.score
                }
            });
        }else if(this.hand["winAgainst"][random1] === this.hand["name"][random2]){//if the element chosen by the computer 1 wins against the element of the computer 2
            //computer1 win
            document.getElementById('result').innerHTML = "";
            document.getElementById('result').append('Computer 1 win !');
            //we add 1 to the computer 1's score
            var scoreComputer1 = (this.state.computer1.score)+1;
            document.getElementById("computer1").classList.add('winner');
            document.getElementById("computer2").classList.add('looser');
            document.getElementById("computer2").classList.remove('winner');
            document.getElementById("computer1").classList.remove('looser');
            this.setState({
                computer1 : {
                    hand : this.hand["name"][random1],
                    score: scoreComputer1
                },
                computer2 : {
                    hand : this.hand["name"][random2],
                    score : this.state.computer2.score
                }
            });
        }else if(this.hand["winAgainst"][random2] === this.hand["name"][random1]){//if the element chosen by the computer 1 is beaten by the element of the computer
            //computer 2 win        
            document.getElementById('result').innerHTML = "";
            //we add 1 to the computer 2's score
            document.getElementById('result').append('Computer 2 win !');
            document.getElementById("computer2").classList.add('winner');
            document.getElementById("computer1").classList.add('looser');
            document.getElementById("computer1").classList.remove('winner');
            document.getElementById("computer2").classList.remove('looser');
            var scoreComputer2 = (this.state.computer2.score)+1;
            this.setState({
                computer1 : {
                    hand : this.hand["name"][random1],
                    score: this.state.computer1.score
                },
                computer2 : {
                    hand : this.hand["name"][random2],
                    score: scoreComputer2
                }
            })
        }
    }
  render() {
    return (
      <div className="CompVsComp">
      <Link to='/'>
          Home
      </Link>
      <h1>Rock, paper, scissors</h1>
      <div className="flex space-b">
        <div id="computer1">
            <Choice hand={this.state.computer1.hand} />
            </div>
            <div id="computer2">
            <Choice hand={this.state.computer2.hand} />
            </div>
      </div>
        <div id="result"></div>
        <div className="scores">
        <h2>Scores</h2>
            <Score score={this.state.computer1.score} num="1" />
            <Score score={this.state.computer2.score} num="2" />
        </div>
        <button onClick={()=>this.startGame()} id="startGame">Start game</button>
      </div>
    );
  }
}

export default CompVsComp;
