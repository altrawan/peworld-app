import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { API_URL } from '../../../helpers/env';
import { deletePortofolio } from '../../../store/actions/portofolio';

export default function index({ data }) {
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

  return (
    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5">
      {!data.length ? (
        <p className="text-center">Tidak ada portfolio</p>
      ) : (
        data.map((item) => (
          <Col key={item.id}>
            <Card className="border-0">
              <Card.Body className="p-0">
                <img
                  src={`${
                    item.image
                      ? `${API_URL}uploads/portofolio/${item.image}`
                      : `${API_URL}uploads/portofolio/default.png`
                  }`}
                  alt={item.name}
                  style={{ width: 'auto', height: '124px' }}
                />
                <p className="text-center mt-1">{item.app_name}</p>
                <div className="portofolio__action">
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="portofolio__action-delete"
                  >
                    <i className="far fa-trash-can" title="Delete Recipe" />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
}
