import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { getDetailWorker } from 'store/actions/worker';
import { getDetailRecruiter } from 'store/actions/recruiter';
import { Image } from 'components';
import { User } from 'assets';

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
                className="user__profile mb-0 img-cover rounded-circle"
                src={`https://drive.google.com/uc?export=view&id=${recruiter.data?.user?.photo}`}
                alt={recruiter.data?.user?.name}
                width={40}
                height={40}
                fallbackSrc={User}
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
              className="user__profile mb-0 img-cover rounded-circle"
              src={`https://drive.google.com/uc?export=view&id=${worker.data?.user?.photo}`}
              alt={worker.data?.user?.name}
              width={40}
              height={40}
              fallbackSrc={User}
            />
          </div>
        </Link>
      )}
    </>
  );
}
