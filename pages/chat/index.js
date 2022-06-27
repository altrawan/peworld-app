import React, { useState } from 'react';
// import axios from 'axios';
// import jwtDecode from 'jwt-decode';
// import io from 'socket.io-client';
// import { useDispatch, useSelector } from 'react-redux';
// import Swal from 'sweetalert2';
// import moment from 'moment';
import InputEmoji from 'react-input-emoji';
import styles from 'styles/Chat.module.css';
import { User, EmailCampaign, IconSend } from 'assets';
import { Header, Image } from 'components';
// import { API_URL } from 'helpers/env';
// import { wrapper } from 'store/store';
// import {
//   GET_DETAIL_WORKER_SUCCESS,
//   GET_DETAIL_WORKER_FAILED,
//   GET_DETAIL_RECRUITER_SUCCESS,
//   GET_DETAIL_RECRUITER_FAILED,
// } from 'store/types';

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     try {
//       const decoded = jwtDecode(context.req.cookies.token);

//       if (decoded.role === 0) {
//         const response = await axios.get(
//           `${API_URL}worker/${decoded.user_id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${context.req.cookies.token}`,
//             },
//           }
//         );

//         store.dispatch({
//           type: GET_DETAIL_WORKER_SUCCESS,
//           payload: response.data,
//         });
//       } else {
//         const response = await axios.get(
//           `${API_URL}recruiter/${decoded.user_id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${context.req.cookies.token}`,
//             },
//           }
//         );
//         store.dispatch({
//           type: GET_DETAIL_RECRUITER_SUCCESS,
//           payload: response.data,
//         });
//       }
//     } catch (error) {
//       const decoded = jwtDecode(context.req.cookies.token);

//       if (decoded.role === 0) {
//         store.dispatch({
//           type: GET_DETAIL_WORKER_FAILED,
//           payload: error.message,
//         });
//       } else {
//         store.dispatch({
//           type: GET_DETAIL_RECRUITER_FAILED,
//           payload: error.message,
//         });
//       }
//     }

//     return {
//       props: {
//         token: context.req.cookies.token,
//       },
//     };
//   }
// );

const index = () => {
  // const dispatch = useDispatch();
  // const { listUser, detailUser, detailReceiver } = useSelector(
  //   (state) => state
  // );
  // const [socketio, setSocketio] = useState(null);
  const [message, setMessage] = useState('');
  // const [listChat, setListChat] = useState([]);
  // const [editChat, setEditChat] = useState('');
  // const [editMessage, setEditMessage] = useState(null);

  // const [empty, setEmpty] = useState(true);

  // useEffect(() => {}, []);

  const empty = true;

  return (
    <>
      <Header title="Chat Page" />

      <section className={`${styles.chat}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 d-none d-md-block">
              <div className={styles.chat_left}>
                <div className={styles.chat_title}>
                  <h5>Chat</h5>
                </div>
                <hr />
                {empty ? (
                  <div
                    className="d-flex flex-column justify-content-center align-items-center h-75"
                    style={{ gap: '20px' }}
                  >
                    <Image src={EmailCampaign} alt="No Chat" />
                    <h5 className="fw-bold">Belum ada chat</h5>
                  </div>
                ) : (
                  <div className="overflow-auto">
                    <button className="btn w-100 border-0">
                      <div className="row w-100 d-flex align-items-center">
                        <div className="col-12 col-md-4 col-lg-3">
                          <div className="d-flex justify-content-center ms-1">
                            <Image
                              src={User}
                              className="img-cover rounded-circle"
                              alt="Test"
                            />
                          </div>
                        </div>
                        <div
                          className="col-12 col-md-8 col-lg-9 d-flex flex-column justify-content-center"
                          style={{ textAlign: 'left' }}
                        >
                          <label className={styles.chat_sender}>
                            Jonas adam
                          </label>
                          <label className={styles.chat_message}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente nulla eaque quisquam architecto ullam
                            cupiditate atque esse, numquam maxime necessitatibus
                            omnis, tempore culpa qui obcaecati, repellendus
                            perspiciatis non labore blanditiis?
                          </label>
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8">
              <div className={`${styles.chat_right}`}>
                <div className={styles.chat_header}>
                  {empty ? (
                    <></>
                  ) : (
                    <>
                      <Image
                        src={User}
                        className="img-cover rounded-circle"
                        width={40}
                        height={40}
                        alt="Test"
                      />
                      <h5>Jonas adam</h5>
                    </>
                  )}
                </div>
                <hr />
                {empty ? (
                  <div className="d-flex justify-content-center align-items-center h-75">
                    <h5 className={styles.chat_nochat}>
                      Please select a chat to start messaging
                    </h5>
                  </div>
                ) : (
                  <>
                    <div
                      className="overflow-auto"
                      id="chats"
                      style={{ height: '60vh' }}
                    >
                      <div className="me-1">
                        <div className="d-flex justify-content-end align-items-end mt-4">
                          <div className={`${styles.ballon_right} me-2`}>
                            <p className="p-0 m-0">Selamat Pagi</p>
                            <small className="text-secondary">12:00 am</small>
                          </div>
                          <Image
                            src={User}
                            className="img-cover rounded-circle"
                            width={50}
                            height={50}
                            alt="Test"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <form action="">
                  <div
                    className="d-flex align-items-center justify-content-center p-4"
                    style={{ gap: '10px' }}
                  >
                    <InputEmoji
                      value={message}
                      onChange={setMessage}
                      placeholder="type message..."
                    />
                    <button type="submit" className={styles.chat_button}>
                      <Image src={IconSend} alt="Send Message" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

index.layout = 'mainLayout';

export default index;
