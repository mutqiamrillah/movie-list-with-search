import { useState } from "react"
import { useDispatch } from "react-redux"
import { getMovie } from "action/movie"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'

const Search = () => {
  const dispatch = useDispatch()
  const [valSearch, setValSearch] = useState('')

  const setSearch = e => {
    let data = e.target.value
    setValSearch(data)
  }
  const searchingKey = (e) => {
    if (e.key === 'Enter' || valSearch === '') {
      dispatch(getMovie(valSearch))
    }
  }
  
  const fnSearch = () => {
    dispatch(getMovie(valSearch))
  }
  return (
    <InputGroup>
        <Input onKeyUp={(e) => searchingKey(e)} onChange={(e) => setSearch(e)}  placeholder="Search..." />
        <InputRightElement children={<Search2Icon cursor="pointer" onClick={() => fnSearch()} color="#f90283" />} />
    </InputGroup>
  )
}

export default Search
