import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
  const className = [props.className];

  if (props.isPrimary) className.push('btn-primary');
  if (props.isLight) className.push('btn-light');
  if (props.isLarge) className.push('btn-lg');
  if (props.isSmall) className.push('btn-sm');
  if (props.isBlock) className.push('btn-block');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    className.push('disabled');
    return (
      <span className={className.join(' ')} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" />
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isLight: propTypes.bool,
  isDisabled: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
};
