import React, { useEffect } from 'react';
import './Nav.scss';

export default function Nav({ links = [] }) {
  document.onkeypress = (e) => {
    for (let i = 0; i < links.length; i++) {
      if (e.key === links[i][0].toLowerCase()) {
        window.location.hash = `#${links[i].toLowerCase()}`;
        break;
      }
    }
  };
  return (
    <nav>
      <ul>
        {links.map((e) => (
          <li>
            <a href={`#${e.toLowerCase()}`}>{e}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
