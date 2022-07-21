import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 9vh;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px
`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.span``

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            atque voluptatibus quo veritatis harum quam, nesciunt eius ipsa
            repellat fugiat eveniet aut! Suscipit voluptatum, in voluptas fugit
            non modi eius!
          </Desc>
          <Price>$20</Price>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product
