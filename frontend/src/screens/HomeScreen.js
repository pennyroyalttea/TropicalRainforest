import React from 'react'
import Product from '../components/Product'; 
import data from '../data';
export default function HomeScreen() {
    return (
        <div>
          <div className="row center">
            {data.products.map((one_product) => (
              <Product key={one_product.id} product={one_product}></Product>
            ))}
          </div>
        </div>
    );
    
}
