import Image from "next/image";
import hummerPic from "@/resources/images/auction-hummer.png";

interface Props {
  title: string;
  subtitle: string
}

export default function AuthHeader({
  title, 
  subtitle
}: Props) {
  return (
    <div>
      <div className="flex pb-4 justify-center">
        <Image 
          src={hummerPic}
          alt="Image of an auction hammer"
          className="object-contain w-28 h-32"
        />
      </div>

      <div className="pb-4 text-center">
        <h1 className="font-bold text-white text-xl selection:bg-amber-500">{title}</h1>
        <h2 className="font-normal text-gray-500 selection:bg-amber-500 selection:text-white">{subtitle}</h2>
      </div>
    </div>
  )
}