import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="
        bg-[#F5F5F5]
        w-full
        h-[647px]
        max-h-[647px]
        overflow-y-auto
        p-4
        border 
        border-gray-300
      ">
        <h1>Hola mundo</h1>
      </div>
    </main>
  );
}
