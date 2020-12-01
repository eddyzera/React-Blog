// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Header, Logo, Navigation, Li, Search } from '../style/components/Nav'
import { FaSearch } from 'react-icons/fa'

const Nav: React.FC = () => {
  return (
    <Header>
      <Logo>React Blog</Logo>
      <Navigation>
        <ul>
          <Li>Home</Li>
          <Li>About</Li>
          <Li>Category</Li>
        </ul>
      </Navigation>
      <div>
        <FaSearch color="#3c3b3b" size="1.4em" />
        <Search placeholder="What are you looking for ?" />
      </div>
    </Header>
  )
}

export default Nav
