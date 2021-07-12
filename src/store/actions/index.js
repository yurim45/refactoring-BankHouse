// 일으켜야 하는 액션에 대한 함수 정의

const SELECT = 'category/SELECT';
const UPDATE = 'category/UPDATE';
const DELETE = 'category/DELETE';

export const selectedCategory = category => {
  return {
    type: SELECT,
    category,
  };
};

export const updateSelectCategory = category => {
  return {
    type: UPDATE,
    category,
  };
};

export const deleteSelectCategory = category => {
  return {
    type: DELETE,
    category,
  };
};
