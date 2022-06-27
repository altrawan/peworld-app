import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { toastr } from 'utils/toastr';
import { forgot } from 'store/actions/auth';
import styles from 'styles/Auth.module.css';
import { Header, Banner, SideAuth, ForgotPassword } from 'components';

const index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire('Error!', 'Email must be required', 'error');
    } else {
      setLoading(true);
      forgot({ email })
        .then((res) => {
          Swal.fire('Success!', res.message, 'success');

          router.push('/auth/login');
        })
        .catch((err) => {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map((el) => toastr(el, 'error'));
          } else {
            Swal.fire('Error!', err.response.data.message, 'error');
          }
        })
        .finally(() => {
          setLoading(false);
          setEmail('');
        });
    }
  };

  return (
    <>
      <Header title="Forgot Password Page" />

      <section className={styles.login}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-lg-7">
              <Banner />
            </div>

            <div className="col-md-5 col-lg-5 p-0">
              <SideAuth
                greeting="Reset Password"
                subtitle="Enter your user account's verified email address and we will send you a password reset link."
              >
                <ForgotPassword
                  onSubmit={handleSubmit}
                  classBtn={`btn ${styles.btn_auth}`}
                  onChange={(e) => setEmail(e.target.value)}
                  valueEmail={email}
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
