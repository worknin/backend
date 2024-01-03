import React from 'react';
import '../assets/css/Card.css';

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="small-block">
          <p>Rupees</p>
        </div>
        <img
          src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
          alt=""
        />
        <div class="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </>
  );
}
