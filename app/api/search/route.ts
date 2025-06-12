import { NextResponse } from 'next/server';

const STORY_API = 'https://api.storyapis.com/api/v3/assets';

export async function POST(req: Request) {
  const { query } = await req.json();
  if (!query) {
    return NextResponse.json({ error: 'Missing query' }, { status: 400 });
  }

  const payload = {
    options: {
      where: {
        or: [
          { 'ipMetadata.title': { like: `%${query}%` } },
          { 'ipMetadata.description': { like: `%${query}%` } },
          { 'nftMetadata.name': { like: `%${query}%` } }
        ]
      }
    }
  };

  try {
    const resp = await fetch(STORY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.STORY_API_KEY!,
        'X-Chain': process.env.STORY_CHAIN!
      },
      body: JSON.stringify(payload)
    });
    const json = await resp.json();

    // Assuming metadata fields are returned, you can further filter client-side:
    const results = json.data.filter((asset: any) =>
      asset.ipMetadata.title?.toLowerCase().includes(query.toLowerCase()) ||
      asset.ipMetadata.description?.toLowerCase().includes(query.toLowerCase()) ||
      asset.nftMetadata.name?.toLowerCase().includes(query.toLowerCase())
    );

    return NextResponse.json({ results }, { status: 200 });
  } catch (err: any) {
    console.error('Search Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
