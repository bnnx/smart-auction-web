'use client';

import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from '../../truffle/contracts/AuctionFactory.json';
import AuctionForm from './form';
import AuctionsList from '@/components/auctions-list';
import MainHeader from "@/components/main-header";

export default function HomePage() {
  const contractAddress = abi.contractAddress;
  const contractABI = abi.abi;
  const [ethereum, setEthereum] = useState<any | undefined>(undefined);
  const [connectedAccount, setConnectedAccount] = useState<string | undefined>(undefined);
  const [auctions, setAuctions] = useState([]);

  const getAuctions = useCallback(async () => {
    if (ethereum && connectedAccount) {
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const auctionsContract = new ethers.Contract(contractAddress, contractABI, signer);
      const auctions = await auctionsContract.allAuctions();
      setAuctions(auctions);
    }
  }, [connectedAccount, contractABI, contractAddress, ethereum])

  useEffect(() => {
    getAuctions();
  }, [getAuctions, connectedAccount])

  return (
    <main className="flex">
      <div className="flex-1">
        <MainHeader 
          ethereum={ethereum} 
          account={connectedAccount} 
          onConnect={setConnectedAccount} 
          setEthereum={setEthereum}
        />
        {!connectedAccount 
          ? <p className="flex px-24">Instale e/ou conecte-se à sua carteira MetaMask para ter acesso aos leilões!</p>
          : (
            <div className="flex px-24">
              <AuctionForm ethereum={ethereum} onCreateAuction={async () => await getAuctions()}/>
              <AuctionsList auctions={auctions} ethereum={ethereum} getAuctions={async () => await getAuctions()} />
            </div>
          )
        }
      </div>
    </main>
  )
}
