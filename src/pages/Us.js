import React, { useEffect } from 'react';
import Banner from '../components/Banner'
import UsImage from '../assets/images/carrousel/travailleurs.jpg'
import DetailUs from '../components/us/DetailUs';

import imgHis1 from '../assets/images/creation-min.jpeg'
import imgHis2 from '../assets/images/002_Vanilles.jpg'
import Location from '../components/us/Location';
import Team from '../components/us/Team';
import { useTranslation } from 'react-i18next';

const data = [imgHis1,imgHis2]
const Us = () => {

     const { t } = useTranslation('global')
    
        // Récupération des sections dynamiquement
        const historical = t('us.historical', { returnObjects: true });

        useEffect(()=>{
            console.log(historical);
        },[historical])

    return (
        <>
            <Banner title={t('navbar.1')} img={UsImage}/>
            <div className='flex flex-col items-center text-primary'>
            <h2 className='text-4xl mt-10 font-cereal'>Historique</h2>
            <p>Promabio</p>
            </div>
            {historical.map((item, index)=>(
                <DetailUs key={index} img={ data[index]} title={item.title} content={item.content} index={index} />
            ))}
            <Team/>
            <Location/>
            
        </>
    );
};

export default Us;