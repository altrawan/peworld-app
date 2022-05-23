import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BrandLogo from '../BrandLogo';
import Button from '../Button';
import UserProfile from '../UserProfile';

const index = ({ token = false }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const login = () => {
    router.push('/worker/login');
  };

  const register = () => {
    router.push('/worker/register');
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <BrandLogo />
          </div>
          <Button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <Image src="/icons/icon-close.svg" width={18} height={18} />
            ) : (
              <Image src="/icons/icon-toggler.svg" width={25} height={25} />
            )}
          </Button>
          <div className={`${!isOpen ? 'collapse' : ''} navbar-collapse`}>
            <ul className="navbar-nav ms-auto">
              {token ? (
                <>
                  <li className="nav-item">
                    <Button className="btn">
                      <Image
                        src="/icons/icon-bell.svg"
                        width={30}
                        height={30}
                      />
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button className="btn mx-3">
                      <Image
                        src="/icons/icon-mail.svg"
                        width={30}
                        height={30}
                      />
                    </Button>
                  </li>

                  <UserProfile />
                </>
              ) : (
                <>
                  <Button
                    className="btn btn__action signin me-md-4"
                    onClick={login}
                  >
                    Masuk
                  </Button>
                  <Button
                    className="btn btn__action signup mx-md-3"
                    onClick={register}
                  >
                    Daftar
                  </Button>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;
