import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops, The Page you are looking for can&apos;t be found!</h2>
        <form className="notfound-search">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </form>
        <span className="arrow" />
        <Link href="/">Return To Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
