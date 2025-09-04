"use client"

import { motion, AnimatePresence } from "motion/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { RepoDropdown } from "@/components/home/repo-dropdown"
import { GitHubProfile } from "@/types/github"

interface GitHubProfileCardProps {
  username: string;
  profile: GitHubProfile | null;
  loading: boolean;
  error: string | null;
  repoLoading: boolean;
  userRole?: string;
  secondaryRole?: string;
  onFetchRepos: () => void;
}

export function GitHubProfileCard({ 
  username, 
  profile, 
  loading, 
  error, 
  repoLoading,
  userRole,
  secondaryRole, 
  onFetchRepos 
}: GitHubProfileCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Skeleton className="h-32 w-32 rounded-full" />
            </motion.div>
          ) : error ? (
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
                <AvatarImage src={profile?.avatar_url} alt={profile?.name} />
                <AvatarFallback>
                  {profile?.name?.charAt(0) || username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </motion.div>
          )}
        </AnimatePresence>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton-content"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full w-full" 
            >
              {/* Skeleton content */}
              <Skeleton className="h-10 w-full mb-2" /> 
              <Skeleton className="h-5 w-1/2 mb-3" /> 
              
              <div className="flex gap-2 my-2">
                <Skeleton className="h-6 w-32 rounded-full" /> 
                <Skeleton className="h-6 w-36 rounded-full" /> 
              </div>
              
              <Skeleton className="h-5 w-full mt-2" />
              <Skeleton className="h-5 w-full mt-1" />
              <Skeleton className="h-5 w-5/6 mt-1" />
              
              <div className="flex flex-col mt-auto pt-4 space-y-3">
                <div className="flex gap-4">
                  <Skeleton className="h-5 w-32" /> 
                  <Skeleton className="h-5 w-32" /> 
                </div>
                <Skeleton className="h-9 w-full mt-2" /> 
              </div>
            </motion.div>
          ) : error ? (
            <motion.p
              key="error-message"
              className="text-destructive"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {error}
            </motion.p>
          ) : (
            <motion.div
              key="profile-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col h-full"
            >
              <h1 className="text-4xl font-bold">{profile?.name || "No name found"}</h1>
              <p className="text-sm text-muted-foreground">@{profile?.login}</p>

              <div className="mono flex flex-wrap gap-2 my-2">
                {userRole && (
                  <Badge variant="default">{userRole}</Badge>
                )}
                {secondaryRole && (
                  <Badge variant="outline">{secondaryRole}</Badge>
                )}
              </div>

              <p className="text-foreground mt-2 h-[72px] overflow-hidden">{profile?.bio || "No bio available"}</p>
              <div className="flex flex-col mt-auto pt-4 space-y-3">
                <div className="flex gap-4">
                  <p className="mono text-sm font-extrabold text-muted-foreground">{profile?.public_repos} repositories</p>
                  <p className="mono text-sm font-extrabold text-muted-foreground">{profile?.followers} følgere</p>
                </div>
                
                <div className="flex gap-2 w-full">
                  <a 
                    href={profile?.html_url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="mono w-full">
                      Vis på GitHub
                    </Button> 
                  </a>
                  
                  <RepoDropdown
                    profile={profile} 
                    loading={repoLoading} 
                    onOpen={onFetchRepos} 
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}