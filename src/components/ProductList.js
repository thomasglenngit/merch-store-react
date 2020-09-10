import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

function ProductList(props) {
  return (
    <React.Fragment>
      <CardColumns>
        {props.productList.map((products) => 
          <Product
            name={products.name}
            price={products.price}
            key={products.id} />
        )}
      </CardColumns>
      <Button variant='primary' type='button' size='lg' block onClick={()=>props.onLinkClick('create')}>Add Product</Button>
    </React.Fragment>
  )
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onLinkClink: PropTypes.func
}

export default ProductList;