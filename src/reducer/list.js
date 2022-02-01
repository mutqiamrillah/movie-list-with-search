import {
    GET_MOVIE
  } from "../constants"
  
const initialState = {
  List: {
    Response: "True",
    Search:[
      {
        imdbID: 1,
        isLoading: true
      },
      {
        imdbID: 2,
        isLoading: true
      },
      {
        imdbID: 3,
        isLoading: true
      },
      {
        imdbID: 4,
        isLoading: true
      },
      {
        imdbID: 5,
        isLoading: true
      }

    ]
  }
}
  
  function movieReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE:
          state.List = action.payload
          return {
              ...state
          }
      default:
        return state
    }
  }
  
  export default movieReducer
  