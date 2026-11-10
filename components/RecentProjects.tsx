"use client";
import React, { useState } from "react";
import { projects, type ProjectCategory } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getToolIcon } from "@/data/tools";

const tabs: { key: ProjectCategory; label: string }[] = [
  { key: "app", label: "Projects" },
  { key: "landing", label: "Landing pages" },
];

export default function RecentProjects() {
  const [active, setActive] = useState<ProjectCategory>("app");
  const visible = projects.filter((project) => project.category === active);

  return (
    <div className="py-20 text-white" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div
        role="tablist"
        aria-label="Project type"
        className="flex justify-center mt-10"
      >
        <div className="flex gap-1 rounded-full border border-white/[0.15] bg-black-200 p-1">
          {tabs.map(({ key, label }) => {
            const count = projects.filter((p) => p.category === key).length;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                onClick={() => setActive(key)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm md:text-base transition-colors",
                  active === key
                    ? "bg-purple text-black-100 font-semibold"
                    : "text-white-200 hover:text-white"
                )}
              >
                {label}
                <span className="ml-2 text-xs opacity-70">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {visible.map(({ id, title, des, img, stack, highlights, link }) => (
          <Link
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:h-[46rem] h-[51rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px]  w-[80vw] overflow-hidden sm:h-[32vh] h-[24vh] mb-6">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <Image
                    src="/bg.png"
                    alt="bg-img"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2 sm:line-clamp-1 min-h-[2.75rem] sm:min-h-0">
                {title}
              </h1>

              <p className="lg:text-base font-light text-sm line-clamp-3 mt-1">
                {des}
              </p>

              {/* Fixed height so every card lines up, however many chips it has */}
              <div className="mt-4 flex h-[19.5rem] sm:h-[13rem] flex-col gap-3 overflow-hidden">
                <div>
                  <p className="mb-1.5 text-[10px] uppercase tracking-widest text-white-200">
                    Built with
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {stack.map((tool) => {
                      const Icon = getToolIcon(tool);
                      return (
                        <li
                          key={tool}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.15] bg-white/[0.05] px-2.5 py-1 text-xs text-white"
                        >
                          <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                          {tool}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <p className="mb-1.5 text-[10px] uppercase tracking-widest text-white-200">
                    Highlights
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-purple/30 bg-purple/10 px-2.5 py-1 text-xs text-purple"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-end mt-4 mb-3">
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check live site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </Link>
        ))}
      </div>
    </div>
  );
}
