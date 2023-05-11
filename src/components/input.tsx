import { HTMLInputTypeAttribute } from "react";

const defaultInputClass = "bg-zinc-950 placeholder-gray-500 rounded-xl h-12 p-4 outline-0";

interface Props {
  name?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  customClass?: string
}

export default function Input({
  name,
  type,
  placeholder,
  customClass
}: Props) {
  return (
    <input
      name={name}
      type={type}
      className={defaultInputClass + " " + customClass}
      placeholder={placeholder}
    />
  )
}