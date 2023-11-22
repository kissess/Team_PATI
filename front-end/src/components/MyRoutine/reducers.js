// reducers.js
const initialState = {
    myRoutine: [], // 초기 state에 맞게 수정
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_ROUTINE_ORDER':
        return {
          ...state,
          myRoutine: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  