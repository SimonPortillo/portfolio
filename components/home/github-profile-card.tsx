"use client";

import { motion, AnimatePresence } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { RepoDropdown } from "@/components/home/repo-dropdown";
import { GitHubProfile } from "@/types/github";
import { TrendingUp } from "lucide-react";

interface GitHubProfileCardProps {
  username: string;
  profile: GitHubProfile | null;
  loading: boolean;
  error: string | null;
  repoLoading: boolean;
  onFetchRepos: () => void;
}

function getMostUsedLanguage(profile: GitHubProfile | null): string | null {
  if (!profile?.repos || profile.repos.length === 0) {
    return null;
  }

  const languageUsage = profile.repos.reduce<Record<string, number>>(
    (accumulator, repo) => {
      if (!repo.language) {
        return accumulator;
      }

      accumulator[repo.language] = (accumulator[repo.language] ?? 0) + 1;
      return accumulator;
    },
    {},
  );

  const sortedLanguages = Object.entries(languageUsage).sort(
    (a, b) => b[1] - a[1],
  );

  return sortedLanguages.length > 0 ? sortedLanguages[0][0] : null;
}

export function GitHubProfileCard({
  username,
  profile,
  loading,
  error,
  repoLoading,
  onFetchRepos,
}: GitHubProfileCardProps) {
  const company = profile?.company?.trim() || "Ingen bedrift";
  const mostUsedLanguage = getMostUsedLanguage(profile) || "Ingen språkdata";

  return (
    <Card className="flex flex-col min-h-[400px] w-full">
      <CardHeader className="flex items-center justify-center pb-4">
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
                <AvatarFallback>
                  {username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
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
              <h1 className="text-4xl font-bold">
                {profile?.name || "No name found"}
              </h1>
              <p className="text-sm text-muted-foreground">@{profile?.login}</p>

              <div className="mono flex flex-wrap gap-2 my-2">
                <Badge variant="default">{company}</Badge>
                <Badge variant="outline">
                  {mostUsedLanguage}
                  <TrendingUp />
                </Badge>
              </div>

              <p className="text-foreground mt-2 h-[72px] overflow-hidden">
                {profile?.bio || "Ingen bio tilgjengelig"}
              </p>
              <div className="flex flex-col mt-auto pt-4 space-y-3">
                <div className="flex justify-left gap-6">
                  <p className="mono text-sm font-extrabold text-muted-foreground">
                    {profile?.public_repos} repositories
                  </p>
                  <p className="mono text-sm font-extrabold text-muted-foreground">
                    {profile?.followers} følgere
                  </p>
                </div>

                <div className="flex gap-3 w-full justify-left">
                  <a
                    href={profile?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 max-w-[140px]"
                  >
                    <Button variant="outline" size="sm" className="mono w-full">
                      Vis på GitHub
                    </Button>
                  </a>

                  <div className="flex-1 max-w-[140px]">
                    <RepoDropdown
                      profile={profile}
                      loading={repoLoading}
                      onOpen={onFetchRepos}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
