import { useState } from "react";

import {
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react";

import { curriculumData } from "../data/courseData";

function Curriculum() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section className="bg-lightBlue py-12 md:py-16">

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

        {/* Heading */}
        <h2 className="text-center text-[23px] font-extrabold text-primary sm:text-3xl">

          Data Science & Machine Learning{" "}

          <span className="text-secondary">
            Course Curriculum
          </span>

        </h2>

        <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_340px]">

          {/* Modules */}
          <div className="space-y-4">

            {curriculumData.map((module, index) => {

              const isOpen = activeModule === index;

              return (
                <div
                  key={module.number}
                  className="grid grid-cols-[64px_1fr] gap-3 sm:grid-cols-[82px_1fr]"
                >

                  {/* Number */}
                  <div className="relative flex flex-col items-center">

                    <span className="rounded-md bg-[#5573CB] px-2 py-1 text-[8px] font-bold uppercase text-white">
                      Module
                    </span>

                    <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-primary shadow-sm">
                      {module.number}
                    </span>

                    {index !== curriculumData.length - 1 && (
                      <span className="absolute top-[61px] bottom-[-20px] left-1/2 border-l border-dashed border-[#6B7FC4]" />
                    )}

                  </div>

                  {/* Accordion */}
                  <div>

                    <button
                      onClick={() =>
                        setActiveModule(
                          isOpen ? -1 : index
                        )
                      }
                      className={`flex w-full items-center justify-between rounded-lg border bg-white px-4 py-4 text-left shadow-sm transition sm:px-5 ${
                        isOpen
                          ? "rounded-b-none border-primary/20"
                          : ""
                      }`}
                    >

                      <div className="pr-4">

                        <p className="text-[10px] font-bold leading-4 text-primary sm:text-xs">
                          {module.title}
                        </p>

                        <p className="mt-1 text-[9px] text-gray-500">
                          {module.hours}
                        </p>

                      </div>

                      <div className="flex-shrink-0 text-primary">

                        {isOpen ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}

                      </div>

                    </button>

                    {isOpen && (
                      <div className="rounded-b-lg border border-t-0 border-gray-100 bg-white px-5 py-5">

                        <h4 className="text-xs font-bold text-gray-700">
                          Python Basics
                        </h4>

                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">

                          {module.topics.map((topic) => (
                            <li
                              key={topic}
                              className="flex items-start gap-2 text-[10px] leading-4 text-gray-600 sm:text-xs"
                            >

                              <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-secondary" />

                              {topic}

                            </li>
                          ))}

                        </ul>

                      </div>
                    )}

                  </div>

                </div>
              );
            })}

          </div>

          {/* Right Lead Card */}
          <div className="hidden lg:block">

            <div className="sticky top-[95px] overflow-hidden rounded-2xl bg-primary shadow-xl">

              {/* Orange Header */}
              <div className="bg-secondary px-5 py-4 text-center">

                <p className="text-sm font-black text-white">
                  Limited Seats Available!
                </p>

                <p className="mt-1 text-[10px] font-semibold text-white">
                  New Batch Starts on 30th September 2025
                </p>

              </div>

              {/* Timer */}
              <div className="px-5 pt-5">

                <div className="grid grid-cols-4 gap-1 text-center text-white">

                  <div>
                    <p className="text-2xl font-black">
                      24
                    </p>
                    <p className="text-[8px] uppercase opacity-60">
                      Days
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-black">
                      17
                    </p>
                    <p className="text-[8px] uppercase opacity-60">
                      Hours
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-black">
                      59
                    </p>
                    <p className="text-[8px] uppercase opacity-60">
                      Minutes
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-black">
                      56
                    </p>
                    <p className="text-[8px] uppercase opacity-60">
                      Seconds
                    </p>
                  </div>

                </div>

              </div>

              {/* Form */}
              <div className="p-5">

                <input
                  placeholder="Full Name"
                  className="h-11 w-full rounded-lg px-4 text-xs outline-none"
                />

                <input
                  placeholder="Phone No."
                  className="mt-3 h-11 w-full rounded-lg px-4 text-xs outline-none"
                />

                <input
                  placeholder="Email"
                  className="mt-3 h-11 w-full rounded-lg px-4 text-xs outline-none"
                />

                <button className="mt-4 flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-xs font-bold text-white">

                  Submit

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <ArrowUpRight size={13} />
                  </span>

                </button>

              </div>

            </div>

            <button className="mt-5 flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-xs font-bold text-white shadow-md">
              Download Curriculum
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Curriculum;