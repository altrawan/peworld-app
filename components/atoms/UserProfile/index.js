import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { getDetailWorker } from '../../../store/actions/worker';
import { getDetailRecruiter } from '../../../store/actions/recruiter';
import { API_URL } from '../../../helpers/env';

export default function UserProfile({ token }) {
  const dispatch = useDispatch();
  const worker = useSelector((state) => state.worker);
  const recruiter = useSelector((state) => state.recruiter);

  let decoded = '';
  if (token) {
    decoded = jwtDecode(token);
  }

  useEffect(() => {
    if (decoded.role) {
      dispatch(getDetailRecruiter(decoded.user_id));
    } else {
      dispatch(getDetailWorker(decoded.user_id));
    }
  }, []);

  if (decoded.role) {
    return (
      <>
        {recruiter.isLoading ? (
          <></>
        ) : recruiter.isError ? (
          <div>Error</div>
        ) : (
          <Link href="/recruiter">
            <div>
              <Image
                className="user__profile mb-0"
                srcImage={`${
                  recruiter.data?.user?.photo
                    ? `${API_URL}uploads/recruiter/${recruiter.data?.user?.photo}`
                    : `${API_URL}uploads/recruiter/default.png`
                }`}
                altImage={recruiter.data?.user?.name}
                imageClass="img-cover rounded-circle"
                imageWidth={40}
                imageHeight={40}
              />
            </div>
          </Link>
        )}
      </>
    );
  }

  return (
    <>
      {worker.isLoading ? (
        <></>
      ) : worker.isError ? (
        <div>Error</div>
      ) : (
        <Link href="/worker">
          <div>
            <Image
              className="user__profile mb-0"
              srcImage={`${
                recruiter.data?.user?.photo
                  ? `${API_URL}uploads/recruiter/${recruiter.data?.user?.photo}`
                  : `${API_URL}uploads/recruiter/default.png`
              }`}
              altImage={worker.data?.user?.name}
              imageClass="img-cover rounded-circle"
              imageWidth={40}
              imageHeight={40}
            />
          </div>
        </Link>
      )}
    </>
  );
}
