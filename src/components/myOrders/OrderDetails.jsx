import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>SHIPPING</h1>
          <p>
            <b>Address</b>
            {"abcdefghij"}
          </p>
        </div>
        <div>
          <h1>CONTACT</h1>
          <p>
            <b>Name</b>
            {"sangeetha"}
          </p>
          <p>
            <b>PHONE</b>
            {1234567890}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b> {"Processing"}
          </p>
          <p>
            <b>Placed At</b> {"23-02-2002"}
          </p>
          <p>
            <b>Delivered At</b> {"23-02-2003"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b> {"COD"}
          </p>
          <p>
            <b>Payment Reference</b> {"asdfghjkl"}
          </p>
          <p>
            <b>Paid At</b> {"23-02-2003"}
          </p>
        </div>
        <div>
          <h1>amount</h1>
          <p>
            <b>Items Total</b> {"₹2132"}
          </p>
          <p>
            <b>Shipping Charges</b> {"₹200"}
          </p>
          <p>
            <b>Tax</b> {"₹232"}
          </p>
          <p>
            <b>Total Amount</b> {"₹2562"}
          </p>
        </div>

        <article>
          <h1>ORDERED ITEMS</h1>
          <div>
            <h4>Cheeseburger</h4>
            <div>
              <p>12 x 232</p>
            </div>
          </div>
          <div>
            <h4>veg Cheese Burger</h4>
            <div>
              <p>10 x 500</p>
            </div>
          </div>
          <div>
            <h4>Cheese Burger With French Fries</h4>
            <div>
              <p>10 x 1800</p>
            </div>
          </div>
          <div>
            <h4 className="style">Sub Total</h4>
            <div>
              <p className="style">₹2132</p>
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
