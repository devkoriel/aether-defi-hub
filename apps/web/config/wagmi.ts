import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, arbitrum, optimism, polygon } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia, arbitrum, optimism, polygon],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
  },
})
