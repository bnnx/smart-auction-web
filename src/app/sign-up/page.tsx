import Image from "next/image";
import Link from "next/link";
import vectorPic from '../../resources/images/vector.jpg';

export const metadata = {
  title: 'Criar conta - Smart Auction',
  description: 'A auction website with smart contracts.',
}

export default function SignUp() {  
  return (
    <main className="flex flex-row min-h-screen">
      <aside className="flex bg-white w-0 md:w-1/2 lg:w-3/5 items-center justify-center">
        <Image 
          src={vectorPic}
          alt="Image of an auction"
          className="p-16 2xl:max-w-screen-lg"
        />
      </aside>
      <div className="flex flex-col w-screen md:w-1/2 lg:w-2/5 items-center justify-center">
        <div className="w-80">

          <div className="pb-4 text-center">
            <h1 className="font-bold text-white text-xl selection:bg-amber-500">Olá! 👋</h1>
            <h2 className="font-normal text-gray-500 selection:bg-amber-500 selection:text-white">Digite seus dados para criar uma conta</h2>
          </div>

          <form className="flex flex-col space-y-4">
            <input 
              type="text"
              name="firstName" 
              placeholder="Primeiro nome"
              className="bg-zinc-950 placeholder-gray-500 rounded-xl h-12 p-4 outline-0"
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Último nome"
              className="bg-zinc-950 placeholder-gray-500 rounded-xl h-12 p-4 outline-0"
            />
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
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirme sua senha"
              className="bg-zinc-950 placeholder-gray-500 rounded-xl h-12 p-4 outline-0"
            />
            <button 
              type="submit"
              className="bg-emerald-500 rounded-xl h-12"
            >
              Criar conta
            </button>
          </form>

          <p className="text-center pt-4 text-gray-500 font-normal selection:bg-amber-500 selection:text-white">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="text-white hover:underline"
            >
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
