import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import { toastr } from '../../../utils/toastr';
import { login } from '../../../redux/actions/auth';
import styles from '../../../styles/Auth.module.css';
import Banner from '../../../components/Banner';
import { getDataCookie } from '../../../middlewares/authorization';
import Header from '../../../components/Header';

export async function getServerSideProps(context) {
  const storageCookie = await getDataCookie(context);
  if (storageCookie.token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmitLogged = async (event) => {
    try {
      event.preventDefault();
      if (form.email === '' || form.password === '') {
        Swal.fire({
          title: 'Error!',
          text: 'All field must be filled!',
          icon: 'error',
        });
      } else {
        setLoading(true);
        login(form)
          .then((res) => {
            Cookies.set('token', res.token);

            router.push('/');

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
          });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
      });
    }
  };
  return (
    <>
      <Header title="Login Page" />

      <ToastContainer />

      <Container fluid className={styles.window}>
        <Row>
          <Col md={6} className={styles.column1}>
            <Banner />
          </Col>
          <Col md={6} className={styles.column2}>
            <div className={styles.form}>
              <img
                src="/images/logo-white.png"
                alt="Preworld Hire"
                className={styles.form_logo}
              />
              <h1>Halo, Pewpeople</h1>
              <p>
                Masukan alamat email dan kata sandi anda untuk dapat mengakses
                Preworld Hire
              </p>
              <Form className={styles.form_login} onSubmit={handleSubmitLogged}>
                <Form.Group
                  className={`mb-3 ${styles.form_email}`}
                  controlId="formBasicEmail"
                  style={{ paddingBottom: '15px' }}
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukan alamat email"
                    id="email"
                    onChange={onChangeInput}
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
                    id="password"
                    onChange={onChangeInput}
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
                {loading ? (
                  <Button className={styles.form_button} type="submit">
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </Button>
                ) : (
                  <Button className={styles.form_button} type="submit">
                    Masuk
                  </Button>
                )}
              </Form>

              <p className={styles.form_signUp}>
                Anda belum punya akun? <Link href="/">Daftar disini</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
