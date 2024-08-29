import React, { Component } from "react";
import { fetchData, fetchRepos, fetchRemainingRequests } from "./api";

import { Stats, Search, Repos } from "./components";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
    repos: [],
    userInput: "",
    request: {}
  };
  async componentDidMount() {
    const requestsRemaining = await fetchRemainingRequests();
    const fetchedData = await fetchData("Tharoff2939");
    this.setState({request: requestsRemaining}, () => console.log(this.state.request));
    this.setState({ data: fetchedData });
  }

  handleSearch = (e) => {
    this.setState({ userInput: e }, () =>
      console.log(`UserInput: ${this.state.userInput}`)
    );
  };

  profileChange = async () => {
    const fetchRequests = await fetchRemainingRequests();
    this.setState({ request: fetchRequests });
    const fetchedData = await fetchData(this.state.userInput);
    if (fetchedData === undefined) {
      console.log("User not found");
      this.setState({ data: { message: "404" } });
      this.setState({ repos: ""});
    } else {
      const fetchedRepos = await fetchRepos(this.state.userInput);
      this.setState({ data: fetchedData });
      if (fetchedRepos) {
        this.setState({ repos: fetchedRepos }, () =>
          console.log(this.state.repos)
        );
        console.log(fetchedRepos);
      } else {
        this.setState({ repos: "" });
      }
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.requests}>
          Remaining Requests: {this.state.request.remaining}/{this.state.request.limit}
        </div>
        <a href="https://github.com/THARUN2939/GithubFetch-R" target="_blank" rel="noopener noreferrer">
          <svg width="80" height="80" viewBox="0 0 250 250" style={{fill:"rgb(82, 82, 255)", color: "rgb(10, 2, 61)", position: "absolute", top: "0", border: "0", right: "0"}}>
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: "130px 106px"}} class="octo-arm"></path>
            <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
          </svg>
        </a>
        <Search
          profileChange={this.profileChange}
          handleSearch={this.handleSearch}
        />
        <Stats data={this.state.data} />
        <Repos repos={this.state.repos} username={this.state.data.username} />
        <footer>
          <div className={styles.top}>
            Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.JS</a>
          </div>
          <div className={styles.bottom}>
            <a href="https://github.com/THARUN2939">GitHub</a>
            <a href="https://www.instagram.com/tharun_ravuru/">Instagram</a>
            <a href="https://twitter.com/tharun2939">Twitter</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
