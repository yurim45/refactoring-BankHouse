import { createStore } from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    return {
      orderBy: {},
    };
  }
  switch (action.type) {
    case 'SELECT':
      return {
        ...state,
        [action.menu2]: action.element,
      };
    case 'DELETE':
      return {
        ...state,
        [action.menu2]: action.element,
      };
    case 'CLEAR':
      return {};
    default:
      return state;
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
