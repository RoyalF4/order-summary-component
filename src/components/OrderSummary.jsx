import Order from './Order';

function OrderSummary() {
  return (
    <div className="order-summary">
      <div className="order-summary__img-section">
        <img
          className="order-summary__img"
          src="images/illustration-hero.svg"
          alt=""
        />
      </div>
      <div className="order-summary__info">
        <h1 className="order-summary__heading">Order Summary</h1>
        <p className="order-summary__description">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <Order plan="Annual" price="59.99" />
        <a className="order-summary__btn-proceed" href="">
          Proceed to Payment
        </a>
        <button className="order-summary__btn-cancel">Cancel Order</button>
      </div>
    </div>
  );
}

export default OrderSummary;
