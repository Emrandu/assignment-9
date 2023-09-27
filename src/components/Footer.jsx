import React from 'react';
import '../image/Footer.css'
import {FaceSmileIcon, BeakerIcon , FilmIcon  } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <>
           <div className='footer-container  justify-between'>

            <div className='ml-12'>
              <h1 className='font-bold text-2xl'>Jobs Kingdom</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda cupiditate tenetur nisi sint at unde nostrum fugiat distinctio quae dolore.</p>
              <div className='flex'>
              <FontAwesomeIcon className='h-6 w-6 mt-9' icon={faCoffee} />
             

              <FaceSmileIcon className="h-6 w-6 mt-9 ml-4 text-blue-500" />
              <FilmIcon className="h-6 w-6 mt-9 ml-4  text-blue-500" />
              <BeakerIcon className="h-6 w-6 mt-9 ml-4 text-blue-500" />
              </div>
            </div>





            <div className='flex justify-evenly'>
                 <div>
                    <h2 className='text-xl font-bol mb-4'>Company</h2>
                  <div className='text-sm'>
                  <p>About us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                  </div>
                 </div>
                 <div>
                    <h2  className='text-xl font-bol mb-4'>Product</h2>
                   <div className='text-sm'>
                   <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                   </div>
                 </div>
                 <div>
                    <h2  className='text-xl font-bol mb-4'>Support</h2>
                  <div className='text-sm'>
                  <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                  </div>
                 </div>
                 <div>
                    <h2  className='text-xl font-bol mb-4'>Contact</h2>
                    <div className='text-sm'>
                    <p>223 Brodway, NYC</p>
                    <p>+17777-986-5570</p>
                    </div>
                 </div>
            </div>
            
            </div> 
        </>
    );
};

export default Footer;