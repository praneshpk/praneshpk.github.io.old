import React from 'react';
import './About.scss';

export default function About() {
  return (
    <section id="about">
      <div className="About">
        <p>Hi, I&apos;m <b>Pranesh Kamalakanthan!</b></p>
        <p>
          I graduated from <a href="https://www.csc.ncsu.edu/">North Carolina State University</a> with
            a Bachelor&apos;s degree in <b>Computer Science</b> and
            a concentration in <a href="#games">Game Development</a>.
            I currently work as a Software Engineer at <a href="https://www.sas.com/">SAS</a> and
            have spent a lot of time working in <a href="#design">visual design</a>.
            In my spare time, I like to <a href="#music">make music</a> and <a href="#learn">learn</a> something new everyday!
        </p>
      </div>
    </section>
  );
}
