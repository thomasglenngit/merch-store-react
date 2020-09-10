import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Product(props) {
  return (
    <Card onClick={()=>props.onProductClick(props.id)}>
      <Card.Header as='h5'>{props.name}</Card.Header>
      <Card.Body>
        <Card.Text>${props.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}


Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  onProductClick: PropTypes.func
}

export default Product;