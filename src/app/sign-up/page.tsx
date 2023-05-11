import Image from "next/image";
import Link from "next/link";
import AuthAside from "@/components/auth-aside";
import hummerPic from "@/resources/images/auction-hummer.png";
import SignUpForm from "./form";

export const metadata = {
  title: 'Criar conta - Smart Auction',
  description: 'A auction website with smart contracts.',
}

export default function SignUpPage() {  
  return (
    <main className="flex flex-row min-h-screen">
      <AuthAside/>
      <div className="flex flex-col w-screen md:w-1/2 lg:w-2/5 items-center justify-center">
        <div className="w-80">

          <div className="flex pb-4 justify-center">
            <Image 
              src={hummerPic}
              alt="Image of an auction hammer"
              className="object-contain w-28 h-32"
            />
          </div>

          <div className="pb-4 text-center">
            <h1 className="font-bold text-white text-xl selection:bg-amber-500">Olá! 👋</h1>
            <h2 className="font-normal text-gray-500 selection:bg-amber-500 selection:text-white">Digite seus dados para criar uma conta</h2>
          </div>

          <SignUpForm/>

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
