import React, { useState } from 'react';
import { Country, State } from 'country-state-city';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const Shipping = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  // const [city, setCity] = useState('');

  const formHandle = (event) => {
    event.preventDefault();
  };

  const countryHandler = (e) => {
    setCountry(e.target.value);
    console.log('== e.target.value', e.target.value);
  };

  const stateHandler = (e) => {
    setState(e.target.value);
    console.log('== e.target.value', e.target.value);
  };

  // const cityHandler = (e) => {
  //   setCity(e.target.value);
  //   console.log('== e.target.value', e.target.value);
  // };

  return (
    <section className='shipping'>
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={formHandle}>
          {/* --- HOUSE --- */}
          <div>
            <label>H.No.</label>
            <input
              type='text'
              placeholder='Enter House No.'
            />
          </div>

          {/* --- COUNTRY --- */}
          <div>
            <label>Country</label>
            <select onChange={countryHandler}>
              <option value=''>Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option
                    value={i.isoCode}
                    key={i.isoCode}
                  >
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          {/* --- STATE --- */}
          <div>
            <label>State</label>
            <select onChange={stateHandler}>
              <option value=''>State</option>
              {State &&
                State.getStatesOfCountry(country).map((i) => (
                  <option
                    value={i.isoCode}
                    key={i.isoCode}
                  >
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          {/* --- CITY --- */}
          <div>
            <label>City</label>
            <input
              type='text'
              placeholder='Enter City'
            />
          </div>

          {/* --- PHONE --- */}
          <div>
            <label>Phone No.</label>
            <input
              type='number'
              placeholder='Enter Phone No.'
            />
          </div>

          <Popup
            trigger={
              <Link
                className='link'
                // to='/myorders'
              >
                Confirm Order
              </Link>
            }
          >
            <div
              style={{
                color: 'red',
                transform: 'translate(0%,-500%)',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Order Successfully Placed!
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
