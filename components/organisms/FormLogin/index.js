import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Auth.module.css';
import FormInput from '../../atoms/FormInput';
import Button from '../../atoms/Button';

export default function index(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className={`form-group position-relative ${styles.form__input}`}>
        <label htmlFor="email">Email</label>
        <FormInput
          placeholder="Masukan alamat email"
          name="email"
          type="email"
          value={props.valueEmail}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form__input}`}>
        <label htmlFor="password">Kata Sandi</label>
        <FormInput
          placeholder="Masukan Kata Sandi"
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
