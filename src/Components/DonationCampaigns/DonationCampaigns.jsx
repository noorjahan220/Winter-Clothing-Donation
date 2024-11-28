import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const DonationCampaigns = () => {
    const data = useLoaderData();
    
    const [card, setCard] = useState([]);
   

    useEffect(()=>{
        setCard(data)
    },[]);
    console.log(card)
    
    return (
        <div>
         
           {
            card.map(card=> (<Card key={card.id} card={card}/>))
           }
        </div>
    );
};

export default DonationCampaigns;