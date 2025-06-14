import { NextResponse } from 'next/server';

const STORY_API = 'https://api.storyapis.com/api/v3/assets';
const API_KEY = process.env.STORY_API_KEY!;
const CHAIN = process.env.STORY_CHAIN!; // e.g. "story-aeneid"

export async function POST(req: Request) {
  const { wallet, tokenContract, tokenId } = await req.json();

  if (!wallet || !tokenContract) {
    return NextResponse.json({ error: 'wallet and tokenContract are required' }, { status: 400 });
  }

  try {
    const filter = {
      options: {
        tokenContractIds: [tokenContract],
        where: { /* you might include tokenId or owner filters here */ }
      }
    };

    const resp = await fetch(STORY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY,
        'X-Chain': CHAIN
      },
      body: JSON.stringify(filter)
    });

    const data = await resp.json();
    const owned = data.data.filter((ip: any) =>
      ip.nftMetadata.tokenContract === tokenContract &&
      /* Optionally check ip.nftMetadata.owner === wallet if returned */
      true
    );

    return NextResponse.json({ wallet, assets: owned }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
export async function GET() {
  return NextResponse.json({ message: 'Use POST to fetch assets' }, { status: 405 });
}
