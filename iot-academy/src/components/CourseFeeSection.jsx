import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

function CourseFeeSection() {
  return (
    <section className="bg-white">

      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:py-16 lg:px-14">

        {/* Heading */}
        <h2 className="text-center text-[20px] font-extrabold text-primary sm:text-3xl">

          Data Science, Machine Learning & AI{" "}

          <span className="text-secondary">
            Course Fee Structure
          </span>

        </h2>

        {/* Main Fee Container */}
        <div className="mx-auto mt-8 max-w-[1050px] rounded-2xl bg-[#E8EDFF] p-4 shadow-sm sm:p-6">

          <div className="grid overflow-hidden rounded-xl bg-[#F4F6FF] md:grid-cols-2">

            {/* LEFT */}
            <div className="border-b border-[#D3D9F2] p-5 md:border-b-0 md:border-r sm:p-7">

              {/* Toggle */}
              <div className="inline-flex overflow-hidden rounded-md border border-[#BFC8E8]">

                <button className="bg-primary px-5 py-2 text-[10px] font-bold text-white">
                  One Time
                </button>

                <button className="bg-white px-5 py-2 text-[10px] font-bold text-primary">
                  EMI
                </button>

              </div>

              {/* Price */}
              <div className="mt-5">

                <p className="text-[20px] font-extrabold text-primary sm:text-2xl">
                  ₹ 90,000
                  <span className="text-sm">
                    {" "}
                    + 18% GST
                  </span>
                </p>

              </div>

              <button className="mt-5 rounded-full bg-secondary px-7 py-2.5 text-[10px] font-bold text-white">
                More Info
              </button>

              {/* Benefits */}
              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-2 text-[10px] text-gray-600">
                  <CheckCircle2
                    size={16}
                    className="text-secondary"
                  />
                  One-time payment option
                </div>

                <div className="flex items-center gap-2 text-[10px] text-gray-600">
                  <CheckCircle2
                    size={16}
                    className="text-secondary"
                  />
                  Flexible EMI options available
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="p-5 sm:p-7">

              {/* Institute logos */}
              <div className="flex items-center justify-center gap-5">

                <div className="text-center">

                  <div className="text-xl font-black text-primary">
                    IIT
                  </div>

                  <p className="text-[6px] font-bold text-gray-500">
                    INDIAN INSTITUTE OF
                    <br />
                    TECHNOLOGY ROORKEE
                  </p>

                </div>

                <div className="h-10 w-px bg-gray-200" />

                <div>
                  <span className="text-2xl font-extrabold text-green-600">
                    eict
                  </span>

                  <span className="ml-1 text-[8px] text-gray-500">
                    IIT Roorkee
                  </span>
                </div>

              </div>

              {/* Scholarship */}
              <div className="mt-5 rounded-xl bg-[#E0E6FF] p-5 text-center">

                <h3 className="text-[18px] font-extrabold text-primary">
                  Avail Scholarship
                </h3>

                <p className="mt-2 text-[20px] font-black italic text-primary">
                  Up To 30%
                </p>

                <p className="mt-2 text-[9px] text-gray-500">
                  Limited scholarship opportunities available for eligible
                  candidates.
                </p>

              </div>

              {/* Apply */}
              <button className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-[10px] font-bold text-white">

                Apply Now

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <ArrowUpRight size={13} />
                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CourseFeeSection;