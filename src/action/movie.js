import axios from "axios"
import { GET_MOVIE } from "../constants"

const BASE_URL = "https://www.omdbapi.com/?apikey=ae30b26b"

export const getMovie = (search) => {
  let searchData = 'one piece'
  
  
  if (search) searchData = search
  return async (dispatch) => {
    const result = await axios.get(`${BASE_URL}&s=${searchData}`)

    if(result.data.Response === "True"){
      dispatch({ type: GET_MOVIE, payload: result.data })
    }else{
      dispatch({ type: GET_MOVIE, payload: result.data })
    }
  }
}


