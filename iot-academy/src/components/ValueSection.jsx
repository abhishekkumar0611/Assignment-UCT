import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  MonitorPlay,
} from "lucide-react";

function ValueSection() {
  return (
    <section className="bg-white">

      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[.75fr_1.25fr] lg:px-14">

        {/* IMAGE AREA */}
        <div className="relative mx-auto h-[330px] w-full max-w-[390px]">

          {/* Blue circle */}
          <div className="absolute bottom-4 left-1/2 h-[270px] w-[270px] -translate-x-1/2 rounded-full bg-primary" />

          {/* Person illustration */}
          <div className="absolute bottom-5 left-1/2 z-10 h-[260px] w-[205px] -translate-x-1/2">

            {/* Head */}
            <div className="absolute left-[62px] top-[20px] h-[76px] w-[76px] rounded-full bg-[#D59D78]" />

            {/* Hair */}
            <div className="absolute left-[60px] top-[13px] h-[37px] w-[80px] rounded-t-full bg-[#2A2530]" />

            {/* Glasses */}
            <div className="absolute left-[66px] top-[47px] z-20 flex gap-1">
              <div className="h-[17px] w-[23px] rounded-md border-2 border-gray-800" />
              <div className="h-[17px] w-[23px] rounded-md border-2 border-gray-800" />
            </div>

            {/* Body */}
            <div className="absolute bottom-0 left-[17px] h-[185px] w-[175px] rounded-t-[90px] bg-[#D4D8E8]" />

            {/* Shirt */}
            <div className="absolute bottom-0 left-[48px] h-[165px] w-[110px] rounded-t-[55px] bg-[#E4E5EB]" />

            {/* Laptop */}
            <div className="absolute bottom-[24px] right-[-35px] h-[100px] w-[150px] -rotate-3 rounded-lg bg-gray-600 p-2 shadow-xl">
              <div className="h-full w-full rounded bg-gray-200" />
            </div>

          </div>

          {/* EICT badge */}
          <div className="absolute bottom-[105px] left-0 z-20 rounded-lg bg-white px-4 py-2 shadow-lg">
            <span className="text-xl font-extrabold text-green-600">
              eict
            </span>

            <span className="ml-1 text-[9px] text-gray-500">
              IIT Roorkee
            </span>
          </div>

          {/* Trophy */}
          <div className="absolute bottom-[35px] left-[10px] z-20 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-lg">
            <Award className="text-secondary" />
          </div>

          {/* Placement badge */}
          <div className="absolute bottom-[15px] right-[-5px] z-20 rounded-lg bg-white px-5 py-4 text-[12px] font-extrabold text-primary shadow-lg">
            100% Placement Support
          </div>

        </div>

        {/* CONTENT */}
        <div>

          <h2 className="text-[25px] font-extrabold leading-[1.25] text-[#111B5A] sm:text-3xl lg:text-[34px]">

            The unparalleled distinction and transformative{" "}

            <span className="text-secondary">
              value of this program
            </span>

          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">

            {/* Card 1 */}
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF2FF] text-[#526BC0]">
                <MonitorPlay size={22} />
              </div>

              <h3 className="text-sm font-bold text-primary">
                Live Interaction Sessions
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-gray-500">
                Join live sessions with industry experts to learn
                real problem-solving skills.
              </p>

            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-[#E1E5FA] bg-[#F0F3FF] p-5 shadow-card">

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#526BC0]">
                <Award size={22} />
              </div>

              <h3 className="text-sm font-bold text-primary">
                Prestigious Certification
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-gray-500">
                Earn an Advanced Data Science and Machine Learning
                certificate from E&ICT IIT Roorkee.
              </p>

            </div>

          </div>

          {/* Controls */}
          <div className="mt-7 flex items-center gap-3">

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600">
              <ArrowLeft size={17} />
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
              <ArrowRight size={17} />
            </button>

            <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-white">
              Enquire Now
              <ArrowUpRight size={15} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ValueSection;