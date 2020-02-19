import React, { useState, useEffect } from 'react';
import './Projects.scss';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://api.github.com/users/praneshpk/repos', {
          method: 'GET',
        });
        const res = await response.json();
        if (Array.isArray(res)) {
          setRepos(res.map((e) => (
            <figure key={e.id}>
              <a href={e.homepage ? e.homepage : e.html_url}>{e.name}</a>
            </figure>
          )));
        } else {
          setRepos(<p style={{ justifySelf: 'center' }}><a href="https://github.com/praneshpk/">Click here</a> to view my repositories!</p>);
        }
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <section id="projects">
      <div className="Projects">
        { repos }
      </div>
    </section>
  );
}
