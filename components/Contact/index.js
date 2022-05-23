import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy; 2022 Peworld. All right reserved
        </p>
        <p className="footer__info">
          <Link href="tel:+620123456789" target="_blank">
            Telepon
          </Link>
          <Link href="mailto:support@peworld.com" target="_blank">
            Email
          </Link>
        </p>
      </div>
    </footer>
    // <Container fluid className="footer-start">
    //   <Row>
    //     <Col md={4}>
    //       <img
    //         src="/images/logo-white.svg"
    //         alt="Preworld Hire"
    //         className="footer-logo"
    //       />
    //       <p>
    //         Temukan developer berbakat &amp; terbaik di berbagai bidang keahlian
    //       </p>
    //     </Col>
    //   </Row>
    //   <hr />
    //   <Row className="footer-end">
    //     <div className="footer-item">
    //       <div className="footer-left">
    //         <p>&copy; 2022 Preworld. All right reserved</p>
    //       </div>
    //       <div className="footer-right">
    //         <p className="footer-right-phone">Telepon</p>
    //         <p>Email</p>
    //       </div>
    //     </div>
    //   </Row>
    // </Container>
  );
};

export default index;
