/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { Info, Sparkles } from "lucide-react";
import { useState } from "react";

const DeepDiveButtons = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-15 mb-24 md:mb-0">
      {/* Start Button */}
      <Button
        variant="outline"
        className="border border-[#FB9937] bg-transparent text-white px-[101px] py-[19px] rounded-full"
        area-label="Start button"
      >
        Start
      </Button>

      <span className="text-white text-[16px] font-semibold">or</span>

      {/* Start with Deep Dive Button */}
      <div className="relative">
        <Button
          variant="default"
          area-label="Start with Deep Dive"
          className="bg-gradient-to-t from-[#FB9937] to-[#FFBF00]  text-black px-6  rounded-full flex items-center pl-[22.5px] pr-[30px] py-[19px]"
        >
          <Sparkles className="w-6 h-6 text-white" />
          <span className="text-[16px] font-semibold text-white">
            Start with Deep Dive
          </span>
        </Button>
      </div>
      {/* Info Tooltip */}
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Info className="w-4 h-4 text-gray-400 hover:text-white" />
        {showTooltip && (
          <div className="absolute top-4 left-[-100px] md:top-3 md:left-12 bg-black text-white text-xs p-2 rounded-lg w-64 shadow-lg">
            Deep Dive processes documents section by section for "unlimited"
            context, enabling complete answers. Run once per chat to unlock
            Table AI and Prompt Loops.
          </div>
        )}
      </div>
    </div>
  );
};

export default DeepDiveButtons;
