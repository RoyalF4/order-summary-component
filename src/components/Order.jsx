const frequency = { Annual: 'year', Monthly: 'monthly', Weekly: 'weekly' };

function Order({ plan, price }) {
  return (
    <div className="order">
      <img className="order__image" src="images/icon-music.svg" alt="" />
      <div className="order__details">
        <p className="details__plan">{plan} Plan</p>
        <p className="details__price">{`$${price}/${frequency[plan]}`}</p>
      </div>
      <a className="order__change" href="">
        Change
      </a>
    </div>
  );
}

export default Order;
