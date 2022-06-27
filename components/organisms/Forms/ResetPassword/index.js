import React from 'react';
import styles from 'styles/components/Form.module.css';
import { Button, FormInput } from 'components';

export default function index(props) {
  return (
    <form onSubmit={props.onSubmit}>
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
        <label htmlFor="password">Confirmation new password</label>
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
        Reset Password
      </Button>
    </form>
  );
}
