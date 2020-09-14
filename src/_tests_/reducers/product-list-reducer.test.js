import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {
  
  const currentState = {
    1: { name: 'Air Ryan',
    description: 'Shoes',
    price: '$50.00',
    id: 1 },
    2: { name: 'TV', 
    description: 'Flat Screen',
    price: '$500.00',
    id: 2 }
  }

  let action;
  const productData = {
    name: 'Air Ryan',
    description: 'Shoes',
    price: '$50.00',
    id: 1
  };
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new product data to masterList', () => {
    const { name, description, price, id } = productData;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      description: description,
      price: price,
      id: id
    };

    expect(productListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        description: description,
        price: price,
        id: id
      }
    });
  });

  test('Should successfully delete a product', () => {
    action = {
      type: 'DELETE_PRODUCT',
      id: 1,
    };
    expect(productListReducer(currentState, action)).toEqual({
      2: {name: 'TV',
      description: 'Flat Screen',
      price: '$500.00',
      id: 2 }
    });
  });
});