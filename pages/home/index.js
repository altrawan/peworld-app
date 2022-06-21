import React from 'react';
import axios from 'axios';
import ContentLoader from 'react-content-loader';
import { useRouter } from 'next/router';
import Pagination from 'react-paginate';
import Link from 'next/link';
import TopJob from 'components/atoms/TopJob';
import Header from 'components/atoms/Header';
import Button from 'components/atoms/Button';
import styles from 'styles/Home.module.css';
import FormInput from 'components/atoms/FormInput';
import Card from 'components/atoms/Card';
import Image from 'components/atoms/Image';
import { getDataCookie } from 'middlewares/authorization';
import { API_URL } from 'helpers/env';

export async function getServerSideProps(context) {
  try {
    const storageCookie = await getDataCookie(context);
    if (!storageCookie.token) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    }

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

const index = (props) => {
  const router = useRouter();
  const { page, limit, search, sort, sortType } = router.query;
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSort = (e) => {
    let url = `/home?`;

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
    let url = `/home?`;

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
    let url = `/home?`;

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
            <div
              className={`form-group position-relative ${styles.form__search}`}
            >
              <form onSubmit={handleSearch}>
                <FormInput
                  append={
                    <div className={styles.input__column}>
                      <select className="form-select" onChange={handleSort}>
                        <option value="name">Sort</option>
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
              {/* <img
              src="/icons/icon-search.svg"
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
                <Card className={styles.card__container} key={item.user.id}>
                  <div className={styles.card__content}>
                    <div className={styles.card__wrapper}>
                      <Image
                        srcImage={item.user.photo}
                        className={styles.card__image}
                        altImage={item.user.name}
                        imageClass="img-cover rounded-circle"
                        imageWidth={100}
                        imageHeight={100}
                      />
                      <div className={styles.card__data}>
                        <h5 className={styles.card__name}>{item.user.name}</h5>
                        <p className={styles.card__job}>{item.user.job_desk}</p>
                        <span className={styles.card__location}>
                          <img
                            src="/icons/icon-location.svg"
                            alt="location"
                            width={15}
                            height={15}
                            className={styles.card__icon}
                          />
                          {item.user.domicile}
                        </span>
                        <div className={styles.card__badge}>
                          {item.skill.map((skill) => (
                            <Button className={`btn ${styles.card__button}`}>
                              {skill.skill_name}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Link href={`/worker/${item.user.id}`}>
                      <button className={`btn ${styles.card__view}`}>
                        Lihat Profile
                      </button>
                    </Link>
                  </div>
                  <div className="line w-100" />
                </Card>
              ))
            )}

            <Pagination
              previousLabel={
                <>
                  <img
                    src="/icons/icon-previous.svg"
                    alt="Previous"
                    width={20}
                    height={20}
                  />
                </>
              }
              nextLabel={
                <>
                  <img
                    src="/icons/icon-next.svg"
                    alt="Previous"
                    width={20}
                    height={20}
                  />
                </>
              }
              breakLabel="..."
              pageCount={props.pagination.totalPage}
              onPageChange={handlePagination}
              initialPage={Number(page)}
              containerClassName="homepage__pagination"
              previousClassName="homepage__pagination-previous"
              nextClassName="homepage__pagination-next"
              pageClassName="homepage__pagination-previous"
              activeClassName="home__pagination-active"
            />
          </div>
        </div>
      </section>
    </>
  );
};

index.layout = 'mainLayout';

export default index;
