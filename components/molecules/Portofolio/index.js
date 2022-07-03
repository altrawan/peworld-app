/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button, Carousel } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Portofolio, Empty } from 'assets';
import { Image } from 'components';
import { deletePortofolio } from 'store/actions/portofolio';

export default function index({ data }) {
  const [modalShow, setModalShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this portofolio',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#5e50a1',
      cancelButtonColor: '#fbb017',
      confirmButtonText: 'Yes, I sure',
    }).then(async (deleted) => {
      if (deleted.isConfirmed) {
        try {
          const res = await deletePortofolio(id);
          Swal.fire({
            title: 'Success',
            text: res.message,
            icon: 'success',
          });
          window.location.reload();
        } catch (err) {
          Swal.fire({
            title: 'Failed',
            text: err.response.data.message,
            icon: 'error',
          });
        }
      }
    });
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Portofolio Images
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {props.images.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={`https://drive.google.com/uc?export=view&id=${item.image}`}
                  alt={item.image}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5">
      {!data.length ? (
        <div
          className="d-flex flex-column align-items-center w-100"
          style={{ marginTop: '-60px' }}
        >
          <Image src={Empty} alt="Empty" width={250} height={450} />
          <h3 style={{ marginTop: '-90px', fontWeight: '600' }}>
            Tidak ada portofolio
          </h3>
        </div>
      ) : (
        data.map((item, index) => (
          <Col key={index}>
            <Card className="border-0">
              <Card.Body className="p-0">
                <Image
                  src={`https://drive.google.com/uc?export=view&id=${item.image[0].image}`}
                  alt={item.project.name}
                  width={250}
                  height={150}
                  fallbackSrc={Portofolio}
                  onClick={() => setModalShow(true)}
                />
                <p className="text-center mt-1">{item.project.app_name}</p>
                <div className="portofolio__action">
                  <button
                    onClick={(e) => handleDelete(e, item.project.id)}
                    className="portofolio__action-delete"
                  >
                    <i className="far fa-trash-can" title="Delete Recipe" />
                  </button>
                </div>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  images={item.image}
                />
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
}
