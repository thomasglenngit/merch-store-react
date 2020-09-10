import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Product(props) {
  const { name, price, id, onProductClick } = props;
  return (
    <Card onClick={()=>onProductClick(id)}>
      <Card.Header as='h5'>{name}</Card.Header>
      <Card.Body>
        <Card.Text>${price}</Card.Text>
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