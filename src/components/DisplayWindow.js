import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ProductDetails from './ProductDetails';
import { connect } from 'react-redux';

class DisplayWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      masterList: [],
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
    const newMasterList = this.state.masterList.concat(newProduct);
    this.setState({
      masterList: newMasterList,
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
    const newMasterList = this.state.masterList.map(products => {
      if (editedProduct.id === products.id) {
        return editedProduct;
      } else {
        return products;
      }
    });
    this.setState({
      masterList: newMasterList,
      currentPage: 'details',
      currentProduct: editedProduct
    }); 
  }

  handleDeleteProduct = (id) => {
    const newMasterList = this.state.masterList.filter(products => products.id !== id);
    this.setState({
      masterList: newMasterList,
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

DisplayWindow = connect()(DisplayWindow); //higher order component - wraps an existing func. with additional functionality, then returns it so it can be used elsewhere in the application.

export default DisplayWindow;