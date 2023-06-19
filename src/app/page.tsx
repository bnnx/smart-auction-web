import LobbyPage from "./lobby/page";
import HomePage from "./home/page";

export default function App() {
  const signed = true;
  return (
    signed ? <HomePage/> : <LobbyPage/>
  )
}
