import {card_data} from './data/card_data'

export async function CardHandler(){
  
  let firstRand = Math.floor(Math.random() *78);
  let secondRand = Math.floor(Math.random() *77);
  let thirdRand = Math.floor(Math.random() *76);

  let cards = card_data["cards"];

  let firstCard = cards[firstRand];
  let secondCard = cards.filter(card => card != cards[firstRand])[secondRand];
  let thirdCard = cards.filter(card => card !== cards[firstRand] && card != secondCard)[thirdRand]

  // let cardsData = [].concat(cards[firstRand], cards[secondRand],cards[thirdRand]);

  let cardsData = [].concat(firstCard, secondCard, thirdCard);
  
  return cardsData;
    
};
 
export default async (req, res) => {
  const cardsData = await CardHandler()
  res.json(cardsData)
}


