import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import imgBanner from '../assets/images/carrousel/image-4.jpg';
import { getArticles } from '../services/api';

// Exemple d'intégration de l'API Laravel dans une page existante.
// Remplace le contenu actuel de src/pages/Article.js par celui-ci
// une fois le backend démarré (php artisan serve).

const Article = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getArticles()
            .then(setArticles)
            .catch(() => setError("Impossible de charger les articles pour le moment."))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <Banner title='Nos articles' img={imgBanner} />
            <div className="h-16"></div>

            {loading && <p className='text-center'>Chargement...</p>}
            {error && <p className='text-center text-red-600'>{error}</p>}

            <div className="grid md:grid-cols-3 gap-6 w-[90%] mx-auto">
                {articles.map((article) => (
                    <div key={article.id} className='rounded-lg overflow-hidden border shadow-md'>
                        {article.image_url && (
                            <img src={article.image_url} alt={article.title} className='w-full h-48 object-cover' />
                        )}
                        <div className='p-4'>
                            <h3 className='text-titleMd font-semibold text-primary mb-2'>{article.title}</h3>
                            <p className='text-normal text-gray-600'>{article.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="h-16"></div>
=======
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


