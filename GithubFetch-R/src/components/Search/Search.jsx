import React from "react";

import styles from "./Search.module.css";

const Search = ({ profileChange, handleSearch }) => {
  return (
    <div className={styles.container}>
      <i
        className="fab fa-github fa-5x"
        style={{ color: "rgb(82, 82, 255)" }}
      ></i>
      <form
        onSubmit={(e) => {
          profileChange();
          e.preventDefault();
        }}
      >
        <label htmlFor="username">Enter Username:</label>
        <input
          type="text"
          id="username"
          defaultValue=""
          autoComplete="off"
          placeholder="Enter GitHub Username Here"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <input type="submit" value="Find" />
      </form>
    </div>
  );
};

export default Search;
