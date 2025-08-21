import { NextRequest, NextResponse } from "next/server";

// Next.js 15.5.0: context.params is a Promise; await it
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await context.params;
    
    // Use GitHub token in .env for authentication
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = token 
      ? { Authorization: `Bearer ${token}` }
      : {};
    
    const response = await fetch(`https://api.github.com/users/${username}`, { 
      headers,
      cache: 'force-cache',
    });
    
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
    console.error(`Failed to fetch GitHub profile:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub profile' },
      { status: 500 }
    );
  }
}