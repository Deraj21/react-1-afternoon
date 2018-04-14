import React, {Component} from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    }

    this.sortEvenAndOdd = this.sortEvenAndOdd.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(val){
    this.setState({userInput: val});
  }

  sortEvenAndOdd(){
    let numbers = this.state.userInput.split(',');
    let evens = [];
    let odds = [];

    for (let i =  0; i < numbers.length; i++){
      if (numbers[i] % 2 === 0){
        evens.push(numbers[i]);
      } else {
        odds.push(numbers[i]);
      }
    }

    this.setState({evenArray: evens});
    this.setState({oddArray: odds});

  }

  render() {

    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(e) => this.handleInputChange(e.target.value)} />
        <button className="confirmationButton" onClick={this.sortEvenAndOdd}>Sort</button>
        <span className="resultsBox">Evens: [{this.state.evenArray.map((num, i, arr) =>
          (i < arr.length - 1) ? `${num},` : `${num}`)}]</span>
        <span className="resultsBox">Odds: [{this.state.oddArray.map((num, i, arr) =>
          (i < arr.length - 1) ? `${num},` : `${num}` )}]</span>
      </div>
      
    )
  }
}

export default EvenAndOdd;