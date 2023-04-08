import React from 'react';

type PreloaderPropsType = {
   preloader: string
}

export const Preloader = (props: PreloaderPropsType) => {
   return (
      <div>
         <img src={props.preloader} alt="preloader"/>
      </div>
   );
};