import React from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class DisplayWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      masterList: [],
      currentPage: 'index',
      currentProductId: null
    };
  }

  handleLinks = (pageName) => {
    this.setState({
      currentPage: pageName,
      currentProductId: null 
    });
  }

  handleIDLinks = (pageName, id) => {
    this.setState({
      currentPage: pageName,
      currentProductId: id
    });
  }

  handleAddingNewProduct = (newProduct) => {
    const newMasterList = this.state.masterList.concat(newProduct);
    this.setState({
      masterList: newMasterList,
      currentPage: 'index',
      currentProductId: null
    });
  }

  render() {
    let pageToDisplay = null;
    if (this.state.currentPage === 'index') {
      pageToDisplay = <ProductList
        productList = {this.state.masterList} 
        onLinkClick = {this.handleLinks} />
    } else if (this.state.currentPage === 'create') {
      pageToDisplay = <ProductForm 
        onLinkClick = {this.handleLinks}
        onProductFormSubmit = {this.handleAddingNewProduct} />
    }
    return (
      <React.Fragment>
        {pageToDisplay}
      </React.Fragment>
    )
  }
}

export default DisplayWindow;