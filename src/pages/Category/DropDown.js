import React, { useEffect } from 'react';
import DropBtn from './DropBtn';
import store from '../../store/store';

function DropDown({ category, selectedArr }) {
  useEffect(() => {
    console.log(store.getState(), category);
  }, []);

  return (
    <React.Fragment>
      {category.length &&
        category.map(el => {
          return <DropBtn key={el.id} el={el} selectedArr={selectedArr} />;
        })}
    </React.Fragment>
  );
}

export default DropDown;
