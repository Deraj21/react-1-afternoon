import React, {Component} from 'react';

class FilterString extends Component{
  constructor(){
    super();

    this.state = {
      unfilteredStrings: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filteredStrings: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.filterStrings = this.filterStrings.bind(this);

  }
  
  handleChange(val){
    this.setState({userInput: val});
  }

  filterStrings(){
    let filteredTemp = this.state.unfilteredStrings.filter(string => {
      return string.includes(this.state.userInput)
    });
    this.setState({filteredStrings: filteredTemp})
  }
  
  render() {

    return (
      <div className="puzzleBox filterStringPB">
        <h4>Fliter String</h4>
        <span className="puzzleText">Names: {JSON.stringify(this.state.unfilteredStrings)}</span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={this.filterStrings}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredStrings)}</span>
      </div>
    )
  }
}

export default FilterString;