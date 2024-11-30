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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 p-5'>
         
           {
            card.map(card=> (<Card key={card.id} card={card}/>))
           }
        </div>
    );
};

export default DonationCampaigns;