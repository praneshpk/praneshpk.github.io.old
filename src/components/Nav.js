import React from 'react';
import './Nav.scss';

export default function Nav({ anchors }) {
  return (
    <nav>
      {anchors.map((val) => (
        <li>
          <span>{val}</span>
          <a href={`#${val.toLowerCase()}`}>
            <svg height="24" width="24">
              <circle cx="12" cy="6" r="6" strokeWidth="3" />
            </svg>
          </a>
        </li>
      ))}
    </nav>
  );
}
