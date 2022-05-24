import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { toastr } from '../../utils/toastr';
import { login } from '../../redux/actions/auth';
import styles from '../../styles/Auth.module.css';
import { getDataCookie } from '../../middlewares/authorization';
import Header from '../../components/atoms/Header';
import Banner from '../../components/molecules/Banner';
import SideAuth from '../../components/molecules/SideAuth';
import FormLogin from '../../components/organisms/FormLogin';

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

const initialState = {
  email: '',
  password: '',
};

const index = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialState);

  const { email, password } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitLogged = (e) => {
    e.preventDefault();

    if (!email || !password) {
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
          const decoded = jwtDecode(res.token);

          if (decoded.role === 0) {
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success',
            });
            router.push('/');
          } else {
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success',
            });
            router.push('/home');
          }
        })
        .catch((err) => {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map((el) => toastr(el, 'error'));
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
          setForm({ email: '', password: '' });
        });
    }
  };

  return (
    <>
      <Header title="Login Page" />
      <ToastContainer />

      <section className={styles.login}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-lg-7">
              <Banner />
            </div>

            <div className="col-md-5 col-lg-5 p-0">
              <SideAuth
                greeting="Halo, Pewpeople"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor."
              >
                <FormLogin
                  onSubmit={handleSubmitLogged}
                  isLoggedin
                  classForgot={styles.forgot__password}
                  classBtn={`btn ${styles.btn__auth}`}
                  onChange={handleChange}
                  valueEmail={form.email}
                  valuePassword={form.password}
                  isLoading={loading}
                />
                <div className={styles.signUp}>
                  Anda belum punya akun?{' '}
                  <Link href="/register">Daftar disini</Link>
                </div>
              </SideAuth>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
