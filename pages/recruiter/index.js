import React from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { API_URL } from 'helpers/env';
import styles from 'styles/Profile.module.css';
import { Header, PurpleBackground, SocialMedia, Image } from 'components';
import { IconLocation, User } from 'assets';

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
                  src={`https://drive.google.com/uc?export=view&id=${data?.user?.photo}`}
                  className="rounded-circle"
                  alt={data.user.name}
                  width={150}
                  height={150}
                  fallbackSrc={User}
                />
              </div>
              <h2 className={styles.company__name}>{data.user.company}</h2>
              <h6 className={styles.company__field}>
                {data.user.company_field
                  ? data.user.company_field
                  : 'Masukan bidang perusahaan anda'}
              </h6>
              <div className={styles.profile__location}>
                <Image src={IconLocation} width={15} height={15} />
                <span>
                  {data.user.city ? data.user.city : 'Masukan lokasi anda'}
                </span>
              </div>
              <p
                className={styles.profile__description}
                style={{ width: '60%', textAlign: 'center' }}
              >
                {data.user.description
                  ? data.user.description
                  : 'Masukan deskripsi anda'}
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
                instagram={
                  data.user.instagram
                    ? data.user.instagram
                    : 'Masukan instagram anda'
                }
                phone={data.login[0].phone_number}
                linkedin={
                  data.user.linkedin
                    ? data.user.linkedin
                    : 'Masukan linkedin anda'
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

profile.layout = 'mainLayout';

export default profile;
