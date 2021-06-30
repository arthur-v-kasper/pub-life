import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  color: #fff;
  background-color: #355d09;
`

const Container = styled.div `
  max-width:1200px;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`

const Nav = styled.nav`
  display: flex;
`

const Menu = styled.ul`
  display: flex;
`

const Item = styled.li`
  list-style: none;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 17px;
    margin: 0 10px;
  }
`

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <div className="logo">
          <h2>OpenPubs</h2>
        </div>
        <Nav>
          <Menu>
            <Item>
              <Link to={"/"}>Home</Link>
            </Item>
            <Item>
              <Link to={"/"}>About</Link>
            </Item>
          </Menu>
        </Nav>
      </Container>
    </Wrapper>
  )
}

export default Navbar