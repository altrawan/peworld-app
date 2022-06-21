import React from 'react';
import propTypes from 'prop-types';
import styles from 'styles/Auth.module.css';
import FormInput from 'atoms/FormInput';
import Button from 'atoms/Button';

export default function index(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className={`form-group position-relative ${styles.form__input}`}>
        <label htmlFor="name">Nama</label>
        <FormInput
          placeholder="Masukan nama panjang"
          name="name"
          type="text"
          value={props.valueName}
          onChange={props.onChange}
        />
      </div>
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
        <label htmlFor="company">Company</label>
        <FormInput
          placeholder="Masukan nama perusahaan"
          name="company"
          type="text"
          value={props.valueCompany}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form__input}`}>
        <label htmlFor="position">Jabatan</label>
        <FormInput
          placeholder="Posisi di perusahaan Anda"
          name="position"
          type="text"
          value={props.valuePosition}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form__input}`}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <FormInput
          placeholder="Masukan no handphone"
          name="phoneNumber"
          type="number"
          value={props.valuePhoneNumber}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form__input}`}>
        <label htmlFor="password">Kata Sandi</label>
        <FormInput
          placeholder="Masukan kata sandi"
          name="password"
          type="password"
          value={props.valuePassword}
          onChange={props.onChange}
        />
      </div>
      <div className={`form-group position-relative ${styles.form__input}`}>
        <label htmlFor="passwordConfirmation">Konfirmasi Kata Sandi</label>
        <FormInput
          placeholder="Masukan konfirmasi kata sandi"
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
        Daftar
      </Button>
    </form>
  );
}

FormInput.propTypes = {
  onChange: propTypes.func,
  valueName: propTypes.string,
  valueCompany: propTypes.string,
  valuePosition: propTypes.string,
  valuePhoneNumber: propTypes.number,
  valuePassword: propTypes.string,
  valuePasswordConfirmation: propTypes.string,
};
