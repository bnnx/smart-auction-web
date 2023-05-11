'use client';

import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { FormEvent } from "react";

export default function LoginForm() {
  function getInputValue({ target, name }: { target: EventTarget & HTMLFormElement, name: string }) {
    return (target.elements.namedItem(name) as HTMLInputElement).value
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const target = event.currentTarget
    const body = {
      email: getInputValue({ target, name: 'email' }),
      password: getInputValue({ target, name: 'password' }),
    }
    // CHAMA A API
    console.log('dados login: ', body)
  }

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
      <Link
        href="/forgot-password"
        className="hover:underline text-end text-white selection:bg-amber-500 selection:text-white"
      >
        Esqueceu sua senha?
      </Link>
      <Button
        text="Entrar"
      />
    </form>
  )
}