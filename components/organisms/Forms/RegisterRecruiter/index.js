import React from 'react';
// import propTypes from 'prop-types';
import styles from 'styles/components/Form.module.css';
import { FormInput, Button } from 'components';

export default function index(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className={`form-group position-relative ${styles.form_input}`}>
        <label htmlFor="name">Name</label>
        <FormInput
          placeholder="Enter name"
          name="name"
          type="text"
          value={props.valueName}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form_input}`}>
        <label htmlFor="email">Email</label>
        <FormInput
          placeholder="Enter email address"
          name="email"
          type="email"
          value={props.valueEmail}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form_input}`}>
        <label htmlFor="company">Company</label>
        <FormInput
          placeholder="Enter company name"
          name="company"
          type="text"
          value={props.valueCompany}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form_input}`}>
        <label htmlFor="position">Position</label>
        <FormInput
          placeholder="Position in your company"
          name="position"
          type="text"
          value={props.valuePosition}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form_input}`}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <FormInput
          placeholder="Enter phone number"
          name="phoneNumber"
          type="text"
          value={props.valuePhoneNumber}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form_input}`}>
        <label htmlFor="password">Password</label>
        <FormInput
          placeholder="Enter password"
          name="password"
          type="password"
          value={props.valuePassword}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form_input}`}>
        <label htmlFor="passwordConfirmation">Confirmation Password</label>
        <FormInput
          placeholder="Enter confirmation password"
          name="passwordConfirmation"
          type="password"
          value={props.valuePasswordConfirmation}
          onChange={props.onChange}
        />
      </div>

      <Button
        className={`btn ${props.classBtn} w-100`}
        isLoading={props.isLoading}
      >
        Sign Up
      </Button>
    </form>
  );
}

// FormInput.propTypes = {
//   onChange: propTypes.func,
//   valueName: propTypes.string,
//   valueCompany: propTypes.string,
//   valuePosition: propTypes.string,
//   valuePhoneNumber: propTypes.number,
//   valuePassword: propTypes.string,
//   valuePasswordConfirmation: propTypes.string,
// };
