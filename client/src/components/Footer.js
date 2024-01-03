import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import FooterList from '../constants/FooterList';
import FooterListDemo from '../constants/FooterListDemo';

export default function Top() {
  return (
    <div>
      <div className="footer-container">
        <ul>
          {Object.entries(FooterListDemo).map(([key, val]) => (
            <li>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={'/' + val}
              >
                {key}
              </Link>
            </li>
          ))}
          {/* {FooterList.map((i) => (
            <li>
              <Link to={'/' + i}>{i}</Link>
            </li>
          ))} */}
          {/* <li>All rights reserved by John</li> */}
        </ul>
        <p>All rights reserved by John</p>
      </div>
    </div>
  );
}
