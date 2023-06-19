import { FormEvent, useCallback, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import AuctionJSON from '../truffle/contracts/Auction.json';
import Input from './input';

type IProps = {
  auction: string
  ethereum: any
  getAuctions: () => void
}

export default function Auction({ auction, ethereum, getAuctions }: IProps) {
  const contractAbi = AuctionJSON.abi;
  const [owner, setOwner] = useState<string>();
  const [bidIncrement, setBidIncrement] = useState<string>('0');
  const [hightestBid, setHightestBid] = useState<string>('0');
  const [hightestBidder, setHightestBidder] = useState<string>();
  const [startBlock, setStartBlock] = useState();
  const [endBlock, setEndBlock] = useState();

  const getAuction = useCallback(async () => {
    if (ethereum) {
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const auctionContract = new ethers.Contract(auction, contractAbi, signer);
      const owner = await auctionContract.owner();
      setOwner(owner.slice(0, 5) + '...' + owner.slice(-4));
      setBidIncrement(await auctionContract.bidIncrement());
      setHightestBid((await auctionContract.getHighestBid()));
      const highestBidder = await auctionContract.highestBidder();
      setHightestBidder(highestBidder.slice(0, 5) + '...' + highestBidder.slice(-4));
      setStartBlock((await auctionContract.startBlock()).toLocaleString());
      setEndBlock((await auctionContract.endBlock()).toLocaleString());
    }
  }, [ethereum, auction, contractAbi]);

  function getInputValue({ target, name }: { target: EventTarget & HTMLFormElement, name: string }) {
    return (target.elements.namedItem(name) as HTMLInputElement).value
  }

  const handleBid = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const bid = getInputValue({ target, name: 'bid' });
    if (ethereum) {
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const auctionContract = new ethers.Contract(auction, contractAbi, signer);
      await auctionContract.placeBid({from: signer, value: ethers.parseEther(bid)})
      getAuctions()
    }
  }, [ethereum, auction, contractAbi, getAuctions]);

  const withdrawBid = useCallback(async () => {
    if (ethereum) {
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const auctionContract = new ethers.Contract(auction, contractAbi, signer);
      await auctionContract.withdraw()
    }
  }, [ethereum, auction, contractAbi]);

  useEffect(() => {
    getAuction()
  }, [getAuction]);

  return (
    <div className="bg-emerald-500 rounded-xl p-4 my-2">
      <p>Dono: {owner}</p>
      <p>Incremento: {ethers.formatEther(bidIncrement)} ETH</p>
      <p>Lance atual: {ethers.formatEther(hightestBid)} ETH</p>
      <p>Dono lance atual: {hightestBidder}</p>
      <p>Bloco inicial: {startBlock}</p>
      <p>Bloco final: {endBlock}</p>
      <button className='mt-2 bg-amber-500 rounded-xl p-2' onClick={() => withdrawBid()}>Retirar lance</button>
      <form className='mt-2' onSubmit={handleBid}>
        <Input 
          type='text' 
          name="bid" 
          placeholder="Digite seu lance"
        />
        <button className='ml-4 bg-amber-500 rounded-xl p-2'>Dar lance</button>
      </form>
    </div>
  )
}