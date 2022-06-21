import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { getDataCookie } from 'middlewares/authorization';
import { toastr } from 'utils/toastr';
import { login } from 'store/actions/auth';
import styles from 'styles/Auth.module.css';
import { Header, Banner, SideAuth, ResetPassword } from 'components';

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

          Swal.fire({
            title: 'Success!',
            text: res.message,
            icon: 'success',
          });
          router.push('/home');
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

      <section className={styles.login}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-lg-7">
              <Banner />
            </div>

            <div className="col-md-5 col-lg-5 p-0">
              <SideAuth
                greeting="Reset Password"
                subtitle="You need to change your password to activate your account"
              >
                <ResetPassword
                  onSubmit={handleSubmitLogged}
                  classForgot={styles.forgot_password}
                  classBtn={`btn ${styles.btn_auth}`}
                  onChange={handleChange}
                  valuePassword={form.password}
                  isLoading={loading}
                />
              </SideAuth>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
