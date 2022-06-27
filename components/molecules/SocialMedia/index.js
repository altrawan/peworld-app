import React from 'react';
import { Image } from 'components';
import {
  IconMail,
  IconInstagram,
  IconGithub,
  IconGitlab,
  IconPhone,
  IconLinkedin,
} from 'assets';

export default function index(props) {
  if (props.worker) {
    return (
      <div className="mt-5">
        <div className="sosmed__vector">
          <Image src={IconMail} width={25} height={25} />
          <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
            {props.email}
          </a>
        </div>
        <div className="sosmed__vector">
          <Image src={IconInstagram} width={25} height={25} />
          <a href={`${props.instagram}`} target="_blank" rel="noreferrer">
            {props.instagram}
          </a>
        </div>
        <div className="sosmed__vector">
          <Image src={IconPhone} width={25} height={25} />
          <a href={`tel:${props.phone}`} target="_blank" rel="noreferrer">
            {props.phone}
          </a>
        </div>
        <div className="sosmed__vector">
          <Image src={IconLinkedin} width={25} height={25} />
          <a href={props.linkedin} target="_blank" rel="noreferrer">
            {props.linkedin}
          </a>
        </div>
        <div className="sosmed__vector">
          <Image src={IconGithub} width={25} height={25} />
          <a href={props.github} target="_blank" rel="noreferrer">
            {props.github}
          </a>
        </div>
        <div className="sosmed__vector">
          <Image src={IconGitlab} width={25} height={25} />
          <a href={props.github} target="_blank" rel="noreferrer">
            {props.gitlab}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div className="sosmed__vector">
        <Image src={IconMail} width={25} height={25} />
        <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
          {props.email}
        </a>
      </div>
      <div className="sosmed__vector">
        <Image src={IconInstagram} width={25} height={25} />
        <a href={props.instagram} target="_blank" rel="noreferrer">
          {props.instagram}
        </a>
      </div>
      <div className="sosmed__vector">
        <Image src={IconPhone} width={25} height={25} />
        <a href={`tel:${props.phone}`} target="_blank" rel="noreferrer">
          {props.phone}
        </a>
      </div>
      <div className="sosmed__vector">
        <Image src={IconLinkedin} width={25} height={25} />
        <a href={props.linkedin} target="_blank" rel="noreferrer">
          {props.linkedin}
        </a>
      </div>
    </div>
  );
}
