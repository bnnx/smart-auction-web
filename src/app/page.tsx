import Link from "next/link";
import Image from "next/image";
import hummerPic from "@/resources/images/auction-hummer.png";
import AuthAside from "@/components/auth-aside";

export default function Welcome() {
  return (
    <main className="flex flex-row min-h-screen">
      <AuthAside/>
      <div className="flex flex-col w-screen md:w-1/2 lg:w-2/5 items-center justify-center">
        <div className="w-80 flex flex-col space-y-4">

          <div className="flex justify-center">
            <Image 
              src={hummerPic}
              alt="Image of an auction hammer"
              className="object-contain w-28 h-32"
            />
          </div>

          <div className="text-center">
            <h1 className="font-bold text-white text-xl selection:bg-amber-500">Nossas boas-vindas! 👋</h1>
            <h2 className="font-normal text-gray-500 selection:bg-amber-500 selection:text-white">
              O Smart Auction é um portal com centenas de produtos aguardando seu lance
            </h2>
          </div>

          <Link href="/login" className="flex justify-center items-center bg-emerald-500 rounded-xl h-12 font-medium">
            Fazer login
          </Link>

          <Link href="/sign-up" className="flex justify-center items-center bg-zinc-900 rounded-xl h-12 border-2 border-emerald-500 text-emerald-500 font-medium">
            Criar uma nova conta
          </Link>

        </div>
      </div>
    </main>
  )
}
