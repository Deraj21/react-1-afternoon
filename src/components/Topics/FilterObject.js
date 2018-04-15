import React, {Component} from 'react';

class FilterObject extends Component {
  constructor(){
    super();

    this.state = {
      unfilteredArray: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
      userInput: '',
      filteredArray: []
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.filterArray = this.filterArray.bind(this);
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  filterArray(){
    // filter array
    let filtered = this.state.unfilteredArray.filter(obj => {
      for (let key in obj){
        if (this.state.userInput === key){
          return true;
        }
      }
      return false;
    });
    console.log(`input: ${this.state.userInput}`)
    console.log(filtered);

    // change state to update
    this.setState({filteredArray: filtered});
  }

  render() {
    
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.unfilteredArray)}</span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={this.filterArray}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject;