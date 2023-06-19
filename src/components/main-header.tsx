import { useCallback, useEffect } from "react";

interface IProps {
  ethereum?: any;
  account?: string;
  onConnect: (account: string) => void;
  setEthereum: (ethereum: string) => void;
}

export default function MainHeader({
  ethereum,
  account,
  onConnect,
  setEthereum
}: IProps) {
  
  const handleSetAccount = useCallback((accounts: string[]) => {
    if (accounts.length > 0) {
      const account = accounts[0];
      console.log('We have an authorized account: ', account);
      onConnect(account);
    } else {
      console.log("No authorized accounts yet")
    }
  }, [onConnect]);

  const handleConnectAccount = async () => {
    if (!ethereum) {
      alert('MetaMask is required to connect an account');
      return;
    }
  
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    handleSetAccount(accounts);
  };

  const getConnectedAccount = useCallback(async () => {
    if (window.ethereum) {
      setEthereum(window.ethereum);
    }
  
    if (ethereum) {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      handleSetAccount(accounts);
    }
  }, [ethereum, setEthereum, handleSetAccount]);

  useEffect(() => {
    getConnectedAccount()
  }, [getConnectedAccount]);

  return (
    <div className="flex p-4 mb-4 px-24 bg-amber-500 justify-between items-center">
      <div>
        <h1 className="font-bold text-white selection:bg-emerald-500">Smart Auction</h1>
        <p className="font-normal text-white selection:bg-emerald-500">Feito com Next.js, Node.js e Solidity</p>
        <p className="font-normal text-white selection:bg-emerald-500">EC38D - UTFPR-CP</p>
      </div>
      <div className="bg-emerald-500 rounded-full py-2 px-4">
        {account
          ?
            <h1 className="font-bold text-white selection:bg-amber-500">
              {account.slice(0, 5) + '...' + account.slice(-4)}
            </h1>
          : 
            <button className="font-bold text-white selection:bg-amber-500" onClick={handleConnectAccount}>
              Conectar à MetaMask
            </button>
        }
      </div>
    </div>
  )
}