export default (state = {}, action) => {
  const { name, description, price, id } = action;
  switch (action.type) {
  case 'ADD_PRODUCT':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        description: description,
        price: price,
        id: id
      }
    });
  case 'DELETE_PRODUCT':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};