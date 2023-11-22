import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from 'actions';

const MyRoutine = () => {
  const dispatch = useDispatch();
  const myRoutine = useSelector((state) => state.myRoutine);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div>
      <h2>My Routine</h2>
      <ul>
        {myRoutine.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.des}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleDecrement(item.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyRoutine;