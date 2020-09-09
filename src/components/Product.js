import React from 'react';
import PropTypes from 'prop-types';
// import { Card } from 'react-bootstrap';

function Product(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{props.name}</h3>
      </div>
      <div className="card-body">
        <p>{props.price}</p>
      </div>
    </div>
  )
}


Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string
}

export default Product;