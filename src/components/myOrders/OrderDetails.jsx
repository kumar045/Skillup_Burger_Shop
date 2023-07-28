import React from 'react';

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
      <main>
        <h1>Order Details</h1>
        <div>
          <h2>Shipping</h2>
          <p>
            <b>Address</b>
            {'sjda 12-32ss dsad'}
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <p>
            <b>Name</b>
            {'Stuart'}
          </p>
          <p>
            <b>Phone</b>
            {2131232123}
          </p>
        </div>

        <div>
          <h2>Status</h2>
          <p>
            <b>Order Status</b>
            {'Processing'}
          </p>
          <p>
            <b>Placed At</b>
            {'23-02-2002'}
          </p>
          <p>
            <b>Delivered At</b>
            {'23-02-2003'}
          </p>
        </div>

        <div>
          <h2>Payment</h2>
          <p>
            <b>Payment Method</b>
            {'COD'}
          </p>
          <p>
            <b>Payment Reference</b>#{'asdasdsadsad'}
          </p>
          <p>
            <b>Paid At</b>
            {'23-02-2003'}
          </p>
        </div>

        <div>
          <h2>Amount</h2>
          <p>
            <b>Items Total</b>
            {2132} SEK
          </p>
          <p>
            <b>Shipping Charges</b>
            {200} SEK
          </p>
          <p>
            <b>Tax</b>
            {232} SEK
          </p>
          <p>
            <b>Total Amount</b>
            {232 + 200 + 2132} SEK
          </p>
        </div>

        <article>
          <h2>Ordered Items</h2>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              {2132} SEK
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
