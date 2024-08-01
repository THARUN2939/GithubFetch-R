import React from "react";
import styles from "./Stats.module.css";

const Stats = ({ data }) => {
  if (data.message !== "404") {
    const a = new Date(data.created).toDateString().split(" ");
    console.log(`Name of the user: ${data.username}`);
    if (data.username === "example") var condition = true;
    return (
      <div className={styles.container}>
        <img src={data.avatar} alt={data.username} />
        <h2>{data.name}</h2>
        {console.log(data.url)}
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          @{data.username}
        </a>
        <p>
          <i className="far fa-calendar-alt"></i> Joined {a[1]} {a[2]}, {a[3]}
        </p>
        <div className={styles.infocards}>
          <div className={styles.infocard}>
            <div className={styles.infonumber}>
              <p>{data.total_repos}</p>
            </div>
            <div className={styles.infoname}>
              <p>Repositories</p>
            </div>
          </div>
          <div className={styles.infocard}>
            <div className={styles.infonumber}>
              <p>{data.followers}</p>
            </div>
            <div className={styles.infoname}>
              <p>Followers</p>
            </div>
          </div>
          <div className={styles.infocard}>
            <div className={styles.infonumber}>
              <p>{data.following}</p>
            </div>
            <div className={styles.infoname}>
              <p>Following</p>
            </div>
          </div>
        </div>
        {condition ? (
          <div></div>
        ) : (
            <div className={styles.details}>
              <div className={styles.topDetail}>
              <p>
                Name : <span>{data.name}</span>
              </p>
              <p>
                Username: <span>{data.username}</span>
              </p>
              {data.blog && (
                <p>
                  Blog : <span>{data.blog}</span>
                </p>
              )}
              {data.twitter && (
                <p>Twitter: <a href={`https://twitter.com/${data.twitter}`} target="_blank" rel="noopener noreferrer"><span>{data.twitter}</span></a></p>
              )}
              </div>
              { data.bio && (
                <div className={styles.bio}>
                  <p>Bio: <span>{data.bio}</span>
                  </p>
                </div>
              )}
            </div>
        )}
      </div>
    );
  } else if (data.message === "404") {
    console.log("User Not found!");
    return (
      <div className={styles.notFound}>
        <h1>User Not Found!</h1>
      </div>
    );
  } else {
    console.log("Data is Loading...");
    return (
      <div className={styles.container}>
        <h1>Data is loading...</h1>
      </div>
    );
  }
};

export default Stats;
