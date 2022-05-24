import React from 'react';
import propTypes from 'prop-types';

export default function Card(props) {
  return <div className={props.className}>{props.children}</div>;
}

Card.propTypes = {
  className: propTypes.string,
};
