"use client" //client component

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"

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
  
  // Define role mapping for each GitHub username
  const userRoles: Record<string, string> = useMemo(() => ({
    'SimonPortillo': 'Full Stack Developer',
    'mgoberg': 'Backend Developer',
    'Azders': 'UX Designer',
    'UngeBakern': 'DevOps Engineer',
    'jmanneraak': 'Front End Developer'
  }), []);
  
  // Define secondary roles 
  const secondaryRoles: Record<string, string> = useMemo(() => ({
    'SimonPortillo': 'React Specialist',
    'mgoberg': 'API Designer',
    'Azders': 'Interaction Designer',
    'UngeBakern': 'Cloud Architect',
    'jmanneraak': 'Mobile Developer'
  }), []);
  
  const [profiles, setProfiles] = useState<(GitHubProfile | null)[]>(Array(githubUsernames.length).fill(null));
  const [loading, setLoading] = useState<boolean[]>(Array(githubUsernames.length).fill(true));
  const [errors, setErrors] = useState<(string | null)[]>(Array(githubUsernames.length).fill(null));

  useEffect(() => {
    const fetchGitHubProfiles = async () => {
      const profilePromises = githubUsernames.map(async (username, index) => {
        try {
          const response = await fetch(`/api/github/${username}`);
          
          if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
          }
          
          const data = await response.json();
          
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
    <div className="flex flex-col space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="w-full text-center py-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="serif text-5xl md:text-6xl font-bold mb-4">Our Development Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Meet the talented developers behind our projects. Each team member brings unique skills and expertise.
        </p>
        <div className="flex gap-2 justify-center">
          <Badge variant="secondary" className="text-md px-4 py-1">React</Badge>
          <Badge variant="secondary" className="text-md px-4 py-1">Next.js</Badge>
          <Badge variant="secondary" className="text-md px-4 py-1">C#</Badge>
          <Badge variant="secondary" className="text-md px-4 py-1">Python</Badge>
        </div>
      </motion.section>

      {/* GitHub Profiles Grid */}
      <motion.main 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {githubUsernames.map((username, index) => (
          <Card key={username} className="flex flex-col">
            <CardHeader className="flex items-center justify-center">
              <AnimatePresence mode="wait">
                {loading[index] ? (
                  <motion.div
                    key="skeleton"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Skeleton className="h-32 w-32 rounded-full" />
                  </motion.div>
                ) : errors[index] ? (
                  <motion.div
                    key="avatar-error"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Avatar className="h-32 w-32">
                      <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                ) : (
                  <motion.div
                    key="avatar-content"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Avatar className="h-32 w-32">
                      <AvatarImage src={profiles[index]?.avatar_url} alt={profiles[index]?.name} />
                      <AvatarFallback>
                        {profiles[index]?.name?.charAt(0) || username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <AnimatePresence mode="wait">
                {loading[index] ? (
                  <motion.div
                    key="skeleton-content"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full w-full" 
                  >
                    {/* Name skeleton */}
                    <Skeleton className="h-10 w-full mb-2" /> 
                    <Skeleton className="h-5 w-1/2 mb-3" /> 
                    
                    {/* Badge skeletons */}
                    <div className="flex gap-2 my-2">
                      <Skeleton className="h-6 w-32 rounded-full" /> 
                      <Skeleton className="h-6 w-36 rounded-full" /> 
                    </div>
                    
                    {/* Bio skeleton */}
                    <Skeleton className="h-5 w-full mt-2" />
                    <Skeleton className="h-5 w-full mt-1" />
                    <Skeleton className="h-5 w-5/6 mt-1" />
                    
                    {/* Bottom info skeletons */}
                    <div className="flex flex-col mt-auto pt-4 space-y-3">
                      <div className="flex gap-4">
                        <Skeleton className="h-5 w-32" /> 
                        <Skeleton className="h-5 w-32" /> 
                      </div>
                      <Skeleton className="h-9 w-full mt-2" /> 
                    </div>
                  </motion.div>
                ) : errors[index] ? (
                  <motion.p
                    key="error-message"
                    className="text-red-500"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {errors[index]}
                  </motion.p>
                ) : (
                  <motion.div
                    key="profile-content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex flex-col h-full"
                  >
                    <h1 className="serif text-4xl font-bold">{profiles[index]?.name || "No name found"}</h1>
                    <p className="text-sm text-gray-500">@{profiles[index]?.login}</p>
                    
                    {/* Add role badges */}
                    <div className="flex flex-wrap gap-2 my-2">
                      {userRoles[username] && (
                        <Badge variant="default">{userRoles[username]}</Badge>
                      )}
                      {secondaryRoles[username] && (
                        <Badge variant="outline">{secondaryRoles[username]}</Badge>
                      )}
                    </div>
                    
                    <p className="mono mt-2 h-[72px] overflow-hidden">{profiles[index]?.bio || "No bio available"}</p>
                    <div className="flex flex-col mt-auto pt-4 space-y-3">
                      <div className="flex gap-4">
                        <p className="text-sm text-gray-500">{profiles[index]?.public_repos} repositories</p>
                        <p className="text-sm text-gray-500">{profiles[index]?.followers} followers</p>
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
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        ))}
      </motion.main>
    </div>
  );
}

