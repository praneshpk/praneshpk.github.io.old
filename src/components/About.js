import React from 'react';
import './About.scss';

export default function About() {
  return (
    <section id="about">
      <div className="About">
        <p>Hi, I&apos;m <b>Pranesh Kamalakanthan!</b></p>
        <p>
          I graduated from <a href="https://www.csc.ncsu.edu/" style={{ color: 'var(--ansi-red)' }}>North Carolina State University</a> with
            a Bachelor&apos;s degree in <span style={{ color: 'var(--ansi-olive)' }}>Computer Science</span> and
            a concentration in <a href="#games" style={{ color: 'var(--ansi-lime)' }}>Game Development</a>.
            I currently work as a Software Engineer at <a href="https://www.sas.com/" style={{ color: 'var(--ansi-blue)' }}>SAS</a> and
            have spent a lot of time working in <a href="#design" style={{ color: 'var(--ansi-fuchsia)' }}>visual design</a>.
            In my spare time, I like to <a href="#music" style={{ color: 'var(--ansi-aqua)' }}>make music</a> and <a href="#learn" style={{ color: 'var(--ansi-yellow)' }}>learn</a> something new everyday!
          <span className="blinker">_</span>

        </p>
      </div>
    </section>
  );
}
