import React from 'react';
import Link from 'next/link';
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

      <div className={props.classForgot}>
        <Link href="/auth/forgot">Forgot Password?</Link>
      </div>

      <Button
        className={`btn ${props.classBtn} w-100`}
        isLoading={props.isLoading}
      >
        Sign In
      </Button>
    </form>
  );
}
