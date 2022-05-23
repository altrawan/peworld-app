/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'react-paginate';
import { useRouter } from 'next/router';
import { getAllWorker } from '../../redux/actions/workerAll';
import Button from '../Button';
import Card from '../Card';
import styles from '../../styles/List.module.css';
import FormInput from '../FormInput';
import Image from '../Image';
import { NODE_ENV, API_DEV, API_PROD } from '../../helpers/env';

export default function index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const workerAll = useSelector((state) => state.workerAll);
  // const { skillWorker } = useSelector((state) => state);
  // const { search } = router.query;

  useEffect(() => {
    dispatch(getAllWorker(1, 4, 'name', 'ASC'));
  }, []);

  const handlePagination = (event) => {
    const countPage = event.selected + 1;
    dispatch(getAllWorker(countPage, 4, 'name', 'ASC'));
    router.push(`/home?page=${countPage}&limit=4`);
  };

  // const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className={styles.search}>
      <div className="container">
        <div className="row justify-content-center px-0">
          <div
            className={`form-group position-relative ${styles.form__search}`}
          >
            <FormInput
              append={
                <div className={styles.input__column}>
                  <Dropdown>
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                      Sort
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Sortir Berdasarkan Nama
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Sortir Berdasarkan Skill
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Sortir Berdasarkan Lokasi
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Sortir Berdasarkan freelance
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-5">
                        Sortir Berdasarkan fulltime
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <li
                    className={styles.drop__nav}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <Button className="btn d-block d-md-none p-0">
                      <img
                        src="/icons/icon-list.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </Button>
                    <Button
                      className={`btn px-md-4 ${styles.btn__sort} d-none d-md-block`}
                    >
                      <img
                        src="/icons/icon-polygon.svg"
                        alt=""
                        width={10}
                        height={10}
                        className={
                          isOpen ? 'polygon clicked' : 'polygon not-clicked'
                        }
                      />
                      Sort
                    </Button>
                    <ul className={isOpen ? 'dropdown clicked' : 'dropdown'}>
                      <li className="nav-item">
                        <Button className="btn nav-link">
                          Sortir berdasarkan nama
                        </Button>
                      </li>
                    </ul>
                  </li> */}
                  <Button
                    className={`btn ${styles.btn__search} d-none d-md-block`}
                  >
                    Search
                  </Button>
                </div>
              }
              placeholder="Search for any skill"
              inputTextClassName={styles.input__sort}
              name="skillName"
            />
            <img
              src="/icons/icon-search.svg"
              alt="search"
              width={20}
              height={20}
              className={styles.icon__search}
            />
          </div>
          {workerAll.isLoading ? (
            <ContentLoader />
          ) : workerAll.isError ? (
            <div>{workerAll.message}</div>
          ) : (
            workerAll.data.map((item) => (
              <Card className={styles.card__container} key={item.id}>
                <div className={styles.card__content}>
                  <div className={styles.card__wrapper}>
                    <Image
                      srcImage={`${
                        NODE_ENV === 'development'
                          ? `${API_DEV}uploads/users/${item.photo}`
                          : `${API_PROD}uploads/users/${item.photo}`
                      }`}
                      className={styles.card__image}
                      altImage={item.name}
                      W
                      imageClass="img-cover rounded-circle"
                      imageWidth={100}
                      imageHeight={100}
                      onError={(e) => {
                        e.target.src = `${API_PROD}uploads/users/profile-default.png`;
                      }}
                    />
                    <div className={styles.card__data}>
                      <h5 className={styles.card__name}>{item.name}</h5>
                      <p className={styles.card__job}>{item.job_desk}</p>
                      <span className={styles.card__location}>
                        <img
                          src="/icons/icon-location.svg"
                          alt="location"
                          width={15}
                          height={15}
                          className={styles.card__icon}
                        />
                        {item.domicile}
                      </span>
                      <div className={styles.card__badge}>
                        <Button className={`btn ${styles.card__button}`}>
                          PHP
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button className={`btn ${styles.card__view}`}>
                    Lihat Profile
                  </Button>
                </div>
                <div className="line w-100" />
              </Card>
            ))
          )}

          <Pagination
            previousLabel={false}
            nextLabel={false}
            breakLabel="..."
            pageCount={2}
            onPageChange={handlePagination}
            containerClassName="pagination justify-content-center p-0"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            disabledClassName="disabled"
            activeClassName="active"
          />
        </div>
      </div>
    </section>
  );
}
