import React from 'react';
import PropTypes from 'prop-types';
import ProductForm from './ProductForm';


function EditProduct(props) {
  const { product, onLinkClick, onEditProduct } = props;

  function handleEditProduct(event) {
    onEditProduct({
      name: event.target.name.value, 
      price: event.target.price.value, 
      description: event.target.description.value,
      id: product.id
    });
  }


  return (
    <ProductForm
      onLinkClick={onLinkClick}
      onSubmittingForm={handleEditProduct}
      buttonText="Update Product"
      defaultName={product.name}
      defaultPrice={product.price}
      defaultDescription={product.description} />
  )
}

EditProduct.propTypes = {
  product: PropTypes.object,
  onLinkClick: PropTypes.func,
  onEditProduct: PropTypes.func
}

export default EditProduct;