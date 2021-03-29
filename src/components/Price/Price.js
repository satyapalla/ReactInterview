import React, { useEffect, useState } from 'react';

import './Price.scss'

import { slowTransformation } from '../../helpers';
import { slowApi } from '../../api';

export const Price = ({ product, showSpecialPrice = false }) => {
  const [specialPrice, setSpecialPrice] = useState(product?.price);

  const wasPrice = slowTransformation(product?.price);
  const nowPrice = showSpecialPrice ? slowTransformation(specialPrice) : slowTransformation(product?.price);
  
  useEffect(() => {
    if (product) {
      async function fetchSpecialPrice() {
        // TODO: get data from slowApi (argument product.price)
        
        // setSpecialPrice(data);
        let data = await slowApi(product.price)
         setSpecialPrice(data);
      }
      
      fetchSpecialPrice();
    }
  }, [product]);

  const hasDiscount = specialPrice !== product.price;

  return (
    <article className="product-price">
      <section className="price-wrapper">
        <span className="price">
          <span className="price--superscript">$</span>
          <span>{nowPrice.dollars}</span>
          <span className="price--superscript">{nowPrice.cents}</span>
        </span>
        {(showSpecialPrice && hasDiscount) && <>&nbsp;<span className="price--strikethrough">{'$' +wasPrice.dollars + '.' + wasPrice.cents}</span></>}
      </section>
    </article>
  );
};