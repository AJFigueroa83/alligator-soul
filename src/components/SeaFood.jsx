import React from 'react'
import styled from 'styled-components'
import product4 from '../assets/product4.jpg'
import { imageZoomEffect, TitleStyles } from './ReusableStyles'

export default function Products() {
  const data = [
    {
      image: product4,
      name: "Diver Scallops",
      description: "Tequila Lime Seared Scallops, Andouille Sausage, Savannah Red Rice, Red Beans, Lime and Peach Chutney, Lime Butter Sauce",
      price: "$45",
    },
    {
      image: product4,
      name: "Brunswick Gumbo",
      description: "Wild Caught Louisiana Gulf Shrimp, Louisiana Crawfish, Beer Braised Pork Butt, Crispy Frog Legs, Grilled Andouille Sausage, Corn, Trinity Mirepoix, Okra, Dark Cajun Roux, Carolina Gold Rice, Fried Green Tomato",
      price: "Cup Portion $14 | Entree Portion $36",
    },
    {
      image: product4,
      name: "Tarragon Mussels",
      description: "Prince Edward Island Mussels, Crispy Pancetta, Sweet Peppadews, White Wine Tarragon Cream Sauce, Lavash",
      price: "$32",
    },
    {
      image: product4,
      name: "Shrimp and Grits",
      description: "Sauteed Wild Caught Louisiana Gulf Shrimp, Roasted Corn Bisque, Creole Spices, Stone-Ground Georgia Grits, Smoked Gouda and Bacon, Red Pepper Jam - GF",
      price: "Cup Portion $12 | Entree Portion $36",
    },
    {
      image: product4,
      name: "Local Day Boat Fish",
      description: "Our Fish Monger Brings the Chef Daily Caught Fish. Ever Changing; Our Always Fresh Product Allows Our Chef to Create Something Special for his Guests. Your Server Will Describe What's Cooking Tonight!",
      price: "Market Price",
    },
  ];

  return (
    <Section id='products'>
      <div className="title">
        <h1>All Things From The Sea!</h1>
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