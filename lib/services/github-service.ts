import { GitHubProfile, GitHubRepo } from "../../types/github";

export async function fetchGitHubProfile(username: string): Promise<GitHubProfile> {
  const response = await fetch(`/api/github/${username}`);
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  return response.json();
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`/api/github/${username}/repos`);
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  return response.json();
}