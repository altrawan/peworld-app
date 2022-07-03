import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tabs, Tab, Modal, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import { API_URL } from 'helpers/env';
import styles from 'styles/Profile.module.css';
import { initialChat } from 'store/actions/chat';
import { toastr } from 'utils/toastr';
import {
  Header,
  PurpleBackground,
  SocialMedia,
  Portofolio,
  WorkExperience,
  Image,
} from 'components';
import { User, IconLocation } from 'assets';

export async function getServerSideProps(context) {
  try {
    const { id } = context.params;

    const response = await axios.get(`${API_URL}worker/${id}`, {
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
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState('');
  const [sendMessage, setSendMessage] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const token = Cookies.get('token');
  let decoded = '';
  if (token) {
    decoded = jwtDecode(token);
  }

  const handleIntialChat = () => {
    if (!message) {
      Swal.fire('Failed!', 'Message required!', 'error');
    } else {
      setSendMessage(true);
      initialChat({
        sender: decoded.user_id,
        receiver: data.user.id,
        message,
      })
        .then(() => {
          document.getElementById('close').click();
          router.push('/chat');
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
          setMessage('');
        });
    }
  };

  function MyVerticallyCenteredModal(props) {
    // setMessage(
    //   `Halo ${data.user.name}, saya sangat tertarik dengan keahlian yang anda miliki dan ingin mengenal anda lebih jauh`
    // );
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Send Message
          </Modal.Title>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={props.onHide}
            id="close"
          />
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="chatInput"
                placeholder="Type message"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          {sendMessage ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>
          ) : (
            <Button variant="primary" onClick={handleIntialChat}>
              Send
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }

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
                  : 'User belum menentukan job desk'}
              </h6>
              <div className={styles.profile__location}>
                <Image src={IconLocation} width={15} height={15} />
                <span>
                  {data.user.domicile
                    ? data.user.domicile
                    : 'User belum menentukan lokasi'}
                </span>
              </div>
              <p className={`${styles.profile__type} mt-2`}>
                {data.user.job_status
                  ? data.user.job_status
                  : 'User belum menentukan job status'}
              </p>
              <p className={styles.profile__description}>
                {data.user.description
                  ? data.user.description
                  : 'User belum menentukan deskripsi'}
              </p>

              {loading ? (
                <></>
              ) : (
                decoded.role === 1 && (
                  <Link href={`/hire/${data.user.id}`}>
                    <button className={styles.button__main}>Hire</button>
                  </Link>
                )
              )}

              <button
                className={`${styles.button__secondary} mt-3`}
                onClick={() => setModalShow(true)}
              >
                Message
              </button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              <h2 className={styles.profile__skill}>Skill</h2>

              <div className={`row ${styles.profile__list}`}>
                {!data.skill.length ? (
                  <div>User belum menentukan skill</div>
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
                    : 'User belum menentukan instagram'
                }
                phone={data.login[0].phone_number}
                linkedin={
                  data.user.linkedin
                    ? data.user.linkedin
                    : 'User belum menentukan linkedin'
                }
                github={
                  data.user.github
                    ? data.user.github
                    : 'User belum menentukan github'
                }
                gitlab={
                  data.user.gitlab
                    ? data.user.gitlab
                    : 'User belum menentukan gitlab'
                }
              />
            </div>

            <div
              className={`col-lg-8 col-md-8 col-12 ${styles.profile__tab}`}
              style={{ width: '54.1vw' }}
            >
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
