"use client";
import { useState } from "react";
import { X, FileText, File, Info } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const FileUploader = () => {
  const [files, setFiles] = useState([
    { name: "Report_file.pdf", type: "pdf" },
    { name: "Article.docs", type: "docs" },
  ]);

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col md:flex-row gap-2  bg-[#242424] pl-4 py-4 rounded-[34px] w-full max-w-[820px]  md:mx-auto  mt-5">
      {files.map((file, index) => (
        <div
          key={index}
          className="flex items-center  bg-[#2B2B2B] text-white px-3 py-1.5 rounded-[20px] "
        >
          {file.type === "pdf" ? (
            <FileText className="text-red-500 w-5 h-5" />
          ) : (
            <File className="text-blue-500 w-5 h-5" />
          )}
          <span className="text-sm ml-2">{file.name}</span>
          <Checkbox className="border-gray-500 ml-3.5 mr-1.5" />
          <span className="text-sm">Force OCR</span>
          <Info className="w-4 h-4 text-gray-400  ml-1.5 " />
          <X
            className="cursor-pointer w-4 h-4 text-gray-400 hover:text-white ml-3.5"
            onClick={() => removeFile(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default FileUploader;
