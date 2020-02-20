import React, { useState, useEffect } from 'react';
import './Projects.scss';

export default function Projects() {
  const [repos, setRepos] = useState('Loading projects...');

  async function retrieveRepos() {
    try {
      const response = await fetch('https://api.github.com/users/praneshpk/repos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
      console.log(res);
      if (Array.isArray(res)) {
        return res.map((e) => (
          <figure key={e.id}>
            <a href={e.homepage ? e.homepage : e.html_url}>{e.name}</a>
            <figcaption>{e.description}</figcaption>
          </figure>
        ));
      }
    } catch (e) {
      console.log(e);
    }
    return (<p style={{ justifySelf: 'center' }}><a href="https://github.com/praneshpk/">Click here</a> to view my repositories!</p>);
  }

  useEffect(() => {
    (async () => {
      setRepos(await retrieveRepos());
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
