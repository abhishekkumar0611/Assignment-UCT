import {
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  Code2,
  Lightbulb,
  Users,
  ArrowUpRight,
} from "lucide-react";

const audience = [
  {
    title: "Freshers",
    icon: Users,
    dark: true,
  },

  {
    title: "Graduates/\nPost Graduates / PhD",
    icon: GraduationCap,
    dark: false,
  },

  {
    title: "Working\nProfessionals",
    icon: BriefcaseBusiness,
    dark: true,
  },

  {
    title: "Entrepreneurs",
    icon: Building2,
    dark: false,
  },

  {
    title: "DS/ML/AI Enthusiasts",
    icon: Code2,
    dark: true,
  },

  {
    title: "Tech Innovators",
    icon: Lightbulb,
    dark: false,
  },
];

function Program() {
  return (
    <section className="relative overflow-hidden bg-[#F0F3FF]">

      {/* Decorative lines */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden md:block">

        <div className="h-3 w-[310px] rounded-r-full bg-[#DCE3FF]" />

        <div className="mt-3 h-3 w-[230px] rounded-r-full bg-[#DCE3FF]" />

        <div className="mt-3 h-3 w-[165px] rounded-r-full bg-[#DCE3FF]" />

      </div>

      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-14">

        {/* LEFT */}
        <div>

          <h2 className="text-[27px] font-extrabold leading-[1.15] text-primary sm:text-4xl">

            Who Should

            <br />

            <span className="text-secondary">
              Do This Program?
            </span>

          </h2>

          <p className="mt-5 max-w-[430px] text-[10px] leading-5 text-gray-600 sm:text-xs">

            This program helps anyone learn and grow in data science and
            artificial intelligence, no matter their background.

          </p>

          <button className="mt-6 flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-[10px] font-bold text-white shadow-lg sm:text-xs">

            Download Brochure

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight size={14} />
            </span>

          </button>

        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

          {audience.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex min-h-[105px] flex-col items-center justify-center rounded-lg p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[125px] ${
                  item.dark
                    ? "bg-[#202E78] text-white"
                    : "bg-[#607BD3] text-white"
                }`}
              >

                <Icon
                  size={27}
                  strokeWidth={2}
                />

                <p className="mt-3 whitespace-pre-line text-[9px] font-bold leading-4 sm:text-[10px]">
                  {item.title}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Program;