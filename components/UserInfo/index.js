import React from 'react';
import propTypes from 'prop-types';

export default function UserInfo(props) {
  return (
    <div className={props.className}>
      <h3 className={props.classTitle}>{props.title}</h3>
      <div className={props.classJobs}>{props.jobs}</div>
      <h5 className={props.classDesc}>{props.desc}</h5>

      {props.children}
    </div>
  );
}

UserInfo.propTypes = {
  className: propTypes.string,
  classTitle: propTypes.string,
  title: propTypes.string,
  classJobs: propTypes.string,
  jobs: propTypes.oneOfType([propTypes.string, propTypes.object]),
  classDesc: propTypes.string,
  desc: propTypes.string,
};
