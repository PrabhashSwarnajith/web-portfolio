const GITHUB_USERNAME = 'PrabhashSwarnajith';
const GITHUB_API = 'https://api.github.com/users/' + GITHUB_USERNAME;

export const getGitHubStats = async () => {
  try {
    const response = await fetch(GITHUB_API);
    if (!response.ok) throw new Error('Failed to fetch');

    const data = await response.json();
    return {
      repositories: data.public_repos,
      followers: data.followers,
      following: data.following,
      location: data.location,
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return {
      repositories: 0,
      followers: 0,
      following: 0,
      location: null,
    };
  }
};

export const getGitHubRepositories = async () => {
  try {
    const response = await fetch(
      `${GITHUB_API}/repos?type=owner&sort=updated&per_page=100`
    );
    if (!response.ok) throw new Error('Failed to fetch');

    const repos = await response.json();
    return repos.filter(repo => !repo.fork).slice(0, 6);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};
