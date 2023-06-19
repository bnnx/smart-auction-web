import Auction from './auction';

type IProps = {
  auctions: string[],
  ethereum: any,
  getAuctions: () => void
}

export default function AuctionsList({ auctions, ethereum, getAuctions }: IProps) {
  return (
    <div className="flex flex-col ml-8">
      <h1 className="font-bold text-white selection:bg-amber-500">Leilões disponíveis:</h1>
      {auctions.map((auction, i) => (
        <div key={i}>
          <Auction auction={auction} ethereum={ethereum} getAuctions={() => getAuctions}/>
        </div>
      ))}
    </div>
  )
}