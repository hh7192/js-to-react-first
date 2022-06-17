import React, {Component} from "react";
import "./NumberGuess.css";
import MainNavbar from "../../generalComponents/MainNavbar";

class NumberGuess extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      error: "",
      output: "",
      finalMessage: "",
      gameOver: false,
      guesses: [],
      chances: 6,
    };
  }

  number = Math.ceil(Math.random() * 100);

  runGame = (e) => {
    e.preventDefault();
    console.log(this.number);
    let errorClone = this.state.error;
    let outputClone = this.state.output;
    let finalMessageClone = this.state.finalMessage;
    let userInputValue = Number(this.state.userInput);
    if (userInputValue) {
      if (isNaN(userInputValue)) {
        errorClone = "That is not a number you fool!";
        setTimeout(() => this.setState({error: ""}), 3000);
      }
      if (userInputValue > 100 || userInputValue < 1) {
        errorClone = "Which part of between 1 and 100 you didn't understand?!";
        setTimeout(() => this.setState({error: ""}), 3000);
      }
    }
    if (userInputValue < 100 && userInputValue > 1) {
      if (userInputValue === this.number) {
        outputClone = (
          <h4 className='output text-success m-5 p-3'>
            Bingo! Your Number was {this.number}
          </h4>
        );
        finalMessageClone = (
          <span className='resultWin messageWin'>You Won, Smart Ass!</span>
        );
        this.setState({gameOver: true});
      }
    }
    if (
      Math.abs(this.number - userInputValue) < 10 &&
      userInputValue > this.number
    )
      outputClone = (
        <h4 className='output text-warning m-5 p-3'>
          Ooooo! My number is slightly lesser than your guess!
        </h4>
      );
    if (
      Math.abs(this.number - userInputValue) < 10 &&
      userInputValue < this.number
    )
      outputClone = (
        <h4 className='output text-warning m-5 p-3'>
          Ooooo! My number is slightly higher than your guess!
        </h4>
      );
    if (
      Math.abs(this.number - userInputValue) < 5 &&
      userInputValue < this.number
    )
      outputClone = (
        <h4 className='output text-danger m-5 p-3'>
          It's BOILING! Higher baby, HIGHER!
        </h4>
      );
    if (
      Math.abs(this.number - userInputValue) < 5 &&
      userInputValue > this.number
    )
      outputClone = (
        <h4 className='output text-danger m-5 p-3'>
          It's BOILING! Lesser baby, LESSER!
        </h4>
      );
    if (
      Math.abs(this.number - userInputValue) >= 10 &&
      userInputValue > this.number
    )
      outputClone = <h4 className='output m-5 p-3'>Haha! Way too High!</h4>;
    if (
      Math.abs(this.number - userInputValue) >= 10 &&
      userInputValue < this.number
    )
      outputClone = <h4 className='output m-5 p-3'>Haha! Way too Low!</h4>;
    this.updateState();
    this.setState({
      userInput: "",
      error: errorClone,
      output: outputClone,
      finalMessage: finalMessageClone,
    });
  };

  updateState = () => {
    let userInputValue = Number(this.state.userInput);
    userInputValue = "";
    let guessesClone = [...this.state.guesses];
    let chancesClone = this.state.chances;
    let finalMessageClone = this.state.finalMessage;

    guessesClone.push(this.state.userInput);
    chancesClone--;

    if (chancesClone === 0) {
      finalMessageClone = (
        <span className='resultLose messageLose'>
          You Lost, Loser! The number was {this.number}
        </span>
      );
      this.setState({gameOver: true});
    }

    this.setState({
      guesses: guessesClone,
      chances: chancesClone,
      finalMessage: finalMessageClone,
    });
  };

  playAgain = () => {
    this.number = Math.ceil(Math.random() * 100);
    this.setState({
      guesses: [],
      chances: 6,
      output: "",
      gameOver: false,
      finalMessage: "",
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div className='container'>
        <div className='row'>
          <MainNavbar />
          <div className='col-12'>
            <h1 className='text-center display-3'>Number Guessing Game</h1>
            <h4 className='text-center text-warning display-4'>
              I bet you can't guess my number!
            </h4>
            <div className='d-flex justify-content-center flex-column'>
              <form>
                <label
                  htmlFor='userInput'
                  className='label text-success text-uppercase mt-3'>
                  Tell me what you think between 1 - 100:
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder="Hurry up! I don't have all day!"
                  onChange={(e) => this.setState({userInput: e.target.value})}
                />
                <button
                  type='submit'
                  className='btn btn-success btn-lg mt-3'
                  onClick={this.runGame}>
                  Guess!
                </button>
              </form>
            </div>
            <p>
              <span className='text-danger'>{this.state.error}</span>
            </p>
            <p className='mt-4'>
              Your DAMN Guesses:
              <span className='guesses'>{this.state.guesses}</span>
            </p>
            <p>
              Remaining Guesses before I KILL you!
              <span className='guesses'>{this.state.chances}</span>
            </p>
            <div className='text-center'>{this.state.output}</div>
          </div>
          <div className='col-12'>
            <div
              className={
                this.state.gameOver === true ? "resultContainer mt-4" : "mt-4"
              }>
              <div className='text-center'>
                <h2>{this.state.finalMessage}</h2>
                <button
                  className={
                    this.state.gameOver === true ? "btn btn-warning" : "hide"
                  }
                  onClick={this.playAgain}>
                  Again!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberGuess;
