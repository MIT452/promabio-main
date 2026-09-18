import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Location = () => {
    const {t} = useTranslation('global')
    return (
        <div>
            <div className='h-16'></div>
            <div className='Title'>
                <h2 className='text-center text-5xl'>{t('us.location.0')}</h2>
            </div>
            <div className='h-4'></div>
        <div className='md:flex text-normal'>
            <div className='flex flex-col mx-5 flex-1 md:items-center justify-center gap-3'>
                <div>
                <p className='text-4xl mb-2'>Promabio SARL</p>
                <div className="adress my-3">
                    <FontAwesomeIcon icon={faLocationDot} /> Secteur n°10 Maherifody, 206 Antalaha, Madagascar
                    <p className='font-bold text-secondary'>{t('us.location.1')}</p>
                </div>
                <div className="phone my-3">
                    <p><FontAwesomeIcon icon={faPhone} /> +261 32 05 160 42</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +261 32 05 160 43</p>
                    <p className='font-bold text-secondary'>{t('us.location.2')}</p>
                </div>
            </div>
            </div>
            <div className='flex-1'>
            <iframe className='h-[350px] md:w[600px] w-[100%]' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=+(Promabio%20SARL)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
            </div>
        </div>
        <div className='h-12'></div>
        
        </div>
    );
};

export default Location;