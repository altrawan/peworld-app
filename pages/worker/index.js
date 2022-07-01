import React from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { Tabs, Tab } from 'react-bootstrap';
import { API_URL } from 'helpers/env';
import styles from 'styles/Profile.module.css';
import {
  Header,
  PurpleBackground,
  SocialMedia,
  Portofolio,
  WorkExperience,
  Image,
} from 'components';
import { IconLocation, User } from 'assets';

export async function getServerSideProps(context) {
  try {
    const decoded = jwtDecode(context.req.cookies.token);

    const response = await axios.get(`${API_URL}worker/${decoded.user_id}`, {
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

const index = ({ data }) => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove('token');
    router.push('/auth/login');
  };

  return (
    <>
      <Header title="Profile Page" />

      <section className={styles.profile}>
        <PurpleBackground className="purple" />

        <div className="container">
          <div className="row">
            <div className={`col-lg-4 col-md-4 col-12 ${styles.profile__user}`}>
              <div className={styles.profile__image}>
                <Image
                  src={`https://drive.google.com/uc?export=view&id=${data?.user?.photo}`}
                  className="rounded-circle"
                  alt={data.user.name}
                  width={150}
                  height={150}
                  fallbackSrc={User}
                />
              </div>
              <h2 className={styles.profile__name}>{data.user.name}</h2>
              <h6 className={styles.profile__job}>
                {data.user.job_desk
                  ? data.user.job_desk
                  : 'Masukan job desk anda'}
              </h6>
              <div className={styles.profile__location}>
                <Image src={IconLocation} width={15} height={15} />
                <span>
                  {data.user.domicile
                    ? data.user.domicile
                    : 'Masukan lokasi anda'}
                </span>
              </div>
              <p className={`${styles.profile__type} mt-2`}>
                {data.user.job_status
                  ? data.user.job_status
                  : 'Masukan job status anda'}
              </p>
              <p className={styles.profile__description}>
                {data.user.description
                  ? data.user.description
                  : 'Masukan deskripsi anda'}
              </p>
              <Link href="/worker/edit">
                <button className={styles.button__main}>Edit Profile</button>
              </Link>
              <button
                className={`${styles.button__secondary} mt-3`}
                onClick={logout}
              >
                Logout
              </button>
              <h2 className={styles.profile__skill}>Skill</h2>
              <div className={`row ${styles.profile__list}`}>
                {!data.skill.length ? (
                  <div>Masukan skill anda</div>
                ) : (
                  data.skill.map((skill) => (
                    <div className="col-auto mb-3">
                      <button>{skill.skill_name}</button>
                    </div>
                  ))
                )}
              </div>

              <SocialMedia
                worker
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
                    : 'User belum menentukan linkedin'
                }
                github={
                  data.user.github ? data.user.github : 'Masukan github anda'
                }
                gitlab={
                  data.user.gitlab ? data.user.gitlab : 'Masukan gitlab anda'
                }
              />
            </div>

            <div className={`col-lg-8 col-md-8 col-12 ${styles.profile__tab}`}>
              <Tabs
                defaultActiveKey="Portofolio"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="Portofolio" title="Portofolio">
                  <Portofolio data={data.portofolio_image} />
                </Tab>
                <Tab eventKey="WorkExperience" title="Pengalaman Kerja">
                  <WorkExperience data={data.experience} />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

index.layout = 'mainLayout';

export default index;
