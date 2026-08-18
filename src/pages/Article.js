import React from 'react';
import Banner from '../components/Banner';

import imgBanner from '../assets/images/carrousel/image-4.jpg'

import imgArt1 from '../assets/images/20_Preparation.jpg'

const dataArticle = [
    {
        title : 'L\'avenir de la vanille',
        content : 'La vanille est une épice constituée par le fruit de certaines orchidées lianescentes tropicales d\'origine mésoaméricaine du genre Vanilla, principalement de l\'espèce Vanilla planifolia.Vanilla pompona peut également être cultivé pour la production de la vanille, son fruit court lui valant aussi l\'appellation de vanillon.',
        img : imgArt1
    },
        {
            title : '',
            content : '',
            img : ''
        },

]

const Article = () => {
    return (
        <div>
            <Banner title='Nos articles' img={imgBanner}/>
            <div className="h-16"></div>

            
        </div>
    );
};

export default Article;