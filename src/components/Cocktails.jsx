import React from 'react'
import styled from 'styled-components'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import { imageZoomEffect, TitleStyles } from './ReusableStyles'

export default function Products() {
  const data = [
    {
      image: product1,
      name: "Hickory Pig",
      description: "Whistle Pig Piggyback 6 Year Rye ~ Benedictine ~ Maple Syrup ~ 18.21 Havana & Hyde Bitters ~ El Guapo Barrel-Aged Vanilla Bitters",
      price: "$16",
    },
    {
      image: product2,
      name: "The Diplomat",
      description: "Diplomatico Rum ~ Star Anise ~ Luxardo Liqueur ~ Chocolate Bitters ~ Orange Twist",
      price: "$14",
    },
    {
      image: product3,
      name: "Lazy Colonel",
      description: "Vago Elote Mezcal ~ Elote Syrup ~ Agave ~ Lime ~ Pinch of Salt ~ Japanese Chili Lime Bitters",
      price: "$16",
    },
    {
      image: product4,
      name: "The Duke",
      description: "Durham Cucumber Vodka ~ Cucumbers ~ Lemon ~ Rosemary ~ Bitter Truth Elderflower Liqueur",
      price: "$13",
    },
    {
      image: product4,
      name: "Etta James",
      description: "Durham Conniption Gin Infused with Cucumber and Blueberry ~ Effervescent Citrus ~ Fresh Blueberry and Cucumber Wheel Garnish",
      price: "$13",
    },
    {
      image: product4,
      name: "Betty Davis",
      description: "Herradura Blanco Tequila ~ Pineapple-Habanero Shrub ~ Lime Juice ~ Agave",
      price: "$15",
    },
    {
      image: product4,
      name: "The Rhubarb Engine",
      description: "Conniption Gin ~ Rhubarb Liqueur ~ Basil ~ Lemon ~ Merlot Floater",
      price: "$15",
    },
    {
      image: product4,
      name: "Stray Cat",
      description: "Tom Cat Gin ~ Lucano Amaro ~ Benedictine ~ Lemon Bitters ~ Peychaud Bitters",
      price: "$15",
    },
    {
      image: product4,
      name: "Anything Goes",
      description: "Castle & Key Sacred Springs Vodka ~ Mango Juice ~ Lemon Juice ~ Rosemary Garnish",
      price: "$15",
    },
    {
      image: product4,
      name: "Venetian Barrel-Aged Negroni",
      description: "Conniption Gin ~ Pivón Sweet Vermouth ~ Venezia Select Aperitif",
      price: "$16",
    },
    {
      image: product4,
      name: "Butterfly & Bee",
      description: "Pea Flower Gin ~ Agave Nectar ~ Lemon Juice ~ Rosemary Simple Syrup ~ Zingara Prosecco",
      price: "$14",
    },
    {
      image: product4,
      name: "Barrel-Aged Sazerac",
      description: "Castle & Key Restoration Rye ~ Absinthe Rinse ~ Bitter Truth Lemon Bitters ~ Peychaud's Bitters ~ Bitter Truth Apricot Liqueur",
      price: "$22",
    },
    {
      image: product4,
      name: "The Lotus",
      description: "The Real McCoy Rum ~ Rosemary Simple Syrup ~ Lime Juice ~ Grapefruit Juice ~ Angostura Bitters ~ Lime Twist",
      price: "$13",
    },
    {
      image: product4,
      name: "Barrel-Aged Old Fashioned",
      description: "Elijah Craig Bourbon ~ El Guapo Creole Orgeat ~ Angostura and Peychaud's Bitters ~ Bitter Truth Orange Bitters",
      price: "$18",
    },
    {
      image: product4,
      name: "The Scotsman",
      description: "Lagavulin 8 Years ~ Montenegro Amaro ~ Disaronno ~ Mint Leaf ~ Lemon Peel",
      price: "$17",
    },
    {
      image: product4,
      name: "Soul Sangria",
      description: "Wine Infused with Fresh Seasonal Fruits and Spices",
      price: "$12",
    }
  ];

  return (
    <Section id='products'>
      <div className="title">
        <h1>
          Signature Cocktails
        </h1>
      </div>
      <div className='products'>
        {
          data.map((product)=> {
            return (
              <div className='product'>
                {/* <div className='image'>
                  <img src={product.image} alt="Product" />
                </div> */}
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
                <h3 className='price'>{product.price}</h3>
                {/* <p>Come taste what we have to offer!!</p> */}
                {/* <button>See Full Menu</button> */}
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
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  margin-top: 3rem;
  background-color: ivory;
  .product {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    justify-content: center;
    align-items: center;
    color: #450000;;
    h3 {
      text-align: center;
      color: #450000;
    }
    .price {
      font-style: italic;
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
      background: linear-gradient(to right, #fc4958, #e85d05);
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