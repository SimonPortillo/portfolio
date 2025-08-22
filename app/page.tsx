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
import { motion, AnimatePresence } from "motion/react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { GitHubIcon } from "@/components/icons/github-icon"
import { InfoIcon } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

interface GitHubProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
  public_repos: number;
  followers: number;
  repos?: GitHubRepo[];
}

export default function Home() {

  const githubUsernames = useMemo(() => ['SimonPortillo', 'mgoberg', 'Azders', 'UngeBakern', 'jmanneraak', 'petternaerum'], []);

  // Define role mapping for each GitHub username
  const userRoles: Record<string, string> = useMemo(() => ({
    'SimonPortillo': 'Full Stack',
    'mgoberg': 'Backend',
    'Azders': 'UX',
    'UngeBakern': 'DevOps',
    'jmanneraak': 'Front End'
  }), []);
  
  // Define secondary roles 
  const secondaryRoles: Record<string, string> = useMemo(() => ({
    'SimonPortillo': 'Next.js',
    'mgoberg': 'API Designer',
    'Azders': 'Interaction Designer',
    'UngeBakern': 'Cloud Architect',
    'jmanneraak': 'Mobile Developer'
  }), []);
  
  const [profiles, setProfiles] = useState<(GitHubProfile | null)[]>(Array(githubUsernames.length).fill(null));
  const [loading, setLoading] = useState<boolean[]>(Array(githubUsernames.length).fill(true));
  const [errors, setErrors] = useState<(string | null)[]>(Array(githubUsernames.length).fill(null));
  const [reposLoading, setReposLoading] = useState<boolean[]>(Array(githubUsernames.length).fill(false));

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

  const fetchUserRepos = async (username: string, index: number) => {
    // Set loading state for this user's repos
    setReposLoading(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });

    try {
      const response = await fetch(`/api/github/${username}/repos`);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const repos = await response.json();
      
      setProfiles(prev => {
        const updated = [...prev];
        if (updated[index]) {
          updated[index] = {
            ...updated[index]!,
            repos: repos
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

  // Define technology badges with colors
  const techBadges = [
    { name: "React", bgColor: "bg-blue-100", textColor: "text-blue-800", hoverColor: "hover:bg-blue-200" },
    { name: "Next.js", bgColor: "bg-gray-800", textColor: "text-white", hoverColor: "hover:bg-gray-700" },
    { name: "C#", bgColor: "bg-purple-100", textColor: "text-purple-800", hoverColor: "hover:bg-purple-200" },
    { name: "Python", bgColor: "bg-yellow-100", textColor: "text-yellow-800", hoverColor: "hover:bg-yellow-200" },
    { name: "TypeScript", bgColor: "bg-blue-200", textColor: "text-blue-900", hoverColor: "hover:bg-blue-300" },
    { name: "PostgreSQL", bgColor: "bg-green-100", textColor: "text-green-800", hoverColor: "hover:bg-green-200" },
    { name: "TailwindCSS", bgColor: "bg-cyan-100", textColor: "text-cyan-800", hoverColor: "hover:bg-cyan-200" },
    { name: "Docker", bgColor: "bg-blue-300", textColor: "text-blue-900", hoverColor: "hover:bg-blue-400" },
    { name: "Git", bgColor: "bg-orange-100", textColor: "text-orange-800", hoverColor: "hover:bg-orange-200" },
    { name: "SQL", bgColor: "bg-red-100", textColor: "text-red-800", hoverColor: "hover:bg-red-200" },
  ];

  return (
    <div className="flex flex-col space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="w-full text-center py-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="serif text-5xl md:text-6xl font-bold mb-4">Meet Our Study Group</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          The students behind our projects. Each team member brings unique skills and expertise.
          Feel free to explore their GitHub cards below to see their projects.
        </p>
        
        <blockquote className="italic text-sm text-shadow-2xs text-gray-500 max-w-3xl mx-auto mb-6">
          &ldquo;Live as if you were to die tomorrow. Learn as if you were to live forever.&rdquo; ― Mahatma Gandhi
        </blockquote>
        
        <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto my-8">
          {techBadges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ rotate: 0 }}
              whileHover={{ 
                rotate: [-2, -4, -2, 0, 2, 4, 2, 0],
                scale: 1.1,
                transition: { 
                  duration: 0.6, 
                  ease: "easeInOut" 
                } 
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -2, -4, -5, -4, -2, 0, 2, 4, 5, 4, 2, 0],
                transition: { 
                  repeat: Infinity, 
                  repeatType: "loop",
                  duration: 3,
                  ease: "easeInOut",
                  delay: index * 0.15 % 1.5, 
                }
              }}
            >
              <Badge 
                variant="secondary" 
                className={`text-md px-4 py-1.5 ${badge.bgColor} ${badge.textColor} ${badge.hoverColor} cursor-pointer`}
              >
                {badge.name}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.section> 

      {/* GitHub API info with tooltip - Animated */}
      <motion.div 
        className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <GitHubIcon className="h-4 w-4" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex items-center gap-1">
              Profile information is loaded from GitHub API
              <InfoIcon className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs pb-1.5 text-center">All profile images, bio information, and repository data are fetched directly from GitHub&apos;s API in real-time.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
      
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
                    <div className="mono flex flex-wrap gap-2 my-2">
                      {userRoles[username] && (
                        <Badge variant="default">{userRoles[username]}</Badge>
                      )}
                      {secondaryRoles[username] && (
                        <Badge variant="outline">{secondaryRoles[username]}</Badge>
                      )}
                    </div>
                    
                    <p className="mt-2 h-[60px] overflow-hidden">{profiles[index]?.bio || "No bio available"}</p>
                    <div className="flex flex-col mt-auto pt-4 space-y-3">
                      <div className="flex gap-4">
                        <p className="mono text-sm text-gray-500">{profiles[index]?.public_repos} repositories</p>
                        <p className="mono text-sm text-gray-500">{profiles[index]?.followers} followers</p>
                      </div>
                      
                      <div className="flex gap-2 w-full">
                        <a 
                          href={profiles[index]?.html_url}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1"
                        >
                          <Button variant="outline" size="sm" className="w-full">
                            View Full Profile
                          </Button> 
                        </a>
                        
                        <DropdownMenu onOpenChange={(open) => {
  // Fetch repos when dropdown is opened and we don't have them already
  if (open && !profiles[index]?.repos && !reposLoading[index]) {
    fetchUserRepos(username, index);
  }
}}>
  <DropdownMenuTrigger asChild>
    <Button 
      variant="secondary" 
      size="sm" 
      className="whitespace-nowrap"
      disabled={reposLoading[index]}
    >
      {reposLoading[index] ? "Loading..." : "Repositories"} <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="mono w-72">
    <DropdownMenuLabel>Repositories</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {profiles[index]?.repos ? (
      profiles[index]?.repos.length > 0 ? (
        profiles[index]!.repos.slice(0, 8).map((repo) => (
          <DropdownMenuItem key={repo.id} asChild>
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="font-medium">{repo.name}</span>
                {repo.description && (
                  <span className="text-xs text-gray-500 truncate max-w-[260px]">
                    {repo.description}
                  </span>
                )}
                <div className="flex items-center gap-2 mt-1">
                  {repo.language && (
                    <span className="text-xs bg-muted dark:bg-muted px-2 py-0.5 rounded-full">
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="text-xs flex items-center">
                      ★ {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </div>
            </a>
          </DropdownMenuItem>
        ))
      ) : (
        <DropdownMenuItem disabled>No public repositories</DropdownMenuItem>
      )
    ) : reposLoading[index] ? (
      <DropdownMenuItem disabled>
        <div className="flex items-center justify-center w-full py-2">
          <Skeleton className="h-4 w-4 rounded-full mr-2" />
          <span>Loading repositories...</span>
        </div>
      </DropdownMenuItem>
    ) : (
      <DropdownMenuItem disabled>Click to load repositories</DropdownMenuItem>
    )}
    
    {profiles[index]?.repos && profiles[index]!.repos.length > 8 && (
      <>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a 
            href={`${profiles[index]?.html_url}?tab=repositories`}
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer text-center font-medium"
          >
            View all repositories
          </a>
        </DropdownMenuItem>
      </>
    )}
  </DropdownMenuContent>
</DropdownMenu>
                      </div>
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

