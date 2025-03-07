"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/Logo (1).png";
import SearchIcon from "@/assets/search-icon.png";
import ToggleIcon from "@/assets/toggle-icon.png";
import PlusIcon from "@/assets/plus-icon.png";
import ExportIcon from "@/assets/export-icon.png";
import UserAvatar from "@/assets/user-avatar.png";
import SettingsIcon from "@/assets/settings-icon.png";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`relative bg-[#1A1A1A] p-3 border-r border-[#FFFFFF26] transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-14" : "w-64"
      }`}
    >
      {/* Collapsed state content */}
      {isCollapsed && (
        <div className="flex flex-col items-center">
          <div className="py-2 mb-6">
            <button
              onClick={toggleSidebar}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src={ToggleIcon}
                width={24}
                height={24}
                alt="Toggle Icon"
              />
            </button>
          </div>

          {/* Collapsed buttons */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <Button className="w-8 h-8 rounded-full border border-[#FFFFFF26] p-0 flex items-center justify-center">
              <Image src={PlusIcon} width={16} height={16} alt="Plus Icon" />
            </Button>
            <Button className="w-8 h-8 rounded-full bg-[#FFFFFF26] p-0 flex items-center justify-center">
              <Image src={PlusIcon} width={16} height={16} alt="Plus Icon" />
            </Button>
          </div>

          {/* Collapsed bottom content */}
          <div className="absolute bottom-4 flex flex-col items-center w-8">
            <div className="bg-[#363636] p-2 rounded-[12px] w-8 h-8 flex items-center justify-center mb-3">
              <span className="text-[#F37F0C] text-xs font-bold">+</span>
            </div>
            <div className="bg-[#2B2B2B] w-8 h-8 rounded-full flex justify-center items-center p-1 mb-3">
              <Image
                src={ExportIcon}
                width={16}
                height={16}
                alt="Export Icon"
              />
            </div>
            <Image
              src={UserAvatar}
              width={28}
              height={28}
              alt="User Avatar"
              className="rounded-full"
            />
          </div>
        </div>
      )}

      {/* Expanded state content - using visibility and opacity for smooth transitions */}
      <div
        className={`${
          isCollapsed ? "invisible absolute opacity-0" : "visible opacity-100"
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between">
          <Image src={Logo} width={157} height={40} alt="Socrates" />
          <div className="flex py-2 gap-3">
            <Image src={SearchIcon} width={24} height={24} alt="Search Icon" />
            <button
              onClick={toggleSidebar}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src={ToggleIcon}
                width={24}
                height={24}
                alt="Toggle Icon"
              />
            </button>
          </div>
        </div>

        {/* add folder and create chat */}
        <div className="mt-[32px]">
          <Button className="flex items-center text-sm font-semibold text-white gap-1 w-full rounded-full border border-[#FFFFFF26] py-[10px] hover:bg-[#FFFFFF12] transition-colors">
            <Image src={PlusIcon} width={20} height={20} alt="Plus Icon" />
            Add folder
          </Button>
          <Button className="flex items-center text-sm font-semibold text-white gap-1 w-full rounded-full py-[10px] mt-[22.5px] bg-[#FFFFFF26] hover:bg-[#FFFFFF33] transition-colors">
            <Image src={PlusIcon} width={20} height={20} alt="Plus Icon" />
            Create chat
          </Button>
        </div>

        {/* bottom part */}
        <div className="fixed bottom-4">
          <div className="bg-[#363636] p-4 rounded-[12px]">
            <h3 className="text-[16px] font-semibold">Upgrade to Premium</h3>
            <p className="text-sm text-[#868686]">
              Make the most of all features!
            </p>
            <Button className="w-full border border-[#F37F0C] text-[#F37F0C] bg-transparent rounded-full text-[14px] font-semibold mt-3 hover:bg-[#F37F0C] hover:text-white transition-colors">
              Upgrade plan
            </Button>
          </div>
          <div className="flex items-center gap-2 p-[2px] my-3">
            <div className="bg-[#2B2B2B] w-[36px] h-[36px] rounded-full flex justify-center items-center p-2">
              <Image
                src={ExportIcon}
                width={20}
                height={20}
                alt="Export Icon"
              />
            </div>
            <p className="text-[14px] font-medium text-white">
              Flow AI Templates
            </p>
          </div>
          <div className="flex justify-between items-center p-[2px]">
            <div className="flex items-center gap-2">
              <Image
                src={UserAvatar}
                width={36}
                height={36}
                alt="User Avatar"
              />
              <p className="text-[14px] font-medium text-white">
                Jessica Mills
              </p>
            </div>
            <Image
              src={SettingsIcon}
              width={24}
              height={24}
              alt="Setting Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
