import React from 'react'
import styled from 'styled-components'
import wine from '../assets/wine.jpeg'
import cocktail from '../assets/cocktail.webp'
import dinner from '../assets/dinner.jpeg'
import product4 from '../assets/product4.jpg'
import { imageZoomEffect, TitleStyles } from './ReusableStyles'

export default function Products() {
  const data = [
    {
      image: wine,
      name: "Wine List",
    },
    {
      image: cocktail,
      name: "Cocktails",
    },
    {
      image: dinner,
      name: "Dinner",
    },

    {
      image: product4,
      name: "Desserts",
    },
  ];
  return (
    <Section id='products'>
      <div className="title">
        <h1>
          Our Menus! Eat, Drink & Relax Your Soul
        </h1>
      </div>
      <div className='products'>
        {
          data.map((product)=> {
            return (
              <div className='product'>
                <div className='image'>
                  <img src={product.image} alt="Product" />
                </div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>Come taste what we have to offer!!</p>
                <a href='#appetizers'>
                  <button>See Full Menu</button>
                </a>
                
              </div>
            )
          })
        }
      </div>
    </Section>
  );
}

const Section = styled.section`
${TitleStyles};
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-top: 3rem;
  color: #7f171f;
  .product {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    justify-content: center;
    align-items: center;
    h3 {
      color: #fc4958;
    }
    p {
      text-align: center;
      font-size: 1.1rem;
      line-height: 2rem;
      letter-spacing: 0.1rem;
    }
    ${imageZoomEffect};
    .image {
      max-height: 20rem;
      overflow: hidden;
      border-radius: 1rem;
      img {
        height: 20rem;
        width: 15rem;
      }
    }
    button {
      border: none;
      padding: 1rem 4rem;
      color: white;
      fonr-size: 1.4rem;
      border-radius: 4rem;
      cursor: pointer;
      // background: linear-gradient(to right, #fc4958, #e85d05);
      background-color: #7f171f;
      &:hover {
        background: linear-gradient(to left, #fc4958, #e85d05);
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 720px) {
  .products {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
  }
}
@media screen and (min-width: 720px) and (max-width: 1080px) {
  .products {
    grid-template-columns: repeat (2, 1fr);
  }
}
`;