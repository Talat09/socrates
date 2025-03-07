import { Sidebar } from "@/components/Sidebar/Sidebar";
import ContentBg from "@/assets/content-bg.png";
export default function Home() {
  return (
    <div className="flex h-screen bg-[#1A1A1A] text-white p-4">
      <Sidebar />
      <main
        className="flex-1 overflow-auto w-full justify-center items-center ml-3 mr-4 my-4 bg-[#2B2B2B] bg-cover bg-center rounded-[16px]"
        style={{ backgroundImage: `url('${ContentBg.src}')` }}
      >
        <div className="flex justify-center items-center">
          <h1 className="">Content goes here</h1>
        </div>
      </main>
    </div>
  );
}
