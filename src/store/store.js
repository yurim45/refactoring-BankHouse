import { createStore } from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    return {
      orderBy: { categoryId: 'recent', categoryName: '최신순' },
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

  // if (action.type === 'SELECT') {
  //   // console.log(state, action);
  //   return {
  //     ...state,
  //     [action.menu2]: action.element,
  //   };
  // }
  // return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
