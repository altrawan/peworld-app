import React from 'react';
import propTypes from 'prop-types';
import Image from 'next/image';

const index = (props) => {
  return (
    <figure className={props.className}>
      <Image
        src={props.srcImage}
        alt={props.altImage}
        className={props.imageClass}
        width={props.imageWidth}
        height={props.imageHeight}
        onError={props.onErrorImage}
      />
    </figure>
  );
};

export default index;

index.propTypes = {
  className: propTypes.string,
  srcImage: propTypes.string,
  altImage: propTypes.string,
  imageClass: propTypes.string,
  imageWidth: propTypes.number,
  imageHeight: propTypes.number,
};
