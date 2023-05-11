import Link from "next/link";
import AuthAside from "@/components/auth-aside";
import AuthHeader from "@/components/auth-header";

export default function Welcome() {
  return (
    <main className="flex flex-row min-h-screen">
      <AuthAside/>
      <div className="flex flex-col w-screen md:w-1/2 lg:w-2/5 items-center justify-center">
        <div className="w-80">
          <AuthHeader 
            title="Nossas boas-vindas! 👋" 
            subtitle="O Smart Auction é um portal com centenas de produtos aguardando seu lance"
          />
          <div className="flex flex-col space-y-4">
            <Link href="/login" className="flex justify-center items-center bg-emerald-500 rounded-xl h-12 font-medium">
              Fazer login
            </Link>
            <Link href="/sign-up" className="flex justify-center items-center bg-zinc-900 rounded-xl h-12 border-2 border-emerald-500 text-emerald-500 font-medium">
              Criar uma nova conta
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
