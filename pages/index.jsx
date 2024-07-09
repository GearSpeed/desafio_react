import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Article from "./components/Article";
import Posts from "./components/Posts";
import Discuss from "./components/Discuss";

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
        pl-28
        pr-28
        border 
        border-gray-300
        flex
        justify-center
      ">
        <article className="
          w-1/4
          bg-red-300
        ">
          <Article />
        </article>
        <aside className="
          w-1/2
        ">
          <Posts />
        </aside>
        <div className="
          w-1/4
          bg-green-300
        ">
          <Discuss />
        </div>
      </div>
    </main>
  );
}
