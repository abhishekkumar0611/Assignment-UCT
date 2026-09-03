import {
    ArrowUpRight,
    CalendarDays,
    Star,
} from "lucide-react";

import MainForm from "./MainForm";
import InstituteBadge from "./InstituteBadge";

function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-primary"
        >

            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(25,48,111,.94),
        rgba(42,72,143,.82)
      ),
      url('/assets/iitr-campus.svg')
    `,
                }}
            />
            <div className="relative mx-auto grid max-w-[1440px] gap-8 px-5 py-9 sm:px-8 lg:grid-cols-[1.25fr_.75fr] lg:gap-14 lg:px-14 lg:py-14">

                {/* LEFT */}
                <div className="flex flex-col justify-center text-white">

                    <p className="text-[11px] font-medium italic text-white/90 sm:text-xs">
                        Online • 6 Months • Designed & Delivered By E&ICT Academy, IIT
                        Roorkee
                    </p>

                    <h1 className="mt-3 max-w-[750px] text-[30px] font-extrabold leading-[1.12] sm:text-[40px] lg:text-[53px]">
                        Data Science & Machine Learning
                    </h1>

                    <p className="mt-4 max-w-[680px] text-[12px] leading-6 text-white/85 sm:text-sm lg:text-[15px]">
                        Accelerate your career with an industry-based course on Data
                        Science, Machine Learning, AI and Gen AI through a specially
                        designed program by E&ICT Academy, IIT Roorkee for Data Science &
                        Artificial Intelligence enthusiasts. Learn in-demand skills such
                        as Data Analysis, Data Visualization, Python, AI, Gen AI,
                        Agentic AI and more.
                    </p>

                    <div className="mt-5 border border-white/40 bg-white/5 px-4 py-3 text-[11px] font-semibold backdrop-blur-sm sm:text-sm">
                        Gain Expertise In Advanced Gen AI, Agentic AI & LLMs
                    </div>

                    {/* Ratings */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">

                        <div className="flex gap-[2px] text-secondary">

                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    size={16}
                                    fill="currentColor"
                                />
                            ))}

                        </div>

                        <span className="text-[10px] text-white">
                            4.8/5 422 votes
                        </span>

                        <span className="text-[10px] text-white">
                            4.8/5
                        </span>

                        <span className="text-[10px] text-white">
                            4.9/5
                        </span>

                        <span className="text-[10px] text-white">
                            4.7/5
                        </span>

                    </div>

                    {/* Buttons */}
                    <div className="mt-5 flex flex-wrap gap-3">

                        <button className="rounded-full bg-[#718ee0] px-5 py-3 text-[11px] font-bold text-white shadow-lg transition hover:bg-[#809bed]">
                            Download Brochure
                        </button>

                        <button className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-[11px] font-bold text-white shadow-lg transition hover:bg-secondaryDark">

                            Apply Now

                            <ArrowUpRight size={15} />

                        </button>

                    </div>

                    <InstituteBadge />

                </div>

                {/* RIGHT FORM */}
                <div className="flex items-center justify-center">

                    <MainForm />

                </div>

            </div>

            {/* Bottom information */}
            <div className="relative border-t border-white/10 bg-black/5">

                <div className="mx-auto flex max-w-[1440px] flex-wrap justify-end gap-7 px-5 py-4 sm:px-8 lg:px-14">

                    <div className="flex items-center gap-2 text-white">

                        <CalendarDays size={20} />

                        <div>
                            <p className="text-[9px] opacity-70">
                                Next Cohort
                            </p>

                            <p className="text-xs font-bold">
                                10 Apr 2025
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center gap-2 text-white">

                        <CalendarDays size={20} />

                        <div>
                            <p className="text-[9px] opacity-70">
                                Admission Deadline
                            </p>

                            <p className="text-xs font-bold">
                                10 Apr 2025
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;