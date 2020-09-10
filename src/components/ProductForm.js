import React from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function ProductForm(props) {
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
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type='text' placeholder='Product Name' />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type='text' placeholder='Price' pattern='^\d+\.\d{2}$'/>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows='5' />
        </Form.Group>
        <Button variant='success' type="submit" size='lg' block>Add Product</Button>
      </Form>
      <Button variant='secondary' type='button' size='lg' block onClick={()=>props.onLinkClick("index")}>Back To Index</Button>
    </React.Fragment>
  )
}

ProductForm.propTypes = {
  onLinkClick: PropTypes.func,
  onProductFormSubmit: PropTypes.func
}

export default ProductForm;