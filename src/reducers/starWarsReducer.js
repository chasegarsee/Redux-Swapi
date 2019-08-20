import {
  FETCHING,
  SUCCESS,
  FAILURE,
  FETCHING_FILMS,
  SUCCESS_FILMS,
  FAILURE_FILMS
} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetching: true,
        characters: [],
        error: ""
      });

    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload,
        error: ""
      };
    case FAILURE:
      return {
        ...state,
        fetching: false,
        characters: [],
        error: action.payload
      };

    case FETCHING_FILMS:
      return Object.assign({}, state, {
        fetching: true,
        films: [],
        error: ""
      });

    case SUCCESS_FILMS:
      return {
        ...state,
        isFetching: false,
        films: action.payload,
        error: ""
      };
    case FAILURE_FILMS:
      return {
        ...state,
        fetching: false,
        films: [],
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

// export const filmsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCHING_FILMS:
//       return Object.assign({}, state, {
//         fetching: true,
//         films: [],
//         error: ""
//       });

//     case SUCCESS_FILMS:
//       return {
//         ...state,
//         isFetching: false,
//         films: action.payload,
//         error: ""
//       };
//     case FAILURE_FILMS:
//       return {
//         ...state,
//         fetching: false,
//         films: [],
//         error: action.payload
//       };
//     // Fill me in with the important reducers
//     // action types should be FETCHING, SUCCESS and FAILURE
//     // your switch statement should handle all of these cases.
//     default:
//       return state;
//   }
// };
