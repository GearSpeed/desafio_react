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
        h-screen
        overflow-y-auto
        p-4
        pl-28
        pr-28
        border 
        border-gray-300
        flex
        gap-4
        justify-center
      ">
        <article className="
          w-1/4
          hidden
          lg:flex
        ">
          <Article />
        </article>
        <aside className="
          w-1/2
          min-w-96
        ">
          <Posts />
        </aside>
        <div className="
          w-1/3
        ">
          <div className="hidden lg:flex flex-col justify-end bg-white p-4 rounded-lg border">
            <div className="h-14 rounded-t-md">
              <p className="font-bold text-xl pl-3 pt-3">Active discussions</p>
            </div>
            <Discuss />
          </div>
        </div>
      </div>
    </main>
  );
}
