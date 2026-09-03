import { uspData } from "../data/courseData";

function USPSection() {
  return (
    <section className="bg-white">

      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:py-16 lg:px-14">

        <h2 className="text-[29px] font-extrabold leading-[1.05] text-primary sm:text-4xl">

          Core USPs Of{" "}

          <span className="text-secondary">
            This
          </span>

          <br />

          <span className="text-secondary">
            Program
          </span>

        </h2>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-5">

          {uspData.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex min-h-[145px] flex-col items-center justify-center rounded-lg border border-gray-100 bg-white px-3 py-5 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[160px]"
              >

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1F4FF] text-[#5B73C7]">

                  <Icon
                    size={26}
                    strokeWidth={2}
                  />

                </div>

                <p className="max-w-[150px] text-[10px] font-medium leading-4 text-gray-500 sm:text-xs">
                  {item.title}
                </p>

                <p className="mt-1 max-w-[160px] text-[10px] font-bold leading-4 text-primary sm:text-xs">
                  {item.subtitle}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default USPSection;