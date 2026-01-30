// API route to fetch GitHub stats using GraphQL
import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'Prakhar2025';

interface GitHubStats {
    totalCommits: number;
    totalRepos: number;
    totalStars: number;
}

export async function GET() {
    try {
        const token = process.env.GITHUB_TOKEN;

        // If no token (local dev), return fallback data
        if (!token) {
            console.warn('GitHub token not found, using fallback data');
            return NextResponse.json({
                totalCommits: 306,
                totalRepos: 23,
                totalStars: 1,
            });
        }

        // GraphQL query to get contribution stats
        const graphqlQuery = {
            query: `
                query($username: String!) {
                    user(login: $username) {
                        contributionsCollection {
                            contributionCalendar {
                                totalContributions
                            }
                        }
                        repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC) {
                            totalCount
                            nodes {
                                stargazerCount
                            }
                        }
                    }
                }
            `,
            variables: {
                username: GITHUB_USERNAME
            }
        };

        // Fetch from GitHub GraphQL API
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphqlQuery),
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error('Failed to fetch GitHub stats');
        }

        const data = await response.json();
        const user = data.data.user;

        // Calculate total stars
        const totalStars = user.repositories.nodes.reduce(
            (sum: number, repo: { stargazerCount: number }) => sum + repo.stargazerCount,
            0
        );

        const stats: GitHubStats = {
            totalCommits: user.contributionsCollection.contributionCalendar.totalContributions,
            totalRepos: user.repositories.totalCount,
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
