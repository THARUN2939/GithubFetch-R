import axios from "axios";

const url = "https://api.github.com/users";

export const fetchData = async (username) => {
  console.log(`in API with username: ${username}`);
  const changeableUrl = `${url}/${username}`;
  try {
    const { data } = await axios.get(changeableUrl);
    console.log(data.message);
    if (data.message) {
      const modifiedData = {
        message: data.message,
      };
      return modifiedData;
    }
    const modifiedData = {
      username: data.login,
      avatar: data.avatar_url,
      url: data.html_url,
      repos: data.repos_url,
      name: data.name,
      company: data.company,
      blog: data.blog,
      location: data.location,
      bio: data.bio,
      twitter: data.twitter_username,
      followers: data.followers,
      following: data.following,
      created: data.created_at,
      total_repos: data.public_repos,
      
      message: "",
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRepos = async (username) => {
  const { data } = await axios.get(`${url}/${username}`);
  const check = data.public_repos;
  var urlArray = [];
  if (check === 0) {
    urlArray = [];
    return 0;
  }
  const repos = await axios.get(`${url}/${username}/repos`);
  for (var i = 0; i < check; i++) {
    urlArray[i] = repos.data[i];
    console.log(repos.data[i]);
  }
  return urlArray;
};

export const fetchRemainingRequests = async () => {
  const {data}= await axios.get("https://api.github.com/rate_limit");
  console.log(data.rate);
  return data.rate;
}
