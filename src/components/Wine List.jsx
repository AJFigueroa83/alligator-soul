import React from 'react'
import styled from 'styled-components'
import { imageZoomEffect, TitleStyles } from './ReusableStyles'

export default function Products() {
  const data = [
    {
      title: "Sparkling",
      name: "Aimé Baron, Limoux, France",
      price: "$10 | $39",
    },
    {
      name: "Le Grand Courtage, Brut Rosé, France - 187ml",
      price: "$11",
    },
    {
      name: "Zingara, Prosecco, Italy",
      price: "$45",
    },
    {
      name: "Carpene Malvolti, Prosecco, Italy - 187ml",
      price: "$12",
    },
    {
      name: "Jean-Luc Joillot, Crémant de Bourgogne, France - 187ml | 750ml",
      price: "$35 | $64",
    },
    {
      name: "Schramsberg, Blanc de Blancs, Calistoga, California, 2019",
      price: "$75",
    },
    {
      name: "La Crema, Brut Rosé, Russian River Valley, California",
      price: "$95",
    },
    {
      name: "Pommery, Champagne, France",
      price: "$95",
    },
    {
      name: "Veuve-Cliquot Ponsardin, Champagne, France",
      price: "$105",
    },
    {
      title: "Chardonnay",
      name: "Alligator Soul Private Label, Lodi, California, NV",
      price: "$10 | $39",
    },
    {
      name: "Bernardus, Monterey County, Caifornia, 2021",
      price: "$12 | $46",
    },
    {
      name: "Famille Vincent, Bourgogne, France 2020",
      price: "$14 | $54",
    },
    {
      name: "Sean Minor, Sonoma Coast, California, 2021",
      price: "$80",
    },
    {
      name: "DuMol, Russian River Valley, California, 2018",
      price: "$75",
    },
    {
      name: "Cakebread, Napa Valley, California, 2020",
      price: "$82",
    },
    {
      name: "The Prisoner, Carneros, California, 2021",
      price: "$86",
    },
    {
      name: "Louis Latour, Pouilly-Fuissé, 2019",
      price: "$95"
    },
    {
      title: "Shades of White",
      name: "Bodega Garzón, Reserva Albariño, Maldonado, Uruguay, 2021",
      price: "$13 | $50"
    },
    {
      name: "The Prisoner, Blindfold, White Blend, California, 2018",
      price: "84"
    },
    {
      name: "Mastroberardino, Falanghina del Sannio, Italy, 2020",
      price: "$14 | $54"
    },
    {
      name: "Demarie, Moscato D'Asti, Piedmonte, Italy, 2021",
      price: "$11 | $42"
    },
    {
      name: "Alligator Soul Private Label, Pinot Grigio, Lodi, California, NV",
      price: "$10 | $39"
    },
    {
      name: "Chemistry, Pinot Gris, Willamette Valley, Oregon, 2021",
      price: "$11 | $44"
    },
    {
      name: "Leitz, Riesling, Rheingau, Germany, 2021",
      price: "$12 | $46"
    },
    {
      name: "Stoneleigh, Sauvignon Blanc, Marlborough, New Zealand, 2022",
      price: "$10 | $39"
    },
    {
      name: "La Gabacha, Sauvignon Blanc, Rueda, Spain, 2021",
      price: "$11 | $42"
    },
    {
      name: "J de Villebois, Pouily-Fumé, France, 2021",
      price: "$14 | $54"
    },
    {
      name: "Torbreck, Semillon, Barossa Valley, Australia, 2021",
      price: "$13 | $50"
    },
    {
      name: "Left Coast, White Pinot Noir, Willamette Valley, Oregon, 2021",
      price: "$16 | $72"
    },
    {
      name: "Domaine Serge Laporte, Sancerre, France, 2022",
      price: "$80"
    },
    {
      title: "Cabernet Sauvignon",
      name: "Alligator Soul Private Label, Lodi, California, NV",
      price: "$10 | $39"
    },
    {
      name: "Millbrandt, Columbia Valley, Washington, 2019",
      price: "$12 | $46"
    },
    {
      name: "Rodney Strong, Knights Valley, Sonoma County, California, 2017",
      price: "$13 | $48"
    },
    {
      name: "Concha y Toro Gran Reserva, Marchigüe, Chile, 2020",
      price: "$49"
    },
    {
      name: "75, Mendocino County, California, 2020",
      price: "$16 | $63"
    },
    {
      name: "Altocedro Resreve, Mendoza, Argentina, 2019",
      price: "$82"
    },
    {
      name: "Hall, Napa Valley, California, 2019",
      price: "$95"
    },
    {
      name: "The Prisoner, Napa Valley, California, 2019",
      price: "$25 | $98"
    },
    {
      name: "The Possessor by Tooth + Nail, Paso Robles, California, 2020",
      price: "$75"
    },
    {
      name: "Cakebread Cellars, Napa Valley, California, 2019",
      price: "$135"
    },
    {
      name: "Lithology by Beckstoffer, To Kalon Vineyard, Oakville, California, 2019",
      price: "$125 | $500"
    },
    {
      name: "Lithology by Beckstoffer, Las Piedras, Napa Valley, California, 2019",
      price: "$500"
    },
    {
      name: "Schrader, RBS by Beckstoffer, To Kalon Vineyard, Napa Valley, California, 2019",
      price: "$825"
    },
    {
      title: "Pinot Noir",
      name: "Alligator Soul Private Label, Lodi, California, NV",
      price: "$10 | $39"
    },
    {
      name: "Stoller, Willamette Valley, Oregon, 2021",
      price: "$15 | $58"
    },
    {
      name: "Georges Joillot, Cote d'Or, France, 2020",
      price: "$62"
    },
    {
      name: "Santenay Grand Clos Rousseau, Chassagne Montrachet, Bourgogne, France, 2019",
      price: "$90"
    },
    {
      name: "Belle Glos Las Alturas, Santa Lucia Highlands, California, 2021",
      price: "$90"
    },
    {
      name: "Dumol, Russian River Valley, California, 2020",
      price: "$95"
    },
    {
      name: "The Prisoner, Sonoma Coast, California, 2021",
      price: "$25 | $98"
    },
    {
      name: "Croix Estate, Bacigalupi Vineyard, Russian River Valley, Caifornia, 2019",
      price: "$145"
    },
    {
      name: "Gevrey-Chambertin, Premier Cru, Les Corbeaux, Bourgogne, France, 2018",
      price: "$365"
    },
    {
      name: "Sean Minor, Sonoma Coast, California, 2021",
      price: "$80"
    },
    {
      title: "Merlot",
      name: "Robert Hall, Paso Robles, California, 2020",
      price: "$10 | $39"
    },
    {
      name: "Rutherford Hill, Rutherford, California, 2019",
      price: "$59"
    },
    {
      name: "Plumpjack, Napa Valley, California, 2021",
      price: "$80"
    },
    {
      title: "Rosé",
      name: "The Pale by Sacha Lichine, Provence, France, 2021",
      price: "$14 | $75"
    },
    {
      title: "Shades of Red",
      name: "Sartori di Verona, Corte Brà, Amarone della Valpolicella, Italy, 2015",
      price: "$120"
    },
    {
      name: "Famille Perrin, Châteauneuf-du-Pape, France, 2019",
      price: "$25 | 100"
    },
    {
      name: "Antiche Cantine, Marchesi di Barolo, Piedmonte, Italy, 2017",
      price: "$85"
    },
    {
      name: "Cannubi, Marchesi di Barolo, Piedmonte, Italy, 2014",
      price: "$235"
    },
    {
      name: "Château L'Hospitalet Grand Vin, La Clape, Bordeaux Blend, France, 2020",
      price: "$92"
    },
    {
      name: "Domaine Mas Barrau, Cabernet Franc, Gard, France, 2018",
      price: "$12 | $47"
    },
    {
      name: "Destinata by Tooth + Nail, Carbonic Grenache, Paso Robles, California, 2021",
      price: "$75"
    },
    {
      name: "Chapellet, Mountain Cuvée, California Blend, Napa Valley, California, 2020",
      price: "$60"
    },
    {
      name: "The Prisoner, California Blend, Napa Valley, California, 2021",
      price: "$90"
    },
    {
      name: "Bootleg, California Blend, Napa Valley, California, 2016",
      price: "$90"
    },
    {
      name: "Paraduxx, California Blend, Napa Valley, California, 2019",
      price: "$97"
    },
    {
      name: "Amulet, Tuck Beckstoffer Estate, California Blend, Napa Valley, California, 2017",
      price: "$215"
    },
    {
      name: "Paramour, Blackbird Vineyards, California Blend, Napa Valley, California, 2016",
      price: "$225"
    },
    {
      name: "Contrarian, Blackbird Vineyards, California Blend, Napa Valley, California, NV",
      price: "$295"
    },
    {
      name: "Château Lynch Bages, Grand Cru Classé, Pauillac, France, 2014",
      price: "$345"
    },
    {
      name: "Domaine Galévan, Châteauneuf-du-Pape, Rhône Valley, France, 2018",
      price: "$140"
    },
    {
      name: "Vecchie Terre Di Montefili, Chianti Clasico, Tuscany, Italy, 2019",
      price: "$99"
    },
    {
      name: "Creation Grosset, Cairanne, Cótes du Rhône, France, 2019",
      price: "$12 | $45"
    },
    {
      name: "Altocedro Año Cero, Malbec, Mendoza, Argentina, 2021",
      price: "$14 | $55"
    },
    {
      name: "Altocedro Reserve, Old Vines Malbec, Uco Valley, Mendoza, Argentina, 2019",
      price: "$82"
    },
    {
      name: "Bruno Giacosa, Nebbiolo, Neive, Italy, 2018",
      price: "$78"
    },
    {
      name: "Familia Montaña Reserva, Rioja, Spain, 2016",
      price: "$49"
    },
    {
      name: "Marqués de Cáceres, Reserva, Rioja, Spain, 2014",
      price: "$87"
    },
    {
      name: "The Stand by Tooth + Nail, Petite Sirah, Paso Robles, California, 2020",
      price: "$75"
    },
    {
      name: "Two Hands, Angel's Share, Shiraz, Marananga, Australia, 2019",
      price: "$66"
    },
    {
      name: "Mongrana Querciabella Maremma, Tuscany, Italy, 2019",
      price: "$46"
    },
    {
      name: "The Big Easy, Fess Parker Winery, Red Blend, Santa Barbara County, California, 2019",
      price: "$20 | $75"
    },
    {
      name: "Saldo, The Prisoner Wine Company, Red Blend, Napa Valley, California, 2019",
      price: "$66"
    },
    {
      name: "Saldo, The Prisoner Wine Company, Zinfandel, Napa Valley, California, 2021",
      price: "$17 | $66"
    },
    {
      name: "Martinelli, Zinfandel, Russian River Valley, California, 2019",
      price: "$87"
    },
    {
      name: "Tintafina by Casa Rojo, Tempranillo, La Raja Valley, Spain, 2019",
      price: "$80"
    },
    {
      name: "Macho Man by Casa Rojo, Monastrell, La Raja Valley, Spain, 2019",
      price: "80"
    }
  ];

  return (
    <Section id='products'>
      <div className="title">
        <h1>
          Wine List
        </h1>
      </div>
      <div className='products'>
        {
          data.map((product)=> {
            return (
              <div className='product'>
                <h1 className='title'>{product.title}</h1>
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
    .title {
      font-size: 2rem;
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