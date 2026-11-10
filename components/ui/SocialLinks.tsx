import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "@/data";
import { cn } from "@/lib/utils";

export default function SocialLinks({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialMedia.map((profile) => (
        <Link
          key={profile.id}
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={profile.name}
          title={profile.name}
          className={cn(
            "cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition hover:border-purple/60 hover:-translate-y-0.5",
            size === "sm" ? "w-8 h-8" : "w-10 h-10"
          )}
        >
          <Image
            src={profile.img}
            alt={profile.name}
            width={size === "sm" ? 16 : 20}
            height={size === "sm" ? 16 : 20}
          />
        </Link>
      ))}
    </div>
  );
}
