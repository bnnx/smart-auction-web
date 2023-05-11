import Image from "next/image";
import vectorPic from "@/resources/images/vector.jpg";

export default function AuthAside() {
  return (
    <aside className="flex bg-white w-0 md:w-1/2 lg:w-3/5 items-center justify-center">
      <Image 
        src={vectorPic}
        alt="Image of an auction"
        className="p-16 2xl:max-w-screen-lg"
      />
    </aside>
  )
}