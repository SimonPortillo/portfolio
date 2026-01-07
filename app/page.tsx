"use client";

import { motion } from "motion/react";
import { HeroSection } from "@/components/home/hero-section";
import { GitHubInfoTooltip } from "@/components/home/github-info-tooltip";
import { GitHubProfileCard } from "@/components/home/github-profile-card";
import { useGitHubProfiles } from "@/lib/hooks/use-github";
import { userRoles, secondaryRoles } from "@/lib/data/user-roles";
import { githubUsernames } from "@/lib/data/github-usernames";

export default function Home() {
  const { profiles, loading, errors, reposLoading, fetchUserRepos } =
    useGitHubProfiles(githubUsernames);

  return (
    <div className="flex flex-col space-y-3 sm:space-y-6">
      {/* Hero Section */}
      <HeroSection />

      {/* GitHub API info with tooltip */}
      <div className="px-4 sm:px-6">
        <GitHubInfoTooltip />
      </div>

      {/* GitHub Profiles Grid */}
      <motion.main
        className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {githubUsernames.map((username, index) => (
          <GitHubProfileCard
            key={username}
            username={username}
            profile={profiles[index]}
            loading={loading[index]}
            error={errors[index]}
            repoLoading={reposLoading[index]}
            userRole={userRoles[username]}
            secondaryRole={secondaryRoles[username]}
            onFetchRepos={() => fetchUserRepos(username, index)}
          />
        ))}
      </motion.main>
    </div>
  );
}
