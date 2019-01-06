import actionTypes from 'src/pages/Home/constant';

export const getUserName = (name) => {
  return {
    type: actionTypes.GET_USERNAME,
    payload: name,
  }
}