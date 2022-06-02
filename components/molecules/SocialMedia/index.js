import React from 'react';
import Image from 'next/image';

export default function index(props) {
  if (props.worker) {
    return (
      <div className="mt-5">
        <div className="sosmed__vector">
          <Image src="/icons/icon-mail.svg" width={25} height={25} />
          <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
            {props.email}
          </a>
        </div>
        <div className="sosmed__vector">
          <Image src="/icons/icon-instagram.svg" width={25} height={25} />
          <a
            href={`https://www.instagram.com/${props.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            {props.instagram}
          </a>
        </div>
        <div className="sosmed__vector">
          <Image src="/icons/icon-github.svg" width={25} height={25} />
          <a
            href={`https://github.com/${props.github}`}
            target="_blank"
            rel="noreferrer"
          >
            {props.github}
          </a>
        </div>
        <div className="sosmed__vector">
          <Image src="/icons/icon-gitlab.svg" width={25} height={25} />
          <a
            href={`https://gitlab.com/${props.github}`}
            target="_blank"
            rel="noreferrer"
          >
            {props.gitlab}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div className="sosmed__vector">
        <Image src="/icons/icon-mail.svg" width={25} height={25} />
        <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
          {props.email}
        </a>
      </div>
      <div className="sosmed__vector">
        <Image src="/icons/icon-instagram.svg" width={25} height={25} />
        <a
          href={`https://www.instagram.com/${props.instagram}`}
          target="_blank"
          rel="noreferrer"
        >
          {props.instagram}
        </a>
      </div>
      <div className="sosmed__vector">
        <Image src="/icons/icon-phone.svg" width={25} height={25} />
        <a href={`tel:${props.phone}`} target="_blank" rel="noreferrer">
          {props.phone}
        </a>
      </div>
      <div className="sosmed__vector">
        <Image src="/icons/icon-linkedin.svg" width={25} height={25} />
        <a
          href={`https://linkedin.in/${props.linkedin}`}
          target="_blank"
          rel="noreferrer"
        >
          {props.linkedin}
        </a>
      </div>
    </div>
  );
}
