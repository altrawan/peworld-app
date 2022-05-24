import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import { register } from '../../../redux/actions/auth';
import styles from '../../../styles/Auth.module.css';
import Banner from '../../../components/Banner';
import Header from '../../../components/Header';
import { toastr } from '../../../utils/toastr';

const index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    passwordConfirmation: '',
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
      if (
        form.name === '' ||
        form.email === '' ||
        form.phoneNumber === '' ||
        form.password === '' ||
        form.passwordConfirmation === ''
      ) {
        Swal.fire({
          title: 'Error!',
          text: 'All field must be filled!',
          icon: 'error',
        });
      } else {
        setLoading(true);
        register(form)
          .then((res) => {
            router.push('/worker/login');

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
      <Header title="Register Page" />

      <ToastContainer />

      <Container fluid className={styles.window_register}>
        <Row>
          <Col md={6} className={styles.column1}>
            <Banner />
          </Col>
          <Col md={6} className={styles.column2}>
            <div className={styles.form_register}>
              <img
                src="/images/logo-white.png"
                alt="Preworld Hire"
                className={styles.form_logo}
              />
              <h1>Halo, Pewpeople</h1>
              <p>
                Jadilah orang pertama yang dapat terhubung dengan banyak
                perusahaan di negeri ini
              </p>
              <Form className={styles.form_login} onSubmit={handleSubmitLogged}>
                <Form.Group className="mb-3" style={{ paddingBottom: '15px' }}>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukan nama panjang"
                    id="name"
                    onChange={onChangeInput}
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
                    id="email"
                    onChange={onChangeInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3" style={{ paddingBottom: '15px' }}>
                  <Form.Label>No handphone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukan no handphone"
                    id="phoneNumber"
                    onChange={onChangeInput}
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
                    id="password"
                    onChange={onChangeInput}
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
                    id="passwordConfirmation"
                    onChange={onChangeInput}
                  />
                </Form.Group>
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
                    Daftar
                  </Button>
                )}
              </Form>
              <h6 className={styles.register_recruiter}>
                <Link href="/">Daftar sebagai perekrut</Link>
              </h6>
              <p className={styles.form_signUp}>
                Anda sudah punya akun? <Link href="/">Masuk disini</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
