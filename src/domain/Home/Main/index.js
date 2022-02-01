import React from "react";
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getMovie } from "action/movie"
import { Text, Box, Image, Wrap, WrapItem, Center, Badge,Popover , PopoverTrigger, PopoverContent,
  PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody, Skeleton} from "@chakra-ui/react"

function Movie({ movieList }) {
  const [Movies, setMovie] = useState(movieList)

  useEffect(() => {
    setMovie(movieList)
  }, [movieList])

  return (
    <>
      <Text 
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        marginBottom="5"
        fontSize="5xl"
        fontWeight="extrabold"
        p="20px"
        textAlign="center"
        >
        PILIH FILM FAVORIT KAMU!
      </Text>

      {Movies.List.Response === "True"? 
      <Wrap spacing="40px" justify="center">
        
        {Movies.List.Search.map((mov) => (
          <WrapItem key={mov.imdbID}>
            {mov.isLoading ? (
              <Skeleton width="200px"  height="200px">
                <div>contents wrapped</div>
              </Skeleton>
            ):(
              <Center w="200px">
                <Box maxW="sm" w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
  
                  <Popover isLazy>
                    <PopoverTrigger>
                      <Image cursor="pointer" boxSize="200px" objectFit="cover" src={mov.Poster} alt={mov.Title} />
                    </PopoverTrigger>
  
                    <PopoverContent>
                      <PopoverHeader fontWeight="semibold">
                          <Box p="1">
                            <Box display="flex" alignItems="baseline">
                              <Badge borderRadius="full" px="2" colorScheme="teal">
                                {mov.Type} 
                              </Badge>
                              <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                              >
                                {mov.Year}
                              </Box>
                            </Box>
                          </Box>
                        </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton />
                        <PopoverBody>
                          {mov.Title}
                        </PopoverBody>
                    </PopoverContent>
                  </Popover>
                
                  <Box p="3">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        {mov.Type} 
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {mov.Year}
                      </Box>
                    </Box>
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                    {mov.Title}
                    </Box>
                  </Box>
                </Box>
              </Center>
            )}
          </WrapItem>
        ))}
      </Wrap>:

      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="bold"
        align="center"
        marginTop="10%"
      >
        {Movies.List.Error}
      </Text>
      }
    </>
  )
}

const HomeMain = () => {
  const movieList = useSelector((state) => state.List)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovie())
  }, [dispatch])

  return <Movie movieList={movieList} />
}

export default HomeMain