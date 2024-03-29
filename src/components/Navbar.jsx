import React from 'react'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge'

const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const Input = styled.input`
  border: none;
`

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SADAK.store</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='secondary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
