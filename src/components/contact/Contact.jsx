import React, { useState } from "react";
import "../../styles/contact.scss";
import burgersImage from "../../assets/burger2.png";

const Contact = () => {
  // Initialzing the Popup Variable
  const [showPopup, setShowPopup] = useState(false);

  // This function sets whether to show the popup or not
  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="contact">
      <form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Message" rows="8" cols="50"></textarea>
        <button type="button" onClick={handleButtonClick}>
          Send
        </button>
        {showPopup && (
          <div className="popup">
            <div
              style={{
                color: "red",
                transform: "translate(0%,-500%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Thank you for contacting us! We will get back to you shortly.
            </div>
            <button onClick={() => setShowPopup(false)}></button>
          </div>
        )}
      </form>
      <div className="formBorder">
        <div>
          <img src={burgersImage} alt="Form Border Image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
