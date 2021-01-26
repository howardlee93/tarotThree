import styles from '../styles/spread_layout.module.css';
import Image from 'next/image'
import React from 'react';


const Card = ({card}) =>{

    return(
        <div className={styles.card}>

            <Image src="/back.jpg" alt="me" width="100%" height="100%"/>
            <h1>{card.name}</h1>
            
    
        
        </div>

    )
};

export default Card;
