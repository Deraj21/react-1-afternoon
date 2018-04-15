import React, {Component} from 'react';

class Palindrome extends Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.isPalindrome = this.isPalindrome.bind(this);
  }

  handleChange(val){
    this.setState({userInput: val});
  }

  isPalindrome(){
    let test = true;
    let word = this.state.userInput;
    for (let i = 0; i < word.length; i++){
      if (word[i] !== word[word.length - 1 - i]){
        this.setState({palindrome: 'false'});
        return;
      }
    }
    this.setState({palindrome: 'true'})
  }

  render () {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={this.isPalindrome}>check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome;