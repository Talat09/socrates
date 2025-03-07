import { Sidebar } from "@/components/Sidebar/Sidebar";
import ContentBg from "@/assets/content-bg.png";
import InfoIcon from "@/assets/info-icon.png";
import Image from "next/image";
import CloudIcon from "@/assets/cloud-icon.png";
import FileIcon from "@/assets/FileIcon.png";
import UrlIcon from "@/assets/UrlIcon.png";
import DropboxIcon from "@/assets/DropboxIcon.png";
import GoogleDriveIcon from "@/assets/GoogleDriveIcon.png";
import FileUploader from "@/components/FileUploader/FileUploader";
import DeepDiveButtons from "@/components/DeepDiveButtons/DeepDiveButtons";
export default function Home() {
  return (
    <div className="flex h-screen bg-[#1A1A1A] text-white p-4">
      <Sidebar />
      <main
        className="flex-1 overflow-auto w-full justify-center items-center px-2 md:px-0 ml-3 mr-4 my-4 bg-[#2B2B2B] bg-cover bg-center rounded-[16px]"
        style={{ backgroundImage: `url('${ContentBg.src}')` }}
      >
        <div className="flex justify-center items-center w-full">
          {" "}
          {/* Make parent div full width */}
          <div className="bg-[#242424] rounded-[100px] mt-10 gap-3 p-3 flex items-center max-w-[664px] w-full">
            {" "}
            {/* Responsive wrapper */}
            <Image src={InfoIcon} width={20} height={20} alt="Info Icon" />
            <p className="text-[14px] text-center w-full">
              {" "}
              {/* Text center and full width */}
              The web version does not display local chats. To access all
              features, please{" "}
              <span className="font-semibold text-[#FB9937]">
                install the app.
              </span>
            </p>
          </div>
        </div>
        {/* Add Files to Cloud Chat start here */}
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="flex flex-col md:flex-row items-center ">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-medium ">
              Add Files to
            </h1>

            <Image
              src={CloudIcon} // Replace with your cloud icon path
              width={70}
              height={70}
              alt="Cloud Icon"
            />

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-medium">
              Cloud Chat
            </h1>
          </div>
          <p className="text-sm text-center mt-6 ">
            Your files will not be stored on our servers and no AI models will
            be trained. <br />
            <span className="text-[#F37F0C] font-semibold">
              {" "}
              Supported File Types: .docx, .pdf, .epub, and many text filetypes
            </span>
          </p>
        </div>
        {/* Add Files to Cloud Chat ends here */}
        {/* Card section start here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2  mt-10 w-full max-w-[820px]  mx-auto">
          <div className="bg-[#242424] rounded-[20px] px-6 py-[37px] flex items-center gap-1.5  h-[120px] ">
            <div className="p-[15px]">
              <Image
                src={FileIcon}
                width={35.96}
                height={35.96}
                alt="File Icon"
              />
            </div>
            <p className="text-lg font-semibold">
              Drag & drop local files here, <br /> or click to select
            </p>
          </div>
          <div className="bg-[#242424] rounded-2xl px-6 py-6 flex items-center gap-1.5 w-full max-w-md h-[120px]">
            <div className="p-4">
              <Image src={UrlIcon} width={36} height={36} alt="URL Icon" />
            </div>
            <div className="flex flex-col w-full">
              <p className="font-semibold text-white">Enter a public URL:</p>
              <div className="bg-[#353535] rounded-full flex  items-center mt-2 w-full h-12 pl-5 py-0.5 pr-0.5">
                <input
                  type="text"
                  placeholder="https://example.com/file.pdf"
                  className="w-full bg-transparent outline-none text-[#EAEAEA] placeholder-[#7E7C78] text-sm"
                />
                <button className="bg-white/20 hover:bg-white/30 transition rounded-full px-5 py-[8.5px] text-sm text-white font-semibold">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#242424] rounded-[20px] px-6 py-[37px] flex items-center gap-1.5  h-[120px]">
            <div className="p-[15px]">
              <Image
                src={DropboxIcon}
                width={35.96}
                height={35.96}
                alt="Dropbox Icon"
              />
            </div>
            <p className="text-lg font-semibold">Add files from Dropbox</p>
          </div>
          <div className="bg-[#242424] rounded-[20px] px-6 py-[37px] flex items-center gap-1.5  h-[120px]">
            <div className="p-[15px]">
              <Image
                src={GoogleDriveIcon}
                width={35.96}
                height={35.96}
                alt="Google Drive Icon"
              />
            </div>
            <p className="text-lg font-semibold">Add files from Google Drive</p>
          </div>
        </div>
        {/* Card section ends here */}
        <FileUploader />
        <DeepDiveButtons />
      </main>
    </div>
  );
}
