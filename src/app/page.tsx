'use client';

export default function Home() {

  function handleSubmit() {
    console.log('apertou entrar');
  }

  return (
    <main className="flex flex-row min-h-screen">
      <aside className="flex bg-emerald-500 w-1/2 items-center justify-center">
        <h1>Smart Auction</h1>
      </aside>
      <div className="flex flex-col w-1/2 items-center justify-center">
        <div className="w-80">
          <div className="pb-4 text-center">
            <h1 className="font-bold text-white text-xl">Bem-vindo de volta!</h1>
            <h2 className="font-normal text-gray-500">Digite seus dados para acessar o portal</h2>
          </div>
          <div className="flex flex-col space-y-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Email"
              className="bg-zinc-950 placeholder-gray-500 rounded-xl h-12 p-4 outline-0"
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Senha"
              className="bg-zinc-950 placeholder-gray-500 rounded-xl h-12 p-4 outline-0"
            />
            <button 
              type="submit"
              className="bg-emerald-500 rounded-xl h-12"
              onClick={handleSubmit}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
