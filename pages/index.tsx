import Image from "next/image";
import { Geist, Geist_Mono ,Quicksand , Source_Sans_3} from "next/font/google";
import { Hero } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className='bg-[url("/assets/hero.png")] bg-cover bg-center h-[481px] w-7/8 flex flex-col items-center justify-center text-white rounded-xl my-3'  >
      <h1 className={`${sourceSans3.variable} text-7xl w-[867px] text-center`}>Find your favorite place here!</h1>
      <p className={`${quickSand.variable} text-2xl`}>The best prices for over 2 million properties worldwide.</p>
    </div>
  );
}
