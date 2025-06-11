// lib/wallet.ts

import { Web3Provider } from '@ethersproject/providers';

export async function connectWallet(): Promise<{ provider: Web3Provider; address: string }> {
  if (!window.ethereum) throw new Error('MetaMask not installed');

  const provider = new Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const address = await signer.getAddress();

  provider.on('accountsChanged', (accounts: string[]) => {
    console.log('Account changed:', accounts[0]);
  });

  return { provider, address };
}
