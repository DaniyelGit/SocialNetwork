import React from 'react';
import preloader from '../../assets/images/preloader.svg';

type PreloaderType = {

}

export const Preloader = (props: PreloaderType) => {
    return (
        <div>
            <img src={preloader} alt="preloader"/>
        </div>
    );
};

