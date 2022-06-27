import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { toastr } from 'utils/toastr';
import { reset } from 'store/actions/auth';
import styles from 'styles/Auth.module.css';
import { Header, Banner, SideAuth, ResetPassword } from 'components';

const index = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialState = {
    password: '',
    passwordConfirmation: '',
  };

  const [form, setForm] = useState(initialState);

  const { password, passwordConfirmation } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitLogged = (e) => {
    e.preventDefault();

    if (!password || !passwordConfirmation) {
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
      reset(form, router.query.token)
        .then((res) => {
          Swal.fire({
            title: 'Success!',
            text: res.message,
            icon: 'success',
          });
          router.push('/auth/login');
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
          setForm({ password: '', passwordConfirmation: '' });
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
                  classBtn={`btn ${styles.btn_auth}`}
                  onChange={handleChange}
                  valuePassword={form.password}
                  valuePasswordConfirmation={form.passwordConfirmation}
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
