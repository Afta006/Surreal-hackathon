// app/api/mint/route.ts

import { initStoryClient } from '@/lib/storyClient';
import { toHex } from 'viem';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { spgNftContract, metadata } = body;

    if (!spgNftContract || !metadata) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const client = await initStoryClient();

    
    const response = await client.ipAsset.mintAndRegisterIp({
      spgNftContract,
      recipient: metadata.recipient,
      ipMetadata: {
        ipMetadataURI: metadata.ipMetadataURI,
        ipMetadataHash: toHex(metadata.ipMetadataHash, { size: 32 }),
        nftMetadataURI: metadata.nftMetadataURI,
        nftMetadataHash: toHex(metadata.nftMetadataHash, { size: 32 }),
      },
    });

    return NextResponse.json(
      {
        txHash: response.txHash,
        ipId: response.ipId,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Optional: Export GET if needed
export async function GET() {
  return NextResponse.json({ message: 'Use POST to mint and register IP' }, { status: 405 });
}
