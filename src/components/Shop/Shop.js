import React from "react";
import "./Shop.css";


const Shop = (props) => {

  const { img, name, key, seller, category, price, stock } = props.products;
  return (
    <div className="single-product-container" key={key}>
      <div className="img-container">
        <img src={img} alt="product-img-loading" />
      </div>
      <div className="img-discription-container">
        <h3 className="name">{name}</h3>
        <p>
          <small>By: {seller}</small>
        </p>
        <h3 className="price">Price: ${price}</h3>
        <p>
          <small>Only- {stock} left in stock - order soon</small>
        </p>
        <button className="product-button" onClick={() => props.onHendelChange(props.products)}>add to cut
          {/* <FontAwesomeIcon className="button-shopping-cut" icon={faCartPlus} />  */}
        </button>
      </div>
    </div>
  );
};

export default Shop;
