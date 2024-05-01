import Order from './Order';

function OrderSummary() {
  return (
    <div className="order-summary">
      <div className="order-summary__image">
        <img src="images/illustration-hero.svg" alt="" />
      </div>
      <div className="order-summary-details">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <Order plan="Annual" price="59.99" />
        <a href="">Proceed to Payment</a>
        <button>Cancel Order</button>
      </div>
    </div>
  );
}

export default OrderSummary;
