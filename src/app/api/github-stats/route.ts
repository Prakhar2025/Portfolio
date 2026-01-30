// API route to fetch GitHub stats
import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'Prakhar2025';

interface GitHubStats {
    totalCommits: number;
    totalRepos: number;
    totalStars: number;
}

interface GitHubRepo {
    name: string;
    stargazers_count: number;
}

interface GitHubUser {
    public_repos: number;
}

export async function GET() {
    try {
        const token = process.env.GITHUB_TOKEN;
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3+json',
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            headers,
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!userResponse.ok) {
            throw new Error('Failed to fetch user data');
        }

        const userData: GitHubUser = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=all`,
            {
                headers,
                next: { revalidate: 3600 }
            }
        );

        if (!reposResponse.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repos: GitHubRepo[] = await reposResponse.json();

        // Calculate total commits (approximate from all repos)
        let totalCommits = 0;
        const commitPromises = repos.slice(0, 30).map(async (repo: GitHubRepo) => {
            try {
                const commitsResponse = await fetch(
                    `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=1`,
                    {
                        headers,
                        next: { revalidate: 3600 }
                    }
                );

                if (commitsResponse.ok) {
                    const linkHeader = commitsResponse.headers.get('Link');
                    if (linkHeader) {
                        const match = linkHeader.match(/page=(\d+)>; rel="last"/);
                        if (match) {
                            return parseInt(match[1]);
                        }
                    }
                    const commits = await commitsResponse.json();
                    return commits.length;
                }
            } catch (error) {
                console.error(`Error fetching commits for ${repo.name}:`, error);
            }
            return 0;
        });

        const commitCounts = await Promise.all(commitPromises);
        totalCommits = commitCounts.reduce((sum, count) => sum + count, 0);

        // Calculate total stars
        const totalStars = repos.reduce((sum: number, repo: GitHubRepo) => sum + repo.stargazers_count, 0);

        const stats: GitHubStats = {
            totalCommits,
            totalRepos: userData.public_repos,
            totalStars,
        };

        return NextResponse.json(stats);
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Return fallback data if API fails
        return NextResponse.json({
            totalCommits: 306,
            totalRepos: 23,
            totalStars: 1,
        });
    }
}
