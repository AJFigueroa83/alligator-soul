import React from 'react'
import styled from 'styled-components'
import logo from '../assets/alligatorLogo.png'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
// import { GrLinkedinOption } from 'react-icons/gr'

export default function Footer() {
  return (
    <div className='footer'>
      <Section>
        <div className="brand container">
          <img src={logo} alt='logo' />
          <p>
            Alligator Soul reserve the right of admission. All parties of 6 or more will have a 20% gratuity aded to the check.
          </p>
          <ul>
            <li><a href="https://www.instagram.com/alligatorsoul/?hl=en" target="blank"><AiFillInstagram /></a></li>
            <li><a href='https://www.facebook.com/AlligatorSoulGA/' target='blank'><FaFacebook /></a></li>
            <li><a href='https://twitter.com/alligatorsoulga?lang=en' target='blank'><BsTwitter /></a></li>
          </ul>
        </div>
        <div className='about container'>
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>Alligator Soul is fine dining at it's best in downtown Savannah.</p>
        </div>
        <div className='contact container'>
          <div className='title'>
            <h3>Contact Us</h3>
          </div>
          <p>912-232-7899</p>
          <p>alligatorsoul@gmail.com</p>
          <p>@alligatorsoul</p>
          <p>114 Barnard St. Savannah, GA 31401-3277</p>      
        </div>
      </Section>
      <LowerFooter className='lower__footer'>
        <h2>Copyright &copy; 2023 <span>SommCoder Web Design</span></h2>
      </LowerFooter>
    </div>
    
  )
}

const Section = styled.footer`
margin: 0;
// background: linear-gradient(to right, #fc4958, #e85d05);
background-color: #7f171f;
color: white;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10vw;
padding: 4vw;
p {
  font-size: 1.1rem;
  line-height: 2rem;
  letter-spacing: 0.1rem;

}
ul {
  display: flex;
  list-style-type: none;
  gap: 4vw;
  margin-top: 2vw;
  li {
    padding: 0.8rem;
    border-radius: 2rem;
    background-color: white;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fc4958;
      font-size: 1.6rem;
      transition: 0.3s ease-in-out;
    }
    &:hover {
      background-color: black;
      svg {
        transform: scale(1.2);
      }
    }
  }
}
img {
  filter: brightness(0) invert(1);
  width: 10vw;
  height: 8rem;
  width: 8rem;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h3 {
    font-size: 2rem;
  }
}
@media screen and (min-width: 260px) and (max-width: 1080px) {
  grid-template-columns: 1fr;
  .container {
    img {
    height: 4rem;
    width: 10rem;
    }
  }
}
`;

const LowerFooter = styled.div`
margin: 0;
text-align: center;
background-color: black;
color: white;
padding: 1rem;
h2 {
  span {
    color: #fc4958;
    text-transform: uppercase;
  }
}
@media screen and (min-width: 260px) and (max-width: 450px) {
  h2 {
    span {
      display: block;
    }
  }
}
`;