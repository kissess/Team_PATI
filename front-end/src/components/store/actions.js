export const addToMyRoutine = (exercise) => ({
  type: 'ADD_TO_MY_ROUTINE',
  payload: exercise,
});

export const incrementQuantity = (id) => ({
  type: 'INCREMENT_QUANTITY',
  payload: id,
});

export const decrementQuantity = (id) => ({
  type: 'DECREMENT_QUANTITY',
  payload: id,
});

export const removeFromMyRoutine = (exercise) => ({
  type: 'REMOVE_FROM_MY_ROUTINE',
  payload: {id : exercise},
});