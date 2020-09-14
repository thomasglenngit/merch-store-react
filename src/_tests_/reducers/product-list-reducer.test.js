import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {
  
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
      type: 'ADD_TICKET',
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
});