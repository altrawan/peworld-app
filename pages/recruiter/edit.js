import React, { useState, useRef } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toastr } from 'utils/toastr';
import {
  Header,
  Card,
  Button,
  PurpleBackground,
  FormInput,
  Image,
} from 'components';
import { API_URL } from 'helpers/env';
import styles from 'styles/Profile.module.css';
import { updateUser, updatePhoto } from 'store/actions/recruiter';
import { User, IconPencil, IconLocation } from 'assets';

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

const index = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const hiddenFileInput = useRef(null);
  const [form, setForm] = useState({
    name: data.user.name || '',
    position: data.user.position || '',
    company: data.user.company || '',
    companyField: data.user.company_field || '',
    city: data.user.city || '',
    description: data.user.description || '',
    email: data.login[0].email || '',
    instagram: data.user.instagram || '',
    phoneNumber: data.login[0].phone_number || '',
    linkedin: data.user.linkedin || '',
  });

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleImage = (e) => {
    try {
      setLoading(true);
      const token = Cookies.get('token');
      const decoded = jwtDecode(token);

      const photo = e.target.files[0];
      const formData = new FormData();
      formData.append('image', photo);

      updatePhoto(formData, decoded.user_id)
        .then((res) => {
          Swal.fire({
            title: 'Success!',
            text: res.message,
            icon: 'success',
          }).then(() => {
            window.location.reload();
          });
        })
        .catch((err) => {
          Swal.fire({
            title: 'Failed!',
            text: err.response.data.message,
            icon: 'error',
          });
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
      });
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleReset = () => {
    setForm({
      name: data.user.name || '',
      position: data.user.position || '',
      company: data.user.company || '',
      companyField: data.user.company_field || '',
      city: data.user.city || '',
      description: data.user.description || '',
      email: data.login[0].email || '',
      instagram: data.user.instagram || '',
      phoneNumber: data.login[0].phone_number || '',
      linkedin: data.user.linkedin || '',
    });
  };

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.position ||
      !form.company ||
      !form.companyField ||
      !form.city ||
      !form.description ||
      !form.email ||
      !form.instagram ||
      !form.phoneNumber ||
      !form.linkedin
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'All field must be filled!',
        icon: 'error',
      });
    } else {
      setEdit(true);
      try {
        updateUser(form)
          .then((res) => {
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success',
            }).then(() => {
              window.location.reload();
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
            setEdit(false);
            handleReset();
          });
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <Header title="Edit Profile Page" />

      <section className={`${styles.edit__profile} mb-0 position-relative`}>
        <PurpleBackground className={styles.edit__decoration} />
        <div className="container">
          <div className={`row ${styles.card__padding}`}>
            <div className="col-12 col-md-4 col-lg-4">
              <Card className={styles.card__profile}>
                <div
                  className={`${styles.card__image} d-flex flex-column justify-content-center align-items-center`}
                >
                  <Image
                    src={`https://drive.google.com/uc?export=view&id=${data?.user?.photo}`}
                    alt={data.user.name}
                    className="img-cover rounded-circle"
                    width={150}
                    height={150}
                    fallbackSrc={User}
                  />
                  <div className="d-flex align-items-center justify-content-center">
                    <Image src={IconPencil} alt="Icon" width={18} height={18} />
                    {loading ? (
                      <button className={`btn ${styles.btn__edit}`} disabled>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <button
                        className={`btn ${styles.btn__edit}`}
                        onClick={handleClick}
                      >
                        Edit
                      </button>
                    )}

                    <input
                      type="file"
                      ref={hiddenFileInput}
                      onChange={handleImage}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>

                <h2 className={styles.profile__name}>{data.user.company}</h2>
                <h6 className={styles.profile__job}>
                  {data.user.company_field
                    ? data.user.company_field
                    : 'Masukan bidang perusahaan anda'}
                </h6>

                <div className={styles.profile__location}>
                  <Image src={IconLocation} alt="Icon" width={15} height={15} />
                  <span>
                    {data.user.city ? data.user.city : 'Masukan lokasi anda'}
                  </span>
                </div>
              </Card>
              <div
                className="d-flex flex-column"
                style={{ marginBottom: '50px' }}
              >
                {edit ? (
                  <button className={`${styles.button__main}`} disabled>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <Button
                    className={`${styles.button__main}`}
                    onClick={handleSubmit}
                  >
                    Simpan
                  </Button>
                )}
                <Button
                  className={`${styles.button__secondary} mt-3`}
                  onClick={handleReset}
                >
                  Batal
                </Button>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8">
              <Card className={styles.card__profile}>
                <div className={styles.content__title}>
                  <h5 className={styles.content__heading}>Data diri</h5>
                  <hr />
                </div>

                <div className={`${styles.line} w-100`} />

                <form className={styles.content__form}>
                  <div
                    className={`form-group position-relative ${styles.form__input}`}
                  >
                    <label htmlFor="company">Nama Lengkap</label>
                    <FormInput
                      placeholder="Masukan nama lengkap"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`form-group position-relative ${styles.form__input}`}
                  >
                    <label htmlFor="company">Jabatan</label>
                    <FormInput
                      placeholder="Posisi di perusahaan Anda"
                      id="position"
                      value={form.position}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`form-group position-relative ${styles.form__input}`}
                  >
                    <label htmlFor="company">Nama Perusahaan</label>
                    <FormInput
                      placeholder="Masukan nama perusahaan"
                      id="company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`form-group position-relative ${styles.form__input}`}
                  >
                    <label htmlFor="companyField">Bidang</label>
                    <FormInput
                      placeholder="Masukan bidang perusahaan ex: Financial"
                      id="companyField"
                      value={form.companyField}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`form-group position-relative ${styles.form__input}`}
                  >
                    <label htmlFor="city">Kota</label>
                    <FormInput
                      placeholder="Masukan kota"
                      id="city"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`form-group position-relative d-flex flex-column ${styles.form__input}`}
                  >
                    <label htmlFor="description">Deskripsi singkat</label>
                    <textarea
                      placeholder="Tuliskan deskripsi singkat"
                      id="description"
                      value={form.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`form-group position-relative ${styles.form__input}`}
                  >
                    <label htmlFor="email">Email</label>
                    <FormInput
                      placeholder="Masukan email"
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      isDisabled
                    />
                  </div>
                  <div
                    className={`form-group position-relative ${styles.form__input}`}
                  >
                    <label htmlFor="instagram">Instagram</label>
                    <FormInput
                      placeholder="Masukan nama instagram"
                      id="instagram"
                      value={form.instagram}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`form-group position-relative ${styles.form__input}`}
                  >
                    <label htmlFor="phoneNumber">Nomor Telepon</label>
                    <FormInput
                      placeholder="Masukan nomor telepon"
                      id="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`form-group position-relative ${styles.form__input}`}
                  >
                    <label htmlFor="linkedin">Linkedin</label>
                    <FormInput
                      placeholder="Masukan linkedin"
                      id="linkedin"
                      value={form.linkedin}
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

index.layout = 'mainLayout';

export default index;
