import React from 'react';
import Link from 'next/link';
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
    if (props.isDisabled) className.push('disabled');
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

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? 'noopener noreferrer' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link
        href={props.href}
        className={className.join(' ')}
        style={props.style}
        onClick={onClick}
      >
        {props.children}
      </Link>
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
  type: propTypes.oneOf(['button', 'link', 'submit']),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isLight: propTypes.bool,
  isDisabled: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
};
