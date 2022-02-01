import { Text } from "@chakra-ui/react"
import { Search } from 'ui-kit'
import './style.css';

const Header = (props) => {
  return (
    <div className="container">
      <a href="">
        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          {props.title}
        </Text>
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li style={{float: 'right'}}>
            <Search/>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
