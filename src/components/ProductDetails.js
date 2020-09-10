import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function ProductDetails(props) {
  const { product } = props;
  return (
    <React.Fragment>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Button variant='secondary' type='button' size='lg' block onClick={()=>props.onLinkClick('index')}>Back To Index</Button>
    </React.Fragment>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object,
  onLinkClick: PropTypes.func
}

export default ProductDetails;