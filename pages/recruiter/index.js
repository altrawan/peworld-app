import React from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { API_URL } from '../../helpers/env';
// import { getDataCookie } from '../../middlewares/authorization';
import styles from '../../styles/Profile.module.css';
import Header from '../../components/atoms/Header';
import PurpleBackground from '../../components/atoms/PurpleBackground';
import SocialMedia from '../../components/molecules/SocialMedia';

export async function getServerSideProps(context) {
  try {
    const decoded = jwtDecode(context.req.cookies.token);

    const response = await axios.get(`${API_URL}recruiter/${decoded.user_id}`, {
      headers: {
        Authorization: `Bearer ${context.req.cookies.token}`,
      },
    });

    return {
      props: {
        data: response.data.data,
        error: false,
        message: 'Success get data',
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: true,
        message: error.message,
      },
    };
  }
}

const profile = ({ data }) => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove('token');
    router.push('/auth/login');
  };

  return (
    <>
      <Header title="Profile Page" />

      <section className={styles.recruiter}>
        <div className="container">
          <div className="row position-relative">
            <PurpleBackground className={styles.latar} />
            <div className={styles.company}>
              <div className={styles.company__image}>
                <Image
                  src={`${
                    data.user.photo
                      ? `${API_URL}uploads/recruiter/${data.user.photo}`
                      : `${API_URL}uploads/recruiter/default.png`
                  }`}
                  className="rounded-circle"
                  alt={data.user.name}
                  width={150}
                  height={150}
                />
              </div>
              <h2 className={styles.company__name}>{data.user.company}</h2>
              <h6 className={styles.company__field}>
                {data.user.company_field}
              </h6>
              <div className={styles.profile__location}>
                <Image src="/icons/icon-location.svg" width={15} height={15} />
                <span>{data.user.city}</span>
              </div>
              <p
                className={styles.profile__description}
                style={{ width: '60%', textAlign: 'center' }}
              >
                {data.user.description}
              </p>
              <Link href="/recruiter/edit">
                <button
                  className={styles.button__main}
                  style={{ width: '30%' }}
                >
                  Edit Profile
                </button>
              </Link>
              <button
                className={`${styles.button__secondary} mt-3`}
                style={{ width: '30%' }}
                onClick={logout}
              >
                Logout
              </button>
              <SocialMedia
                email={data.login[0].email}
                instagram={data.user.instagram}
                phone={data.login[0].phone_number}
                linkedin={data.user.linkedin}
              />
            </div>
          </div>
        </div>

        {/* <PurpleBackground className="purple" />

        <div className="container">
          <div className="row">
            <div className={styles.company}>
              <div className={styles.company__image}>
                <Image
                  src="/images/user-3.png"
                  className="rounded-circle"
                  alt="My Name"
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.company__content}>
                <h2>PT. Martabat Jaya Abadi</h2>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

profile.layout = 'secondaryLayout';

export default profile;
