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
      name: "Alligator Boudin Fritters",
      description: "Alligator Boudin Fritters served with Peppadews, Hilbo Aioli and Parsley Oil - GF",
      price: "$22",
    },
    {
      image: product2,
      name: "Chopped Salad",
      description: "Baby Iceberg, Crumbled Blue Cheese, Cherry Tomatoes, Walnuts, Cranberries, Blue Cheese Dressing, Bacon - GF",
      price: "$15",
    },
    {
      image: product3,
      name: "Roasted Mushroom Salad",
      description: "Wild Mushrooms, Farro, Caramelized Shallots, Local Greens, Lemon Vinaigrette, Shaved Black Truffle, White Truffle Oil - VG",
      price: "$17",
    },
    {
      image: product4,
      name: "Candied Alligator",
      description: "Maple Glazed Alligator, Caramel Popcorn - GF",
      price: "$17",
    },
    {
      image: product4,
      name: "Carving Board",
      description: "Candied Alligator, Roasted Bone marrow, Artisanal Cheeses, Assorted Accouterments, Assorted Flat Breads",
      price: "$31",
    },
    {
      image: product4,
      name: "Alligator Tempura",
      description: "Alligator Tempura, Seaweed Salad, Sweet Chili, Pickled Ginger, Toasted Sesame Seeds",
      price: "$17",
    },
    {
      image: product4,
      name: "Strawberry Rhubarb Salad",
      description: "Springs Mix, Candied Pecans, Strawberry Vinaigrette, Greek Yougurt with Lime Zest, Parmesan Grit, Croutons, Macerated Rhubarb, Carrots, Radishes - GF/VG",
      price: "$16",
    },
  ];

  return (
    <Section id='products'>
      <div className="title">
        <h1>
          Dinner Menu
        </h1>
        <h1>Small Things Considered!</h1>
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