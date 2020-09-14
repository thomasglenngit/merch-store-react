import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ProductDetails from './ProductDetails';
import { connect } from 'react-redux';
import reducer from './reducers/product-list-reducer';
import PropTypes from 'prop-types';

class DisplayWindow extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { 
      currentPage: 'index',
      currentProduct: null
    };
  }

  handleLinks = (pageName) => {
    this.setState({
      currentPage: pageName
    });
  }

  handleAddingNewProduct = (newProduct) => {
    const { dispatch } = this.props;
    const { name, description, price, id } = newProduct;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      description: description,
      price: price,
      id: id
    }
    dispatch(action);
    this.setState({
      currentPage: 'index',
    });
  }

  handleClickingEdit = (id) => {
    const productToEdit = this.state.masterList.filter(products => products.id === id)[0];
    this.setState({
      currentPage: 'edit',
      currentProduct: productToEdit
    });
  }

  handleEditProduct = (editedProduct) => {
    const { dispatch } = this.props;
    const { name, description, price, id } = editedProduct;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      description: description,
      price: price,
      id: id,
    }
    dispatch(action);
    this.setState({
      currentPage: 'details',
      currentProduct: editedProduct
    }); 
  }

  handleDeleteProduct = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_PRODUCT',
      id: id
    }
    dispatch(action);
    this.setState({
      currentPage: 'index',
      currentProduct: null
    });
  }

  handleViewingDetails = (id) => {
    const productToView = this.state.masterList.filter(products => products.id === id)[0];
    this.setState({
      currentPage: 'details',
      currentProduct: productToView
    });
  }

  render() {
    let pageToDisplay = null;
    if (this.state.currentPage === 'index') {
      pageToDisplay = <ProductList
        productList = {this.state.masterList} 
        onLinkClick = {this.handleLinks}
        onProductClick = {this.handleViewingDetails} />
    } else if (this.state.currentPage === 'create') {
      pageToDisplay = <AddProduct 
        onLinkClick = {this.handleLinks}
        onAddingProduct = {this.handleAddingNewProduct} />
    } else if (this.state.currentPage === 'details') {
      pageToDisplay = <ProductDetails
        product = {this.state.currentProduct}
        onLinkClick = {this.handleLinks} 
        onDeleteClick ={this.handleDeleteProduct}
        onEditClick = {this.handleClickingEdit} />
    } else if (this.state.currentPage === 'edit') {
      pageToDisplay = <EditProduct
        product = {this.state.currentProduct}
        onLinkClick = {this.handleLinks}
        onEditProduct = {this.handleEditProduct}/>
    } else if (this.state.currentPage === 'edit') {
      pageToDisplay = <EditProduct
        product = {this.state.currentProduct}
        onLinkClick = {this.handleLinks}
        onEditProduct = {this.handleEditProduct}/>
    }
    return (
      <React.Fragment>
        {pageToDisplay}
      </React.Fragment>
    )
  }
}

DisplayWindow = connect(mapStateToProps)(DisplayWindow); //higher order component - wraps an existing func. with additional functionality, then returns it so it can be used elsewhere in the application.

export default DisplayWindow;