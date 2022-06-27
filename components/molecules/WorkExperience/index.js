import React from 'react';
import moment from 'moment';
import { Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Experience, Empty } from 'assets';
import { Image } from 'components';
import { deleteExperience } from 'store/actions/experience';

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
          <div className="d-flex flex-column align-items-center w-100">
            <Image src={Empty} alt="Empty" width={250} height={450} />
            <h3 style={{ marginTop: '-90px', fontWeight: '600' }}>
              Tidak ada pengalaman
            </h3>
          </div>
        ) : (
          data.map((item) => (
            <Card className="border-0" key={item.id}>
              <Card.Body className="p-0">
                <div className="col work__image">
                  <Image
                    src={`https://drive.google.com/uc?export=view&id=${item.image}`}
                    alt={item.company}
                    width={100}
                    height={100}
                    fallbackSrc={Experience}
                  />
                  <div className="col-10 ps-5 work__content">
                    <h2>{item.position}</h2>
                    <h5>{item.company}</h5>
                    <h6>
                      {moment(item.start_date, 'YYYY-MM-DD').format(
                        'MMMM YYYY'
                      )}{' '}
                      -{' '}
                      {moment(item.end_date, 'YYYY-MM-DD').format('MMMM YYYY')}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        {moment
                          .duration(
                            moment(item.end_date).diff(moment(item.start_date))
                          )
                          .months()}
                        &nbsp; Month
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
