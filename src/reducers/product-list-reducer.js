export default (state = {}, action) => {
  const { name, description, price, id } = action;
  switch (action.type) {
  case 'ADD_TICKET':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        description: description,
        price: price,
        id: id
      }
    });
    default:
      return state;
  }
};