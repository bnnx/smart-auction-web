import Link from "next/link";
import Image from "next/image";
import vectorPic from '../resources/images/vector.jpg';

export default function Home() {
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
        <div className="w-80 flex flex-col space-y-4">
          <div className="text-center">
            <h1 className="font-bold text-white text-xl selection:bg-amber-500">Nossas boas-vindas! 👋</h1>
            <h2 className="font-normal text-gray-500 selection:bg-amber-500 selection:text-white">
              O Smart Auction é um portal com centenas de produtos aguardando seu lance
            </h2>
          </div>
          <button 
            type="submit"
            className="bg-emerald-500 rounded-xl h-12 font-medium"
          >
            <Link href="/login" className="flex justify-center">
              Fazer login
            </Link>
          </button>
            <button 
              type="submit"
              className="bg-zinc-900 rounded-xl h-12 border-2 border-emerald-500 text-emerald-500 font-medium"
            >
              <Link href="/sign-up" className="flex justify-center">
                Criar uma nova conta
              </Link>
            </button>
        </div>
      </div>
    </main>
  )
}
