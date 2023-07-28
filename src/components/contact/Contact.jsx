import React from 'react';
import { motion } from 'framer-motion';
import burger from '../../assets/burger2.png';
import Popup from 'reactjs-popup';

const Contact = () => {
  return (
    <section className='contact'>
      <form>
        <h2>Contact Us</h2>
        <input
          type='text'
          placeholder='Name'
        />
        <input
          type='email'
          placeholder='Email'
        />

        <textarea
          placeholder='Message...'
          cols='30'
          rows='10'
        ></textarea>

        <Popup trigger={<button type='button'>Send</button>}>
          <div
            style={{
              color: 'red',
              transform: 'translate(25%,-700%)',
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            Thank you for cotacting us! We will get back to you shortly.
          </div>
        </Popup>
      </form>
    </section>
  );
};

export default Contact;
