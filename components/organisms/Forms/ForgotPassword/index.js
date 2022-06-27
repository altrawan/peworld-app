import React from 'react';
import styles from 'styles/components/Form.module.css';
import { Button, FormInput } from 'components';

export default function index(props) {
  return (
    <form onSubmit={props.onSubmit}>
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

      <Button
        className={`btn ${props.classBtn} w-100`}
        isLoading={props.isLoading}
      >
        Send password reset link
      </Button>
    </form>
  );
}
