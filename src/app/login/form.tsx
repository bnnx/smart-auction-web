'use client';

import Button from "@/components/button";
import Input from "@/components/input";
import { api, setAccessToken } from "@/services/api";
import { AxiosError } from "axios";
import Link from "next/link";
import { FormEvent } from "react";

export default function LoginForm() {
  function getInputValue({ target, name }: { target: EventTarget & HTMLFormElement, name: string }) {
    return (target.elements.namedItem(name) as HTMLInputElement).value
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const target = event.currentTarget
    const body = {
      email: getInputValue({ target, name: 'email' }),
      password: getInputValue({ target, name: 'password' }),
    }
    try {
      const { data } = await api.post('/sessions', body)
      alert(data.accessToken)
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message)
      } else {
        alert('Ocorreu um erro inesperado, tente novamente!')
      }
    }
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
        href="/login"
        className="hover:underline text-end text-white selection:bg-amber-500 selection:text-white"
        onClick={() => alert('Funcionalidade não implementada!')}
      >
        Esqueceu sua senha?
      </Link>
      <Button
        text="Entrar"
      />
    </form>
  )
}