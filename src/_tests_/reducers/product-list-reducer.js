import productListReducer from '../../reducers/product-list-reducer';

describe('ticketListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  });
});