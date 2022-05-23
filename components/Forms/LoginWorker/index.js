import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../../../styles/Auth.module.css';

const index = () => {
  return (
    <div className={styles.form}>
      <img
        src="/images/logo-white.png"
        alt="Preworld Hire"
        className={styles.form_logo}
      />
      <h1>Halo, Pewpeople</h1>
      <p>
        Masukan alamat email dan kata sandi anda untuk dapat mengakses Preworld
        Hire
      </p>
      <Form className={styles.form_login}>
        <Form.Group
          className={`mb-3 ${styles.form_email}`}
          controlId="formBasicEmail"
          style={{ paddingBottom: '15px' }}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Masukan alamat email"
            name="email"
          />
        </Form.Group>
        <Form.Group
          className={`mb-3 ${styles.form_password}`}
          controlId="formBasicPassword"
          style={{ paddingBottom: '15px' }}
        >
          <Form.Label>Kata Sandi</Form.Label>
          <Form.Control
            type="password"
            placeholder="Masukan kata sandi"
            name="password"
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <span className={styles.form_forgot}>
            <Link href="/">Login sebagai Rekruter</Link>
          </span>
          <span className={styles.form_forgot}>
            <Link href="/">Lupa kata sandi?</Link>
          </span>
        </div>
        <Button className={styles.form_button} type="submit">
          Masuk
        </Button>
      </Form>

      <p className={styles.form_signUp}>
        Anda belum punya akun? <Link href="/">Daftar disini</Link>
      </p>
    </div>
  );
};

export default index;
