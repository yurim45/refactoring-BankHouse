import React, { useEffect } from 'react';
import DropBtn from './DropBtn';

function DropDown({ category, selectedArr }) {
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
