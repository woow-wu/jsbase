import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import HomeReducer from 'src/pages/Home/reducer';

const allReducers = {
  home: HomeReducer,
};
const store = createStore(
  combineReducers({ ...allReducers }),
  composeWithDevTools(
    applyMiddleware(),
  )
);

export default store;