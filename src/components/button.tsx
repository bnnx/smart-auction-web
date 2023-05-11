const defaultButtonClass = "bg-emerald-500 rounded-xl h-12";

interface Props {
  handleSubmit?: () => void;
  type?: "submit" | "button" | "reset" ;
  text: string;
  customClass?: string;
}

export default function Button({
  handleSubmit,
  type = "submit",
  text,
  customClass
}: Props) {
  return (
    <button
      type={type}
      className={defaultButtonClass + " " + customClass}
      onSubmit={handleSubmit}
    >
      {text}
    </button>
  )
}