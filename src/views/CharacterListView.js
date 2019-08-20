import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { CharacterList } from "../components";
// import actions
import { fetchCharacters, fetchTitles } from "../actions";

class CharacterListView extends React.Component {
  //constructor() {
  //  super();
  //}

  componentDidMount() {
    // call our action
    this.props.dispatch(fetchCharacters());
    this.props.dispatch(fetchTitles());
    console.log("PROPS", this.props);
  }

  render() {
    if (this.props.characters.length === 0) {
      // return something here to indicate that you are fetching data
      return (
        <div>
          <h1> Loading </h1>;
          <Loader type="TailSpin" color="red" height={80} width={80} />
        </div>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList
          characters={this.props.characters}
          films={this.props.films}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error,
    films: state.charsReducer.films
  };
};

export default connect(mapStateToProps)(CharacterListView);
