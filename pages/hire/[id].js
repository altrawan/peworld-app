import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toastr } from '../../utils/toastr';
import styles from '../../styles/Profile.module.css';
import FormInput from '../../components/atoms/FormInput';
import { API_URL } from '../../helpers/env';
import { hireWorker } from '../../store/actions/recruiter';

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

const initialState = {
  messageDestination: '',
  name: '',
  email: '',
  phoneNumber: '',
  description: '',
};

const index = ({ data }) => {
  const router = useRouter();
  const toUser = router.query.id;
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialState);
  const { messageDestination, name, email, phoneNumber, description } = form;

  const handleChange = (e) => {
    // eslint-disable-next-line no-shadow
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !messageDestination ||
      !name ||
      !email ||
      !phoneNumber ||
      !description
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'All field must be filled!',
        icon: 'error',
      });
    } else {
      setLoading(true);
      hireWorker({
        toUser,
        messageDestination,
        name,
        email,
        phoneNumber,
        description,
      })
        .then((res) => {
          router.push('/home');

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
          setForm({
            messageDestination: '',
            name: '',
            email: '',
            phoneNumber: '',
            description: '',
          });
        });
    }
  };

  return (
    <section className={styles.hire}>
      <div className="container">
        <div className="row">
          <div
            className={`col-lg-4 col-md-4 col-12 mt-5 mb-5 ${styles.hire__card}`}
            style={{ marginRight: '60px' }}
          >
            <div className={styles.profile__image}>
              <Image
                src={`${
                  data.user.photo
                    ? `${API_URL}uploads/worker/${data.user.photo}`
                    : `${API_URL}uploads/worker/default.png`
                }`}
                className="rounded-circle"
                alt={data.user.name}
                width={150}
                height={150}
              />
            </div>
            <div className={styles.profile__content}>
              <h2>{data.user.name}</h2>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci.
              </h6>
            </div>
            <div className={`${styles.profile__location} mt-3 mb-3`}>
              <Image src="/icons/icon-location.svg" width={15} height={15} />
              <span>{data.user.domicile}</span>
            </div>
            <p className={styles.profile__description}>
              {data.user.description}
            </p>
            <h2 className={styles.profile__skill}>Skill</h2>
            <div className={`row ${styles.profile__list}`}>
              {data.skill.map((skill) => (
                <div className="col-auto mb-3">
                  <button>{skill.skill_name}</button>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-12 mt-5 mb-5">
            <div className={styles.hire__content}>
              <h1>Hubungi {data.user.name}</h1>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </h6>
            </div>
            <div className={styles.hire__form}>
              <form onSubmit={handleSubmit}>
                <div
                  className={`form-group position-relative ${styles.form__input}`}
                >
                  <label htmlFor="fullname">Tujuan tentang pesan ini</label>
                  <select
                    className="form-select form-select-lg mb-3"
                    onChange={(e) =>
                      setForm({ ...form, messageDestination: e.target.value })
                    }
                  >
                    <optgroup>
                      <option value="" selected>
                        Tujuan Pesan
                      </option>
                      <option value="Projek">Projek</option>
                      <option value="Pekerjaan">Pekerjaan</option>
                      <option value="Yang lain">Yang lain</option>
                    </optgroup>
                  </select>
                </div>

                <div
                  className={`form-group position-relative ${styles.form__input}`}
                >
                  <label htmlFor="name">Nama Lengkap</label>
                  <FormInput
                    placeholder="Masukan nama lengkap"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={`form-group position-relative ${styles.form__input}`}
                >
                  <label htmlFor="email">Email</label>
                  <FormInput
                    type="email"
                    placeholder="Masukan email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={`form-group position-relative ${styles.form__input}`}
                >
                  <label htmlFor="phoneNumber">No Handphone</label>
                  <FormInput
                    type="number"
                    placeholder="Masukan no handphone"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={`form-group position-relative d-flex flex-column ${styles.form__description}`}
                >
                  <label htmlFor="description">Deskripsi</label>
                  <textarea
                    placeholder="Deskripsi/jelaskan lebih detail"
                    name="description"
                    className="description"
                    value={form.description}
                    onChange={handleChange}
                  />
                </div>
                {loading ? (
                  <div className={styles.btn__hire}>
                    <button disabled>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                ) : (
                  <div className={styles.btn__hire}>
                    <button type="submit">Hire</button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

index.layout = 'secondaryLayout';

export default index;
