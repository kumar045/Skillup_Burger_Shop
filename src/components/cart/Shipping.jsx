import React, { useState } from "react";
import { Country, State } from "country-state-city";
import Popup from "reactjs-popup";

const Shipping = () => {
  // Initialzing the Country and State Variables
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const countries = Country.getAllCountries();

  // This function sets the country variable
  const handleCountryChange = (e) => {
    const selectedCountryCode = e.target.value;
    setSelectedCountry(selectedCountryCode);
    const countryStates = State.getStatesOfCountry(selectedCountryCode);
    setStates(countryStates);
    setSelectedState("");
  };

  // This function sets the state variable
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select value={selectedState} onChange={handleStateChange}>
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone No." />
          </div>
          <Popup
            trigger={
              <button type="button" className="link">
                <a href="/myorders">Confirm Order</a>
              </button>
            }
            position="right center"
          >
            <div
              style={{
                color: "red",
                position: "absolute",
                top: "50%",
                right: "100%",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
