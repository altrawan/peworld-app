import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../../../styles/Auth.module.css';

const index = () => {
  return (
    <div className={styles.form_register}>
      <img
        src="/images/logo-white.png"
        alt="Preworld Hire"
        className={styles.form_logo}
      />
      <h1>Halo, Pewpeople</h1>
      <p>
        Jadilah orang pertama yang dapat terhubung dengan banyak perusahaan di
        negeri ini
      </p>
      <Form className={styles.form_login}>
        <Form.Group className="mb-3" style={{ paddingBottom: '15px' }}>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan nama panjang"
            name="nama"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
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
        <Form.Group className="mb-3" style={{ paddingBottom: '15px' }}>
          <Form.Label>No handphone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan no handphone"
            name="nama"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
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
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          style={{ paddingBottom: '15px' }}
        >
          <Form.Label>Konfirmasi kata sandi</Form.Label>
          <Form.Control
            type="password"
            placeholder="Masukan konfirmasi kata sandi"
            name="confirmPassword"
          />
        </Form.Group>
        <Button className={styles.form_button} type="submit">
          Daftar
        </Button>
      </Form>
      <h6 className={styles.register_recruiter}>
        <Link href="/">Daftar sebagai perekrut</Link>
      </h6>
      <p className={styles.form_signUp}>
        Anda sudah punya akun? <Link href="/">Masuk disini</Link>
      </p>
    </div>
  );
};

export default index;
