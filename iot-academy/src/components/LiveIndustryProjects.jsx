import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    image: "/assets/covid.jpg",
    title: "COVID Analysis in India",
    description:
      "Web Scrape the data from the official government website and various insights by comparing the trend of COVID in India as compared to the world.",
  },

  {
    image: "/assets/twitter.jpg",
    title: "Twitter Sentiment Analysis Via Tweepy",
    description:
      "Analyzing the tweets for understanding the sentiments of users.",
  },

  {
    image: "/assets/airplane.jpg",
    title: "Forecast Air Passenger Traffic",
    description:
      "To Build a model to forecast the demand (passenger traffic) in Airlines.",
  },

  {
    image: "/assets/kidney.jpg",
    title: "Chronic Kidney Disease Prediction",
    description:
      "Accurate prediction of CKD progression over time for reducing its costs and the mortality rates.",
  },
];

function LiveIndustryProjects() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#202e78] via-[#314caa] to-[#506ac4]">

      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -right-20 -top-24 h-[300px] w-[300px] rotate-45 bg-white/5" />

      <div className="pointer-events-none absolute right-[-70px] top-10 h-[250px] w-[250px] rotate-45 border-[45px] border-white/5" />

      <div className="pointer-events-none absolute bottom-[-100px] left-[-50px] h-[250px] w-[250px] rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:py-14 lg:px-14">

        {/* Heading */}
        <div className="mx-auto max-w-[720px] text-center">

          <h2 className="text-[24px] font-extrabold text-white sm:text-3xl">

            Live Industry{" "}

            <span className="text-[#F7A91B]">
              Projects
            </span>

          </h2>

          <p className="mt-3 text-[10px] leading-5 text-white/80 sm:text-xs">
            Industry projects are a part of online data science machine
            learning training. Such projects will ensure exposure to
            real-world experience for starting a career in DS & ML.
          </p>

        </div>

        {/* Project Cards */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg bg-white p-3 shadow-lg transition duration-300 hover:-translate-y-1"
            >

              {/* Image */}
              <div className="h-[115px] overflow-hidden rounded-md bg-gray-200 sm:h-[125px]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />

              </div>

              {/* Content */}
              <div className="px-1 pb-2 pt-3">

                <h3 className="text-[10px] font-extrabold leading-4 text-gray-800 sm:text-xs">
                  {project.title}
                </h3>

                <p className="mt-2 text-[9px] leading-4 text-gray-600 sm:text-[10px]">
                  {project.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-5">

          {/* Download */}
          <button className="flex items-center gap-2 rounded-full bg-[#F7A91B] px-5 py-3 text-[10px] font-bold text-white shadow-lg transition hover:bg-[#e99a08] sm:text-xs">

            Download Projects

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight size={13} />
            </span>

          </button>

          {/* Slider */}
          <div className="flex items-center gap-3">

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7A91B] text-white shadow">
              <ArrowLeft size={16} />
            </button>

            <div className="relative h-[2px] w-[130px] bg-white/60 sm:w-[175px]">

              <div className="absolute left-0 top-0 h-[2px] w-[55%] bg-[#F7A91B]" />

            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7A91B] text-white shadow">
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LiveIndustryProjects;