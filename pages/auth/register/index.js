import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { registerRecruiter, registerWorker } from 'store/actions/auth';
import styles from 'styles/Auth.module.css';
import {
  Banner,
  Button,
  Header,
  SideAuth,
  RegisterWorker,
  RegisterRecruiter,
} from 'components';
import { toastr } from 'utils/toastr';

const initialState = {
  name: '',
  email: '',
  company: '',
  position: '',
  phoneNumber: '',
  password: '',
  passwordConfirmation: '',
};

const index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialState);
  const [formRecruiter, setformRecruiter] = useState(false);

  const handleShowForm = () => {
    setForm({
      name: '',
      email: '',
      company: '',
      position: '',
      phoneNumber: '',
      password: '',
      passwordConfirmation: '',
    });
    setformRecruiter(!formRecruiter);
    window.scroll(0, 0);
  };

  const {
    name,
    email,
    company,
    position,
    phoneNumber,
    password,
    passwordConfirmation,
  } = form;

  const handleChange = (e) => {
    // eslint-disable-next-line no-shadow
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitWorker = (event) => {
    event.preventDefault();
    if (!name || !email || !phoneNumber || !password || !passwordConfirmation) {
      Swal.fire({
        title: 'Error!',
        text: 'All field must be filled!',
        icon: 'error',
      });
    } else if (password !== passwordConfirmation) {
      Swal.fire({
        title: 'Error!',
        text: 'Password confirmation does not match password!',
        icon: 'error',
      });
    } else {
      setLoading(true);
      registerWorker({
        name,
        email,
        phoneNumber,
        password,
        passwordConfirmation,
      })
        .then((res) => {
          router.push('/auth/login');

          Swal.fire({
            title: 'Success!',
            text: res.message,
            icon: 'success',
          });
        })
        .catch((err) => {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map((e) => toastr(e, 'error'));
          } else {
            Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error',
            });
          }
        })
        .finally(() => {
          setLoading(false);
          setForm({
            name: '',
            email: '',
            phoneNumber: '',
            password: '',
            passwordConfirmation: '',
          });
        });
    }
  };

  const handleSubmitRecruiter = async (event) => {
    event.preventDefault();
    if (
      !name ||
      !email ||
      !company ||
      !position ||
      !phoneNumber ||
      !password ||
      !passwordConfirmation
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'All field must be filled!',
        icon: 'error',
      });
    } else if (password !== passwordConfirmation) {
      Swal.fire({
        title: 'Error!',
        text: 'Password confirmation does not match password!',
        icon: 'error',
      });
    } else {
      setLoading(true);
      registerRecruiter({
        name,
        email,
        company,
        position,
        phoneNumber,
        password,
        passwordConfirmation,
      })
        .then((res) => {
          router.push('/auth/login');

          Swal.fire({
            title: 'Success!',
            text: res.message,
            icon: 'success',
          });
        })
        .catch((err) => {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map((e) => toastr(e, 'error'));
          } else {
            Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error',
            });
          }
        })
        .finally(() => {
          setLoading(false);
          setForm({
            name: '',
            email: '',
            company: '',
            position: '',
            phoneNumber: '',
            password: '',
            passwordConfirmation: '',
          });
        });
    }
  };

  return (
    <>
      <Header title="Register Page" />

      <section
        className={formRecruiter ? styles.reg_recruiter : styles.reg_worker}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-lg-7">
              <Banner />
            </div>

            <div className="col-md-5 col-lg-5 p-0">
              <SideAuth
                greeting="Hello, Pewpeople"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor."
              >
                {formRecruiter ? (
                  <RegisterRecruiter
                    onSubmit={handleSubmitRecruiter}
                    classBtn={`btn ${styles.btn_auth}`}
                    onChange={handleChange}
                    valueName={form.name}
                    valueEmail={form.email}
                    valueCompany={form.company}
                    valuePosition={form.position}
                    valuePhoneNumber={form.phoneNumber}
                    valuePassword={form.password}
                    valuePasswordConfirmation={form.passwordConfirmation}
                    isLoading={loading}
                  />
                ) : (
                  <RegisterWorker
                    onSubmit={handleSubmitWorker}
                    classBtn={`btn ${styles.btn_auth}`}
                    onChange={handleChange}
                    valueName={form.name}
                    valueEmail={form.email}
                    valuePhoneNumber={form.phoneNumber}
                    valuePassword={form.password}
                    valuePasswordConfirmation={form.passwordConfirmation}
                    isLoading={loading}
                  />
                )}

                <hr />
                <Button
                  className={`${styles.btn_option}`}
                  onClick={handleShowForm}
                >
                  Sign Up as {formRecruiter ? 'Worker' : 'Recruiter'}
                </Button>

                <p className={styles.option}>
                  Already have account?{' '}
                  <Link href="/auth/login">Login in here</Link>
                </p>
              </SideAuth>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
