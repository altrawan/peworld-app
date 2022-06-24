import React from 'react';
import Image from 'next/image';

export default function index(props) {
  const [imgSrc, setImgSrc] = React.useState(props.src);
  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => {
        setImgSrc(props.fallbackSrc);
      }}
    />
  );
}
