import React, { useState } from 'react';
import fakeData from '../../eCommerce-simple-resources-master/fakeData';
import Shop from '../Shop/Shop';
import "./Main.css"
const Main = () => {
    const [products, setProducts] = useState(fakeData.slice(0, 50));
    const [cut, setCut] = useState([]);
  
    const onHendelChange = (product) => {
      const newCut = [...cut, product];
      setCut(newCut);
    };
    console.log(cut);
    return (
        <div className="main-container">        
        <div className="main-body">
          <div className="body-product">
            {products.map((product) => (
              <Shop onHendelChange={onHendelChange} products={product}></Shop>
            ))}
          </div>
          <div className="order-summary">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    );
};

export default Main;