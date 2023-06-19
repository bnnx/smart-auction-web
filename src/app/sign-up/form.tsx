'use client';

import Button from "@/components/button";
import Input from "@/components/input";
import { api } from "@/services/api";
import { AxiosError } from "axios";
import { FormEvent } from "react";

export default function SignUpForm() {
  function getInputValue({ target, name }: { target: EventTarget & HTMLFormElement, name: string }) {
    return (target.elements.namedItem(name) as HTMLInputElement).value
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const target = event.currentTarget
    const body = {
      firstName: getInputValue({ target, name: 'firstName' }),
      lastName: getInputValue({ target, name: 'lastName' }),
      email: getInputValue({ target, name: 'email' }),
      password: getInputValue({ target, name: 'password' }),
    }
    try {
      await api.post('/users', body)
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
        name="passwordConfirmation" 
        placeholder="Confirme sua senha"
      />
      <Button
        text="Criar conta"
      />
    </form>
  )
}