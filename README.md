# GithubFetch-R

![Project screenshot](assets/screenshot-1.png)

A small web project to fetch and display GitHub repository data in the browser.

## Overview

GithubFetch-R is a front-end application (HTML, CSS, JavaScript) that queries the GitHub REST API to fetch repository metadata and presents it in a clean, responsive UI.

## Demo screenshot

Include screenshots in the `assets/` directory and reference them from this README. Example files to add:

- assets/screenshot-1.png — main app view (recommended size: 1200×700)
- assets/screenshot-2.png — mobile/tablet view (recommended size: 600×800)

Add images to the repository and they will render here as:

![App screenshot](assets/screenshot-1.png)

## Features

- Fetch repository details (name, description, stars, forks, language, last updated)
- Search for repositories by owner/name
- Responsive layout suitable for desktop and mobile

## Technologies

- JavaScript (vanilla)
- HTML
- CSS

## Exact wording for the project description (use this on project page)

"GithubFetch-R is a lightweight front-end tool that makes it easy to fetch and visualize GitHub repository metadata using the GitHub REST API. It requires no back-end and works entirely in the browser for public repositories."

## Installation (exact commands)

1. Clone the repository:

   git clone https://github.com/THARUN2939/GithubFetch-R.git
   cd GithubFetch-R

2. Start a local static server (choose one):

- Using Node (http-server):

  npm install --global http-server
  http-server -c-1

- Using npx (no global install):

  npx http-server -c-1

- Using Python 3:

  python3 -m http.server 8000

- Using VS Code Live Server: Open the folder in VS Code and click "Go Live" (Live Server extension required).

Then open your browser at http://localhost:8080 (http-server default) or http://localhost:8000 (Python default).

## Running in development

- Edit the files in the repository (index.html, styles.css, src/*.js).
- Use your browser devtools (Console & Network) to inspect API calls and debug.

## GitHub API and authentication (optional)

- For public repository reads, no authentication is required.
- To increase API rate limits or access private repos, create a GitHub Personal Access Token (PAT) and configure the client to send it in the Authorization header.

Example (browser fetch with a token stored in an environment variable when serving from a development server):

```js
// WARNING: Never commit secrets to the repo. Use environment variables or a secure server.
const headers = {};
if (process.env.GITHUB_TOKEN) {
  headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
}
fetch('https://api.github.com/repos/owner/repo', { headers })
  .then(res => res.json())
  .then(data => console.log(data));
```

If you prefer a simple local approach, run a small proxy server that injects the token into requests so the token is never checked into source control.

## Screenshots — exact wording and captions

- "Main view showing repository details and summary" — use as caption for `assets/screenshot-1.png`.
- "Mobile view" — caption for `assets/screenshot-2.png`.

To include a screenshot in the README, add the file to `assets/` and keep the relative path; GitHub will render it automatically.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to your branch: `git push origin feat/your-feature`.
5. Open a Pull Request describing your changes.

## Suggested images to include (exact filenames)

- assets/screenshot-1.png — desktop main view
- assets/screenshot-2.png — mobile responsive view
- assets/flow-diagram.png — optional, shows request flow (client → GitHub API → client)

Recommended alt text for accessibility:

- "GithubFetch-R main app screenshot"
- "GithubFetch-R mobile screenshot"

## License

Add a LICENSE file to explicitly choose a license (e.g., MIT). If you want, I can add an MIT license file for you.

## Contact

Created by Tharun Ravuru — https://github.com/THARUN2939
