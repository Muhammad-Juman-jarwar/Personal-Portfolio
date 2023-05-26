import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import './Whatsapp.css';

const Whatsapp = () => {
  return (
    <React.Fragment>
        <div className="whatsapp">
            <a href="https://wa.me/+923153037838?text=Hello%20there!" target="_blank" rel="noreferrer">
                <IoLogoWhatsapp className='whatsapp__icon' />
            </a>
        </div>
    </React.Fragment>
  );
};
export default Whatsapp;