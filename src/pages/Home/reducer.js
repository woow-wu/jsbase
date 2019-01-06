import actionType from 'src/pages/Home/constant';

const initialState = {
  name: 'wang',
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_USERNAME:
      return {
        ...state,
        name: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default homeReducer;