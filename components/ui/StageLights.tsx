"use client";
import { useEffect, useState, type CSSProperties } from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

// `left` is where each lamp hangs along the top edge, in vw
const beams = [
  { left: 12, color: "rgba(203,172,249,0.75)", rest: -22 },
  { left: 50, color: "rgba(255,255,255,0.5)", rest: 10 },
  { left: 88, color: "rgba(99,102,241,0.75)", rest: 22 },
  { left: 30, color: "rgba(56,189,248,0.45)", rest: -8 },
];

type Pose = { x: number; r: number; tilt: number; dur: number };

// before the first random move every beam just rests
const resting: Pose[] = beams.map((b) => ({ x: 0, r: b.rest, tilt: 1, dur: 1.5 }));

const rand = (min: number, max: number) => min + Math.random() * (max - min);

const STORAGE_KEY = "stage-lights";

export const StageLights = () => {
  // lights start off; a visitor who switched them on keeps them on next time
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);
  const [poses, setPoses] = useState<Pose[]>(resting);

  // remembered choice, read after mount so the server and client markup match
  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "on") setOn(true);
    } catch {}
  }, []);

  // let the hero text start before the lights come up
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // every lamp picks its own new random target on its own random schedule,
  // like moving heads on a stage rig
  useEffect(() => {
    if (!on || !ready) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const move = (i: number) => {
      const dur = rand(2, 5.5);
      const left = beams[i].left;
      setPoses((prev) => {
        const next = [...prev];
        next[i] = {
          // roam anywhere along the rig, but keep the lamp on screen
          x: rand(8 - left, 92 - left),
          r: rand(-42, 42),
          tilt: rand(0.75, 1.15),
          dur,
        };
        return next;
      });
      // sometimes hold still for a beat before moving on
      const hold = Math.random() < 0.3 ? rand(0.8, 2) : 0;
      timers[i] = setTimeout(() => move(i), (dur + hold) * 1000);
    };

    beams.forEach((_, i) => {
      timers[i] = setTimeout(() => move(i), rand(0, 1200));
    });

    return () => timers.forEach(clearTimeout);
  }, [on, ready]);

  const toggle = () => {
    const next = !on;
    setOn(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
    } catch {}
  };

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={on}
        aria-label={on ? "Turn the stage lights off" : "Turn the stage lights on"}
        title={on ? "Lights off" : "Lights on"}
        className={`fixed left-1/2 top-2 z-[4000] -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black-100/80 backdrop-blur transition-all duration-700 hover:border-white/40 ${
          ready ? "opacity-100" : "pointer-events-none opacity-0"
        } ${
          on
            ? "text-yellow-300 shadow-[0_0_22px_rgba(253,224,71,0.45)]"
            : "text-white/50"
        }`}
      >
        {on ? <FaLightbulb size={18} /> : <FaRegLightbulb size={18} />}
      </button>

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-20 overflow-hidden mix-blend-screen transition-opacity duration-[1200ms]"
        style={{ opacity: on && ready ? 1 : 0 }}
      >
        {beams.map((beam, i) => {
          const pose = poses[i];
          return (
            <div
              key={i}
              className="absolute top-0 h-[130vh] w-[55vw] max-w-[820px] origin-top"
              style={
                {
                  left: `${beam.left}vw`,
                  transform: `translateX(-50%) translateX(${pose.x}vw) rotate(${pose.r}deg) scaleY(${pose.tilt})`,
                  transition: `transform ${pose.dur}s cubic-bezier(0.45, 0, 0.25, 1)`,
                } as CSSProperties
              }
            >
              {/* the cone of light */}
              <div
                className="h-full w-full blur-xl"
                style={{
                  background: `linear-gradient(to bottom, ${beam.color} 0%, transparent 85%)`,
                  clipPath: "polygon(47% 0, 53% 0, 100% 100%, 0 100%)",
                }}
              />
              {/* the lamp itself */}
              <div
                className="absolute left-1/2 top-0 h-4 w-20 -translate-x-1/2 rounded-full blur-md"
                style={{ background: beam.color }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
