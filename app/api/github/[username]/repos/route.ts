import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username;
  
  try {
    // Use GitHub token in .env for authentication, same as in the user profile endpoint
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = token 
      ? { Authorization: `Bearer ${token}` }
      : {};
    
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, 
      { 
        headers,
        cache: 'force-cache', 
      }
    );
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error(`GitHub API error: ${response.status}`, errorData);
      
      return NextResponse.json(
        { error: `GitHub API error: ${response.status}`, details: errorData },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repositories' },
      { status: 500 }
    );
  }
}