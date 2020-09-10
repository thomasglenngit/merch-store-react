import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function ProductDetails(props) {
  const { product, onLinkClick, onDeleteClick } = props;
  
  return (
    <React.Fragment>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Button variant='secondary' type='button' size='lg' block onClick={()=>onLinkClick('index')}>Back To Index</Button>
      <Button variant='danger' type='button' size='lg' block onClick={()=>onDeleteClick(product.id)}>Delete</Button>
    </React.Fragment>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object,
  onLinkClick: PropTypes.func,
  onDeleteClick: PropTypes.func
}

export default ProductDetails;