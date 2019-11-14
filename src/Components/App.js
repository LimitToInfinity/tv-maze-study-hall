import React, { Component } from 'react';

import './../Stylesheets/App.css';

import ShowCard from "./ShowCard";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    shows: [],
    searchTerm: ""
  }
  
  tvMazeURL = "https://api.tvmaze.com/shows";

  getShows = () => {
    fetch(this.tvMazeURL)
      .then(response => response.json())
      .then(shows => { this.setState({ shows }) });
  }

  handleInput = (event) => {
    const searchTerm = event.target.value;

    this.setState({ searchTerm })
  }

  displayShows = () => {
    return this.filterShows().map(show => {
      return <ShowCard 
        key={show.id}
        image={show.image.medium}
        name={show.name}
        rating={show.rating.average}
        runtime={show.runtime}
      />
    })
  }

  filterShows = () => {
    const { shows, searchTerm } = this.state;

    return shows.filter(show => {
      return show.name.toLowerCase()
        .includes( searchTerm.toLowerCase() );
    })
  }

  componentDidMount() {
    this.getShows();
  }

  render() {

    const { searchTerm } = this.state;

    return (
      <div className="App">
        <h1>Hey this exists!</h1>
        <SearchBar
          searchTerm={searchTerm}
          handleInput={this.handleInput}
        />
        {this.displayShows()}
      </div>
    );
  }
}

export default App;
