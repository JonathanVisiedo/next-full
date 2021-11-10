import styles from '../styles/About.module.scss'
import Link from 'next/link'
import styled from "styled-components";


const Title = styled.h1`
  font-size: 62px;
  font-weight: 900;
  color: ${({theme}) => theme.colors.primary};
`

const Paragraph = styled.p`
  font-size: 18px;
  color: black;
  font-weight: 400;
`

const About = () => {

    return <div  className={'container'}>
        <Link href="/">Back to homepage</Link>
        <Title>About</Title>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque cupiditate doloremque nemo possimus praesentium, sequi sunt velit? Deleniti dolorum ea eveniet libero optio, quae sint soluta vitae? Adipisci asperiores consequatur excepturi qui reprehenderit unde voluptatem! Accusamus dicta earum iste necessitatibus nemo nesciunt numquam officiis sequi velit vitae. Atque, beatae.
        </Paragraph>
    </div>

}


export default About