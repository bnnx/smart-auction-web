import Link from "next/link"
import AuthAside from "@/components/auth-aside";
import LoginForm from "./form";
import AuthHeader from "@/components/auth-header";

export const metadata = {
  title: 'Login - Smart Auction',
  description: 'A auction website with smart contracts.',
}

export default function LoginPage() {
  return (
    <main className="flex flex-row min-h-screen">
      <AuthAside/>
      <div className="flex flex-col w-screen md:w-1/2 lg:w-2/5 items-center justify-center">
        <div className="w-80">
          <AuthHeader title="Olá novamente! 👋" subtitle="Digite seus dados para acessar o portal"/>
          <LoginForm/>
          <p className="text-center pt-4 text-gray-500 font-normal selection:bg-amber-500 selection:text-white">
            Ainda não tem conta?{" "}
            <Link
              href="/sign-up"
              className="text-white hover:underline"
            >
              Criar uma conta
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
