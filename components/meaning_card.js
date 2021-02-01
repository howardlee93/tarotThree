
import React,{ useState } from 'react';

import styles from '../styles/meaning.module.css';

import Image from 'next/image';


const Meaning_Card = ({card, cardDes, cardDir}) =>{

    const [toggled, setToggled] = useState(true);

    let imgSrc =  toggled ? '/back.jpg' : `/cards/${card.img}.jpg`;

    const cardClick =() =>{
         
        setToggled(!toggled);
    }
    return(
        <div className={styles.container}>
            <Image src={imgSrc} alt="me" width="200%" height="200%" onClick={cardClick}
            className={ cardDir == "meaning_up" ? "up" :  "reverse"}/>
                <style jsx global>{`
                    .reverse {
                        transform: rotateX(180deg)            
                `}</style>

            {toggled ?  <div/> :  
                <div>
                    <h1>{card.name}</h1>
                    {cardDir == "meaning_up" ? <p>up</p> : <p>reversed</p>}
                    <p>{cardDes}</p>
            </div>}

        </div>

    );
};

export default Meaning_Card;
