import React from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid';
import ProductForm from './ProductForm';

function AddProduct(props) {
  function handleAddingNewProduct(event) {
    props.onAddingProduct({
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      id: v1()
    })
  }

  return (
    <ProductForm
      onLinkClick={props.onLinkClick}
      onSubmittingForm={handleAddingNewProduct}
      buttonText="Add Product" />
  )
}

AddProduct.propTypes = {
  onLinkClick: PropTypes.func,
  onAddingProduct: PropTypes.func
}

export default AddProduct;