import React from 'react';

import PropTypes from 'prop-types';


function ProductList(props) {
  return (
    <ul>
      {
        props.products.map(product => (
          <li key={product.id}>
            {product.name}
          </li>
        ))
      }
    </ul>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
