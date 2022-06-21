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
          placeholder="Masukan alamat email"
          name="email"
          type="email"
          value={props.valueEmail}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form_input}`}>
        <label htmlFor="password">Kata Sandi</label>
        <FormInput
          placeholder="Masukan kata sandi"
          name="password"
          type="password"
          value={props.valuePassword}
          onChange={props.onChange}
        />
      </div>

      <div className={props.classForgot}>
        <Link href="/forgot-password">Lupa kata sandi?</Link>
      </div>

      <Button
        className={`btn ${props.classBtn} w-100`}
        isLoading={props.isLoading}
      >
        Masuk
      </Button>
    </form>
  );
}
