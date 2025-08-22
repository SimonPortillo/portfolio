"use client"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GitHubProfile } from "@/types/github"

interface RepoDropdownProps {
  profile: GitHubProfile | null;
  loading: boolean;
  onOpen: () => void;
}

export function RepoDropdown({ profile, loading, onOpen }: RepoDropdownProps) {
  return (
    <DropdownMenu onOpenChange={(open) => {
      if (open && !profile?.repos && !loading) {
        onOpen();
      }
    }}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="secondary" 
          size="sm" 
          className="whitespace-nowrap"
          disabled={loading}
        >
          {loading ? "Loading..." : "Repositories"} <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mono w-72">
        <DropdownMenuLabel>Repositories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {profile?.repos ? (
          profile?.repos.length > 0 ? (
            profile.repos.slice(0, 8).map((repo) => (
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
        ) : loading ? (
          <DropdownMenuItem disabled>
            <div className="flex items-center justify-center w-full py-2">
              <Skeleton className="h-4 w-4 rounded-full mr-2" />
              <span>Loading repositories...</span>
            </div>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem disabled>Click to load repositories</DropdownMenuItem>
        )}
        
        {profile?.repos && profile.repos.length > 8 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a 
                href={`${profile.html_url}?tab=repositories`}
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
  )
}