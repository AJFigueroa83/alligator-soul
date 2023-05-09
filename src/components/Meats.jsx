import React from 'react'
import styled from 'styled-components'
import product4 from '../assets/product4.jpg'
import { imageZoomEffect, TitleStyles } from './ReusableStyles'

export default function Products() {
  const data = [
    {
      image: product4,
      name: "Veal Scaloppini",
      description: "Pan seared Veal ~ Alligator Chorizo Jalapeño Popper ~ Warm Potato Salad ~ Bacon ~ Sauteéd Asparagus ~ Watermelon ~ Veal Demi Glace - GF",
      price: "$45",
    },
    {
      image: product4,
      name: "Wild Boar Shank",
      description: "Wild Boar Confit ~ Parsnip Puree ~ Carrots ~ Roasted Brussels ~ Rum Glaze ~ Sweet Plantains - GF",
      price: "$41",
    },
    {
      image: product4,
      name: "Duck",
      description: "Smoked Duck Breast ~ Bone Marrow Bread Pudding ~ Blackberry Coulis ~ Broccoli ~ Duck Gravy ~ Cotton Candy",
      price: "$41",
    },
    {
      image: product4,
      name: "The 'Little Hilbo' 16oz",
      description: "Hilbo Spiced and Grilled All-Natiral Grass-Fed Beef Ribeye ~ Boursin Mashed Potatoes and Hilbo Butter ~ Sauteed Brocolli ~ Caramelized Onions ~ Veal Demi-Glace ~ Bourbon Peppercorn Cream - GF",
      price: "$53",
    },
    {
      image: product4,
      name: "Cowboy Hilbo 32oz",
      description: "Hilbo Spiced and Grilled All-natural Grass-Fed Beef Ribeye - GF",
      price: "$114",
    },
  ];

  return (
    <Section id='products'>
      <div className="title">
        {/* <h1>
          <span>Dinner</span> Menu
        </h1> */}
        <h1>Grass-Fed and All-Natural!</h1>
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
  .product {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    justify-content: center;
    align-items: center;
    color: #450000;
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