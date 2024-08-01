import React from "react";
import styles from "./Repos.module.css";

const Repos = ({ repos, username }) => {
  console.log(repos);
  if (!repos) {
    return <div>{console.log("No repos are Present")}</div>;
  } else if (username === "example") {
    return (
      <div className={styles.temp}>
        Enter the Username to view the Repositories!
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h2>Repositories</h2>
      <div className={styles.repocontainer}>
        {repos.map((repo, index) => (
          repo && (
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <div className={styles.repocard} key={index}>
                <div className={styles.reponame}>
                  <p>
                    <i className="fas fa-book"></i>
                    {repo.name}
                  </p>
                </div>
                <div className={styles.repodetail}>
                  <div>
                    {repo.language ? (
                      <span className={styles.repolanguage}>{repo.language}</span>
                    ) : null}
                    <span className={styles.repostars}>
                      <i className="fas fa-star"></i>
                      {repo.stargazers_count}
                    </span>
                    <span className={styles.forks}>
                      <i className="fas fa-code-branch"></i>
                      {repo.forks}
                    </span>
                  </div>
                  <span className={styles.reposize}>{repo.size} KB</span>
                </div>
              </div>
            </a>
          )
        ))}
      </div>
    </div>
  );
};

export default Repos;
