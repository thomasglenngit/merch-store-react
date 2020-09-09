import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

function ProductList(props) {
  function handleAddProduct() {
    props.onLinkClick('create');
  }

  return (
    <React.Fragment>
      <div className="card-columns">
        {props.productList.map((products) => 
          <Product
            name={products.name}
            price={products.price}
            key={products.id} />
        )}
      </div>
      <button className="btn btn-primary" type='button' onClick={handleAddProduct}>Add Product</button>
    </React.Fragment>
  )
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onLinkClink: PropTypes.func
}

export default ProductList;