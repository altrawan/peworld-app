import React from 'react';

const index = (props) => {
  return (
    <div className={['purple__background', props.className].join(' ')}>
      {props.children}
    </div>
  );
};

export default index;
