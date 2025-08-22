import { useState, useEffect } from 'react';
import { GitHubProfile } from '@/types';  // Import from the root types directory
import { fetchGitHubProfile, fetchGitHubRepos } from '@/lib/services/github-service';  // Updated path to use alias and correct location

export function useGitHubProfiles(usernames: string[]) {
  const [profiles, setProfiles] = useState<(GitHubProfile | null)[]>(Array(usernames.length).fill(null));
  const [loading, setLoading] = useState<boolean[]>(Array(usernames.length).fill(true));
  const [errors, setErrors] = useState<(string | null)[]>(Array(usernames.length).fill(null));
  const [reposLoading, setReposLoading] = useState<boolean[]>(Array(usernames.length).fill(false));

  useEffect(() => {
    const fetchProfiles = async () => {
      const profilePromises = usernames.map(async (username, index) => {
        try {
          const data = await fetchGitHubProfile(username);
          
          setProfiles(prev => {
            const updated = [...prev];
            updated[index] = data;
            return updated;
          });
          
          setLoading(prev => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
          });
        } catch (err) {
          console.error(`Failed to fetch GitHub profile for ${username}:`, err);
          
          setErrors(prev => {
            const updated = [...prev];
            updated[index] = 'Failed to load GitHub profile';
            return updated;
          });
          
          setLoading(prev => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
          });
        }
      });
      
      await Promise.all(profilePromises);
    };

    fetchProfiles();
  }, [usernames]);

  const fetchUserRepos = async (username: string, index: number) => {
    setReposLoading(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });

    try {
      const repos = await fetchGitHubRepos(username);
      
      setProfiles(prev => {
        const updated = [...prev];
        if (updated[index]) {
          updated[index] = {
            ...updated[index]!,
            repos
          };
        }
        return updated;
      });
    } catch (err) {
      console.error(`Failed to fetch repositories for ${username}:`, err);
    } finally {
      setReposLoading(prev => {
        const updated = [...prev];
        updated[index] = false;
        return updated;
      });
    }
  };

  return {
    profiles,
    loading,
    errors,
    reposLoading,
    fetchUserRepos
  };
}