import React from "react";

export default function MagicButton({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) {
  return (
    <button
      className="magic-border relative inline-flex h-12 rounded-lg focus:outline-none w-full md:w-60 md:mt-10"
      onClick={handleClick}
    >
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[7px] bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
}
