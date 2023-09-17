import React from 'react';
import './style.css';

export const LandingPage = (): JSX.Element => {
  return (
    <div className='landing-page'>
      <div className='div'>
        <p className='text-wrapper'>Find the stuff you'll love.</p>
        <p className='p'>
          Aliquam rhoncus pretium dolor volutpat lectus odio non tellus neque.
          Aliquet et purus nibh bibendum integer etiam in enim nisi.
        </p>
        <img
          className='google-play-badge-US'
          alt='Google play badge US'
          src='/img/google-play-badge-us.png'
        />
        <img
          className='app-store-badge-US'
          alt='App store badge US'
          src='/img/app-store-badge-us-black.png'
        />
        <div className='overlap-group'>
          <img
            className='home'
            alt='Home'
            src='/img/home.png'
          />
          <img
            className='cart'
            alt='Cart'
            src='/img/cart.png'
          />
          <img
            className='orders'
            alt='Orders'
            src='/img/orders.png'
          />
          <img
            className='product'
            alt='Product'
            src='/img/product.png'
          />
          <img
            className='profile'
            alt='Profile'
            src='/img/profile.png'
          />
        </div>
        <img
          className='habitual-branding'
          alt='Habitual branding'
          src='/img/habitual-branding.png'
        />
        <div className='main-image'>
          <img
            className='iphone'
            alt='Iphone'
            src='/img/iphone-15.png'
          />
        </div>
      </div>
    </div>
  );
};
