import React, { useState, useEffect } from 'react';
import './Projects.scss';

export default function Projects() {
  const [repos, setRepos] = useState([]);


  useEffect(() => {
    (async () => {
      const query = `
        query {
          user(login:"praneshpk") {
            pinnedItems(first: 10, types:[REPOSITORY]) {
              nodes {
                ... on Repository {
                  name
                  id
                  description
                  homepageUrl
                  projectsUrl
                }
              }
            }
            topRepositories(first: 10, orderBy: {direction: ASC, field: PUSHED_AT}) {
              nodes {
                ... on Repository {
                  name
                  id
                  description
                  homepageUrl
                  projectsUrl
                }
              }
            }
          }
        }
      `;
      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            Authorization: 'token 3c2d7fe60a7729c6ee03b4db20fd83adb807394a',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
        const res = await response.json();
        console.log(res);
        if ('data' in res) {
          const resRepos = [
            ...res.data.user.pinnedItems.nodes,
            ...res.data.user.topRepositories.nodes.filter(Boolean),
          ];
          const uniqueRepos = [...new Set(resRepos.map((e) => e.id))]
            .map((e) => resRepos.find((j) => j.id === e))
            .slice(0, 12);
          console.log(uniqueRepos);
          setRepos(uniqueRepos.map((e) => (
            <figure key={e.id}>
              <a href={e.homepageUrl ? e.homepageUrl : e.projectsUrl}>{e.name}</a>
              <figcaption>{e.description}</figcaption>
            </figure>
          )));
        } else {
          setRepos(<p style={{ justifySelf: 'center' }}><a href="https://github.com/praneshpk/">Click here</a> to view my repositories!</p>);
        }
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
