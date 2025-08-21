"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useState, useEffect, useMemo } from "react"

interface GitHubProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

export default function Home() {
  
  const githubUsernames = useMemo(() => ['SimonPortillo', 'mgoberg', 'Azders', 'UngeBakern', 'jmanneraak'], []);
  
  const [profiles, setProfiles] = useState<(GitHubProfile | null)[]>(Array(githubUsernames.length).fill(null));
  const [loading, setLoading] = useState<boolean[]>(Array(githubUsernames.length).fill(true));
  const [errors, setErrors] = useState<(string | null)[]>(Array(githubUsernames.length).fill(null));

  useEffect(() => {
    const fetchGitHubProfiles = async () => {
      const profilePromises = githubUsernames.map(async (username, index) => {
        try {
          // Call our local API route instead of GitHub's API directly
          const response = await fetch(`/api/github/${username}`);
          
          if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
          }
          
          const data = await response.json();
          
          // Update the specific profile in the state arrays
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

    fetchGitHubProfiles();
  }, [githubUsernames]);

  return (
    <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {githubUsernames.map((username, index) => (
        <Card key={username} className="flex flex-col">
          <CardHeader className="flex items-center justify-center">
            {loading[index] ? (
              <Skeleton className="h-32 w-32 rounded-full" />
            ) : errors[index] ? (
              <Avatar className="h-32 w-32">
                <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            ) : (
              <Avatar className="h-32 w-32">
                <AvatarImage src={profiles[index]?.avatar_url} alt={profiles[index]?.name} />
                <AvatarFallback>
                  {profiles[index]?.name?.charAt(0) || username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            )}
          </CardHeader>
          <CardContent className="flex flex-col flex-1">
            {loading[index] ? (
              <>
                <Skeleton className="h-10 w-2/3 mb-4" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6 mt-2" />
                <Skeleton className="h-8 w-full mt-4" />
              </>
            ) : errors[index] ? (
              <p className="text-red-500">{errors[index]}</p>
            ) : (
              <>
                <h1 className="serif text-4xl font-bold">{profiles[index]?.name || "No name available"}</h1>
                <p className="text-sm text-gray-500">@{profiles[index]?.login}</p>
                <p className="mono mt-2 h-[72px] overflow-hidden">{profiles[index]?.bio || "No bio available"}</p>
                <div className="flex flex-col mt-auto pt-4 space-y-3">
                  <div className="flex gap-4">
                    <p className="text-sm">{profiles[index]?.public_repos} repositories</p>
                    <p className="text-sm">{profiles[index]?.followers} followers</p>
                  </div>
                  <a 
                    href={profiles[index]?.html_url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full"
                  >
                    <Button variant="outline" size="sm" >
                      View GitHub Profile
                    </Button> 
                  </a>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </main>
  );
}