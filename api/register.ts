import { NextApiRequest, NextApiResponse } from 'next';
import { initStoryClient } from '@/lib/storyClient';
import { toHex } from 'viem';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  try {
    const { spgNftContract, metadata } = req.body;
    if (!spgNftContract || !metadata) return res.status(400).json({ error: 'Missing parameters' });

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

    return res.status(200).json({
      txHash: response.txHash,
      ipId: response.ipId,
    });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
