import {
  BriefcaseBusiness,
  Users,
  MessageSquare,
  UserRound,
  ArrowUpRight,
  Award,
} from "lucide-react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Guaranteed Internship",
  },
  {
    icon: Users,
    title: "Placement Support",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
  },
  {
    icon: UserRound,
    title: "Profile Building",
  },
];

function CareerServices() {
  return (
    <section className="bg-[#F0F3FF]">

      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-14">

        {/* LEFT IMAGE */}
        <div className="relative mx-auto h-[310px] w-full max-w-[390px] overflow-hidden rounded-[20px] bg-[#B8C7C5] sm:h-[350px]">

          <img
            src="/assets/career-team.jpg"
            alt="Career services"
            className="h-full w-full object-cover"
          />

          {/* Bottom icon */}
          <div className="absolute bottom-[-2px] right-[-2px] flex h-[62px] w-[62px] items-center justify-center rounded-tl-[20px] bg-primary">

            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-lg bg-[#4F68BD] text-secondary">

              <Users size={27} />

            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-[25px] font-extrabold text-primary sm:text-3xl">

            Career{" "}

            <span className="text-secondary">
              Services
            </span>

          </h2>

          {/* Service Tabs */}
          <div className="relative mt-6 flex overflow-hidden rounded-full bg-primary">

            {/* Active circle */}
            <div className="absolute left-[30px] top-[-13px] flex h-[55px] w-[55px] items-center justify-center rounded-full bg-primary shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white">
                <Award size={20} />
              </div>

            </div>

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="flex flex-1 flex-col items-center justify-center px-1 py-5 text-center text-white"
                >

                  <Icon
                    size={17}
                    className="mb-1"
                  />

                  <span className="text-[7px] font-semibold leading-3 sm:text-[8px]">
                    {service.title}
                  </span>

                </div>
              );

            })}

          </div>

          {/* Service Cards */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">

            {/* Internship */}
            <div className="rounded-lg border border-[#E1D4C9] bg-[#F7E8DC] p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#536DC7] shadow-sm">
                <BriefcaseBusiness size={20} />
              </div>

              <h3 className="mt-4 text-sm font-extrabold text-gray-900">
                3-Month Guaranteed
                <br />
                Internship
              </h3>

              <p className="mt-3 text-[9px] leading-4 text-gray-600 sm:text-[10px]">
                Get a sure 3-month internship with our partner companies. It
                helps you what you learn in class in real work and understand
                how companies operate.
              </p>

              <button className="mt-4 flex items-center gap-1 text-[9px] font-bold text-primary">
                Learn More
                <ArrowUpRight size={13} />
              </button>

            </div>

            {/* Industry */}
            <div className="rounded-lg border border-[#CBD3F0] bg-[#DDE4FF] p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#536DC7] shadow-sm">
                <Users size={20} />
              </div>

              <h3 className="mt-4 text-sm font-extrabold text-gray-900">
                Hands-On Industry
                <br />
                Experience
              </h3>

              <p className="mt-3 text-[9px] leading-4 text-gray-600 sm:text-[10px]">
                Work on real industry projects to build confidence, improve
                skills, and make your portfolio strong for placements.
              </p>

              <button className="mt-4 flex items-center gap-1 text-[9px] font-bold text-primary">
                Learn More
                <ArrowUpRight size={13} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CareerServices;