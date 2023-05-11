import Image from "next/image";
import Link from "next/link";
import hummerPic from "@/resources/images/auction-hummer.png";
import Input from "@/components/input";
import Button from "@/components/button";
import AuthAside from "@/components/auth-aside";

export const metadata = {
  title: 'Criar conta - Smart Auction',
  description: 'A auction website with smart contracts.',
}

export default function SignUp() {  
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

          <form className="flex flex-col space-y-4">
            <Input
              type="text"
              name="firstName" 
              placeholder="Primeiro nome"
            />
            <Input
              type="text" 
              name="lastName" 
              placeholder="Último nome"
            />
            <Input
              type="email" 
              name="email" 
              placeholder="Email"
            />
            <Input
              type="password" 
              name="password" 
              placeholder="Senha"
            />
            <Input
              type="password" 
              name="confirmPassword" 
              placeholder="Confirme sua senha"
            />
            <Button
              text="Criar conta"
            />
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
