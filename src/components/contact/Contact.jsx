import React, { useState } from 'react';
import Popup from 'reactjs-popup';

function PopupWithSendButton() {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleClick = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>Send</button>

      {popupOpen && (
        <Popup
          trigger={<button type="button">Close</button>}
          closeOnEscape={true}
          closeOnOverlayClick={true}
        >
          <h2>Your Message</h2>
          <p>This is the content of your popup message.</p>
        </Popup>
      )}
    </>
  );
}

export default PopupWithSendButton;
