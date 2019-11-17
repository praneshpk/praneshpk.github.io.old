import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

export default function About() {
  return (
    <section>
      <div className="About">
        <p>Hi, I&apos;m <b>Pranesh Kamalakanthan!</b></p>
        <p>
          I graduated from <a href="https://www.csc.ncsu.edu/">North Carolina State University</a> with
            a Bachelor&apos;s degree in <b>Computer Science</b> and
            a concentration in <Link to="/games">Game Development</Link>.
            I currently work as a Software Engineer at <a href="https://www.sas.com/">SAS</a> and
            have spent a lot of time working in <Link to="/design">visual design</Link>.
            In my spare time, I like to <Link to="/music">make music</Link> and <Link to="/learn">learn</Link> something new everyday!
        </p>
      </div>
    </section>
  );
}
