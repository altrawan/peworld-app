import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Auth.module.css';
import InputText from '../../atoms/FormInput';
import Button from '../../atoms/Button';

export default function index(props) {
  if (props.isLoggedin) {
    return (
      <form onSubmit={props.onSubmit}>
        <div className={`form-group position-relative ${styles.form__input}`}>
          <label htmlFor="email">Email</label>
          <InputText
            placeholder="Masukan alamat email"
            name="email"
            type="email"
            value={props.valueEmail}
            onChange={props.onChange}
          />
        </div>
        <div className={`form-group position-relative ${styles.form__input}`}>
          <label htmlFor="password">Kata Sandi</label>
          <InputText
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
  return <div>index</div>;
}
