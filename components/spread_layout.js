
import styles from '../styles/spread_layout.module.css';
import Meaning_Card from './meaning_card';
import React, { useState, useEffect } from 'react';

import {CardHandler} from '../pages/api/card_id';

import Image from 'next/image';

//NOTE: string in props is only placeholder, will need to change to actual props later 

export default function Spread({children}){ // will need to pass props in here
  

    const [cards, setCards] = useState([]);

    const [dir, setDir] = useState("meaning_up")

    const selectDir = () =>{
      let dir = Math.floor(Math.random()*2 +1 );
      dir == 1 ? setDir("meaning_up") : setDir("meaning_rev");

    }

    const cardClick = async (e) =>{
      const data = await CardHandler();    
      setCards(data);
      selectDir();
      console.log(dir);

    }

    const meaningSpread = cards.map((card,i) =>
      <Meaning_Card card={card} key={i} cardDir={dir} cardDes={card[dir]}/>
    )
      
    return(
        <div className={styles.main}> 
          <button onClick={cardClick}>Shuffle the cards</button>
          <p> Click the cards to reveal your fate</p>

            <article className={styles.reading}>
              { cards ? meaningSpread :<div/>}
            </article>
      
      </div>
    )
}
