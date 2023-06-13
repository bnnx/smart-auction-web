import Link from "next/link";
import AuthAside from "@/components/auth-aside";
import SignUpForm from "./form";
import AuthHeader from "@/components/auth-header";

export const metadata = {
  title: 'Cadastro - Smart Auction',
  description: 'A auction website with smart contracts.',
}

export default function SignUpPage() {  
  return (
    <main className="flex flex-row min-h-screen">
      <AuthAside/>
      <div className="flex flex-col w-screen md:w-1/2 lg:w-2/5 items-center justify-center">
        <div className="w-80">
          <AuthHeader
            title="Crie sua conta! 📋"
            subtitle="Digite seus dados para criar uma conta"
          />
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
