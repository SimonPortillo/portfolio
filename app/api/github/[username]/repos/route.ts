import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ username: string }> }
) {
  try {
    const resolvedParams = await context.params;
    const username = resolvedParams.username;
    
    // Fetch user repos from GitHub API
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repositories' },
      { status: 500 }
    );
  }
}