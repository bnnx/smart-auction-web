'use client';

import Button from "@/components/button";
import Input from "@/components/input";
import { FormEvent } from "react";
import { ethers } from "ethers";
import abi from '../../truffle/contracts/AuctionFactory.json';

type IProps = {
  ethereum: any
  onCreateAuction: () => void
}

export default function AuctionForm({ ethereum, onCreateAuction }: IProps) {
  const contractAddress = abi.contractAddress;
  const contractABI = abi.abi;

  function getInputValue({ target, name }: { target: EventTarget & HTMLFormElement, name: string }) {
    return (target.elements.namedItem(name) as HTMLInputElement).value
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const target = event.currentTarget
    const body = {
      bidIncrement: ethers.parseEther(getInputValue({ target, name: 'bidIncrement' })),
      startBlock: getInputValue({ target, name: 'startBlock' }),
      endBlock: getInputValue({ target, name: 'endBlock' }),
    }
    if (!ethereum) {
      console.error('Ethereum object is required to create a auction');
      return;
    }
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const auctionsContract = new ethers.Contract(contractAddress, contractABI, signer);
    const createTxn = await auctionsContract.createAuction(body.bidIncrement, body.startBlock, body.endBlock, 'ipfsHash');
    await createTxn.wait();
    onCreateAuction()
  }

  return (
    <form className="flex flex-col space-y-4 w-80" onSubmit={handleSubmit}>
      <Input 
        type='text' 
        name="bidIncrement" 
        placeholder="Incremento mínimo"
      />
      <Input 
        type="number" 
        name="startBlock" 
        placeholder="Bloco inicial"
      />
      <Input 
        type="number" 
        name="endBlock" 
        placeholder="Bloco final"
      />
      <Button
        text="Criar leilão"
      />
    </form>
  )
}