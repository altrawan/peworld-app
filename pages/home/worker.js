import React, { useState } from 'react';
import axios from 'axios';
import ContentLoader from 'react-content-loader';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import Pagination from 'react-paginate';
import Link from 'next/link';
import { TopJob, Header, Button, FormInput, Card, Image } from 'components';
import styles from 'styles/Home.module.css';
import { API_URL } from 'helpers/env';
import { User, IconLocation, IconNext, IconPrevious, NotFound } from 'assets';

export async function getServerSideProps(context) {
  try {
    const { page, limit, search, sort, sortType } = context.query;

    let url = `${API_URL}worker?`;

    const queryPage = Number(page) || 1;
    if (queryPage) {
      url += `&page=${queryPage}`;
    }

    const queryLimit = Number(limit) || 4;
    if (queryLimit) {
      url += `&limit=${queryLimit}`;
    }

    const querySearch = search || '';
    if (querySearch) {
      url += `&search=${querySearch}`;
    }

    const querySort = sort || 'name';
    if (querySort) {
      url += `&sort=${querySort}`;
    }

    const querySortType = sortType || 'ASC';
    if (querySortType) {
      url += `&sortType=${querySortType}`;
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${context.req.cookies.token}`,
      },
    });

    return {
      props: {
        data: response.data.data,
        pagination: response.data.pagination,
        token: context.req.cookies.token,
        error: false,
        message: 'Success get data',
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: true,
        token: context.req.cookies.token,
        message: error.message,
      },
    };
  }
}

const index = (props) => {
  const router = useRouter();
  const { page, limit, search, sort, sortType } = router.query;
  const [searchQuery, setSearchQuery] = useState('');

  const decoded = jwtDecode(props.token);

  const handleSort = (e) => {
    let url = `/home/worker?`;

    const queryPage = page || '';
    if (queryPage) {
      url += `&page=${queryPage}`;
    }

    const queryLimit = limit || '';
    if (queryLimit) {
      url += `&limit=${queryLimit}`;
    }

    const querySearch = search || '';
    if (querySearch) {
      url += `&search=${querySearch}`;
    }

    const getSort = e.target.value;
    if (getSort === 'freelance') {
      url += `&sort=job_status&sortType=ASC`;
    } else if (getSort === 'fulltime') {
      url += `&sort=job_status&sortType=DESC`;
    } else {
      url += `&sort=${getSort}&sortType=ASC`;
    }

    router.push(url);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let url = `/home/worker?`;

    const queryPage = page || '';
    if (queryPage) {
      url += `&page=${queryPage}`;
    }

    const queryLimit = limit || '';
    if (queryLimit) {
      url += `&limit=${queryLimit}`;
    }

    const querySort = sort || 'name';
    if (querySort) {
      url += `&sort=${querySort}`;
    }

    const querySortType = sortType || 'ASC';
    if (querySortType) {
      url += `&sortType=${querySortType}`;
    }

    const querySearch = searchQuery || '';
    if (querySearch) {
      url += `&search=${querySearch}`;
    }

    router.push(url);
  };

  const handlePagination = (e) => {
    const selected = e.selected + 1;
    let url = `/home/worker?`;

    const queryPage = selected || page;
    if (queryPage) {
      url += `&page=${queryPage}`;
    }

    const queryLimit = limit || '';
    if (queryLimit) {
      url += `&limit=${queryLimit}`;
    }

    const querySearch = search || '';
    if (querySearch) {
      url += `&search=${querySearch}`;
    }

    const querySort = sort || 'name';
    if (querySort) {
      url += `&sort=${querySort}`;
    }

    const querySortType = sortType || 'ASC';
    if (querySortType) {
      url += `&sortType=${querySortType}`;
    }

    router.push(url);
  };

  return (
    <>
      <Header title="Home Page" />

      <TopJob />
      <section className={styles.search}>
        <div className="container">
          <div className="row justify-content-center px-0">
            <div className="col-12">
              {!props.data ? (
                <Card className={styles.card__empty}>
                  <Image src={NotFound} alt="Empty" width={400} />
                  <h2>Belum ada data pekerja</h2>
                </Card>
              ) : (
                <>
                  <div
                    className={`form-group position-relative ${styles.form__search}`}
                  >
                    <form onSubmit={handleSearch}>
                      <FormInput
                        append={
                          <div className={styles.input__column}>
                            <select
                              className="form-select"
                              onChange={handleSort}
                            >
                              <option value="created_at">Sort</option>
                              <option value="name">Nama</option>
                              <option value="domicile">Lokasi</option>
                              <option value="freelance">Freelance</option>
                              <option value="fulltime">Fulltime</option>
                            </select>
                            <Button
                              type="submit"
                              className={`btn ${styles.btn__search} d-none d-md-block`}
                            >
                              Search
                            </Button>
                          </div>
                        }
                        type="search"
                        placeholder="Search for any worker"
                        inputTextClassName={styles.input__sort}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </form>
                    {/* <Image
                src={IconSearch}
                alt="search"
                width={20}
                height={20}
                className={styles.icon__search}
              /> */}
                  </div>
                  {props.error ? (
                    <p className="text-center">Data tidak ditemukan</p>
                  ) : !props.data.length ? (
                    <ContentLoader />
                  ) : (
                    props.data.map((item) => (
                      <Card
                        className={styles.card__container}
                        key={item.user.id}
                      >
                        <div className={styles.card__content}>
                          <div className={styles.card__wrapper}>
                            <div className={styles.card__avatar}>
                              <Image
                                src={`https://drive.google.com/uc?export=view&id=${item.user.photo}`}
                                className={`${styles.card__image} img-cover rounded-circle`}
                                alt={item.user.name}
                                height={100}
                                width={100}
                                fallbackSrc={User}
                              />
                            </div>
                            <div className={styles.card__data}>
                              <h5 className={styles.card__name}>
                                {item.user.name
                                  ? item.user.name
                                  : 'User belum menentukan nama'}
                              </h5>
                              <p className={styles.card__job}>
                                {item.user.job_status
                                  ? item.user.job_status
                                  : 'User belum menentukan job status'}
                              </p>
                              <p className={styles.card__job}>
                                {item.user.job_desk
                                  ? item.user.job_desk
                                  : 'User belum menentukan jobdesk'}
                              </p>
                              <span className={styles.card__location}>
                                <Image
                                  src={IconLocation}
                                  alt="location"
                                  width={15}
                                  height={15}
                                  className={styles.card__icon}
                                />
                                &nbsp;
                                {item.user.domicile
                                  ? item.user.domicile
                                  : 'User belum menentukan lokasi'}
                              </span>
                              <div className={styles.card__badge}>
                                {item.skill.length === 0 ? (
                                  <div>User tidak memiliki skill</div>
                                ) : (
                                  item.skill.map((skill) => (
                                    <Button className={styles.card__button}>
                                      {skill.skill_name}
                                    </Button>
                                  ))
                                )}
                              </div>
                            </div>
                          </div>
                          <Link
                            href={
                              decoded.user_id === item.user.id
                                ? '/worker'
                                : `/worker/${item.user.id}`
                            }
                          >
                            <button className={`btn ${styles.card__view}`}>
                              Lihat Profile
                            </button>
                          </Link>
                        </div>
                        <div className="line w-100" />
                      </Card>
                    ))
                  )}

                  <div className={styles.card__pagination}>
                    <Pagination
                      previousLabel={
                        <>
                          <Image
                            src={IconPrevious}
                            alt="Previous"
                            width={20}
                            height={20}
                          />
                        </>
                      }
                      nextLabel={
                        <>
                          <Image
                            src={IconNext}
                            alt="Previous"
                            width={20}
                            height={20}
                          />
                        </>
                      }
                      breakLabel="..."
                      pageCount={props.pagination.totalPage}
                      onPageChange={handlePagination}
                      initialPage={Number(page) - 1}
                      containerClassName="homepage__pagination"
                      previousClassName="homepage__pagination-previous"
                      nextClassName="homepage__pagination-next"
                      pageClassName="homepage__pagination-previous"
                      activeClassName="home__pagination-active"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

index.layout = 'mainLayout';

export default index;
