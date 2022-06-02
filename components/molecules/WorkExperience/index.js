import React from 'react';
import moment from 'moment';
import { Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { API_URL } from '../../../helpers/env';
import { deleteExperience } from '../../../store/actions/experience';

export default function index({ data }) {
  const handleDelete = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this experience',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#5e50a1',
      cancelButtonColor: '#fbb017',
      confirmButtonText: 'Yes, I sure',
    }).then(async (deleted) => {
      if (deleted.isConfirmed) {
        try {
          const res = await deleteExperience(id);
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
    <div className="row mt-5">
      <div className="row">
        {!data.length ? (
          <p className="text-center">Tidak ada pengalaman</p>
        ) : (
          data.map((item) => (
            <Card className="border-0" key={item.id}>
              <Card.Body className="p-0">
                <div className="col work__image">
                  <img
                    src={`${
                      item.image
                        ? `${API_URL}uploads/experience/${item.image}`
                        : `${API_URL}uploads/experience/default.png`
                    }`}
                    alt={item.company}
                  />
                  <div className="col-10 ps-5 work__content">
                    <h2>{item.position}</h2>
                    <h5>{item.company}</h5>
                    <h6>
                      {moment(item.start_date, 'YYYY-MM-DD').format(
                        'MMMM YYYY'
                      )}{' '}
                      -{' '}
                      {moment(item.end_date, 'YYYY-MM-DD').format('MMMM YYYY')}{' '}
                      <span>
                        {Number(
                          (moment(item.start_date, 'YYYY-MM-DD').diff(
                            item.start_date,
                            'YYYY-MM-DD'
                          ),
                          'months',
                          true)
                        )}
                        Month
                      </span>
                    </h6>
                    <p>{item.description}</p>
                    <hr />
                    <div className="experience__action">
                      <button
                        onClick={(e) => handleDelete(e, item.id)}
                        className="portofolio__action-delete"
                      >
                        <i className="far fa-trash-can" title="Delete Recipe" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
