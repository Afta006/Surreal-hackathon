import { http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { StoryClient } from '@story-protocol/core-sdk';

export async function initStoryClient() {
  const chainId = Number(process.env.CHAIN_ID || '1315');  // adjust default
  const transport = http(process.env.RPC_URL!);
  const account = privateKeyToAccount(`0x${process.env.PRIVATE_KEY!}`);

  return await StoryClient.newClient({ chainId: chainId as any, transport, account });
}
