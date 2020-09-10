import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

function ProductList(props) {
  const { productList, onLinkClick, onProductClick } = props;
  return (
    <React.Fragment>
      <CardColumns>
        {productList.map((products) => 
          <Product
            onProductClick={onProductClick}
            name={products.name}
            price={products.price}
            id={products.id}
            key={products.id} />
        )}
      </CardColumns>
      <Button variant='primary' type='button' size='lg' block onClick={()=>onLinkClick('create')}>Add Product</Button>
    </React.Fragment>
  )
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onLinkClick: PropTypes.func,
  onProductClick: PropTypes.func
}

export default ProductList;