import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function ProductForm(props) {
  const { onLinkClick, onSubmittingForm } = props;

  function handleSubmittingForm(event) {
    event.preventDefault();
    onSubmittingForm(event);
  }

  return(
    <React.Fragment>
      <Form onSubmit={handleSubmittingForm}>
        <Form.Group controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type='text' placeholder='Product Name' required />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type='text' placeholder='0.00' pattern='^\d+\.\d{2}$' required />
          </InputGroup>
          <Form.Text className='text-muted'>Format as a decimal (e.g. 49.99 or 150.00)</Form.Text>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows='5' />
        </Form.Group>
        <Button variant='success' type="submit" size='lg' block>Add Product</Button>
      </Form>
      <Button variant='secondary' type='button' size='lg' block onClick={()=>onLinkClick("index")}>Back To Index</Button>
    </React.Fragment>
  )
}

ProductForm.propTypes = {
  onLinkClick: PropTypes.func,
  onSubmittingForm: PropTypes.func
}

export default ProductForm;