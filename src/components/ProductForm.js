import React from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';


function ProductForm(props) {
  function handleIndexLink() {
    props.onLinkClick('index');
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    props.onProductFormSubmit({
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      id: v1()
    });
  }

  return(
    <React.Fragment>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="form-control" />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            placeholder="Price of Product"
            className="form-control" />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Describe your product"
            className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">Add Product</button>
      </form>
      <button className='btn btn-secondary' type='button' onClick={handleIndexLink}>Back To Index</button>
    </React.Fragment>
  )
}

ProductForm.propTypes = {
  onLinkClick: PropTypes.func,
  onProductFormSubmit: PropTypes.func
}

export default ProductForm;