import React from 'react';
import './Profile.scss';

export default function Profile() {
  return (
    <main>
      <div className="Profile">
        <figure style={{ backgroundImage: 'url(./assets/me.jpg)' }} />
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
        <button className="accent-btn">Scroll down to see my projects!</button>
      </div>
    </main>
  );
}