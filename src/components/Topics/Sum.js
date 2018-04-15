import React, {Component} from 'react';

class Sum extends Component{
  constructor(){
    super()

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }

    this.add = this.add.bind(this);

  }

  add(){
    this.setState({sum: this.state.number1 + this.state.number2});
  }

  render(){

    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={(e) => this.setState({number1: parseInt(e.target.value, 10)})}/>
        <input className="inputLine" onChange={(e) => this.setState({number2: parseInt(e.target.value, 10)})}/>
        <button className="confirmationButton" onClick={this.add}></button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum;