import React from 'react';
import Nav from './Nav';
import './Profile.scss';

export default function Profile({ anchors = [] }) {
  return (
    <main>
      <div className="Profile">
        {/* <a href="#about">
          <figure style={{ backgroundImage: 'url(./assets/me.jpg)' }} />
        </a> */}
        <ul className="links">
          <li>
            <a href="https://github.com/praneshpk">
              <img src="./assets/git.svg" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="mailto:praneshpk@gmail.com">
              <img src="./assets/mail.svg" alt="Email" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pranesh-k/">
              <img src="./assets/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
        </ul>
        {/* <button className="accent-btn">Scroll down to see my projects!</button> */}
      </div>
      {anchors && <Nav anchors={anchors} />}
    </main>
  );
}
