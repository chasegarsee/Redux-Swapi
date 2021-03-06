// we'll need axios
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
import axios from "axios";
export const FETCHING = "START";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const fetchCharacters = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {
      console.log("post response", res);
      dispatch({
        type: SUCCESS,
        payload: res.data.results
      });
    })
    .catch(error => {
      dispatch({
        type: FAILURE,
        payload: "Starwars character data not found!"
      });
    });
};
