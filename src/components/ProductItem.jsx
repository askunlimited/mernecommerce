import {
  FavoriteOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`
const Circle = styled.div`
  height: 200px;
  width: 200px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductItem
