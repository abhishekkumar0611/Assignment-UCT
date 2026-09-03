const faculty = [
  {
    image: "/assets/faculty-kaushlendra.jpg",
    name: "Kaushlendra Sisodia",
    designation:
      "Director at Uniconverge Technologies",
    description: "IIT Kanpur Alumnus",
    institute: "/assets/iit-kanpur.svg",
  },

  {
    image: "/assets/faculty-sumit.jpg",
    name: "Prof. Sumit Kalra",
    designation:
      "Department of Computer Science & Engineering, IIT Jodhpur",
    description: "",
    institute: "/assets/iit-jodhpur.svg",
  },

  {
    image: "/assets/faculty-sanjay.jpg",
    name: "Mr. Sanjay Aggarwal",
    designation:
      "Data Science With ML Expert",
    description: "IMS BHU Alumni The IoT Academy",
    institute: "/assets/iot-academy.svg",
  },

  {
    image: "/assets/faculty-ashwani.jpg",
    name: "Ashwani Kumar",
    designation:
      "AI Expert 20+ Years of Experience",
    description: "Alumni of University of Miami",
    institute: "/assets/university-miami.svg",
  },
];

function FacultySection() {
  return (
    <section className="bg-white">

      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:py-14 lg:px-14">

        {/* Heading */}
        <h2 className="text-center text-[21px] font-extrabold text-primary sm:text-3xl">

          Faculties Of This{" "}

          <span className="text-secondary">
            Program
          </span>

        </h2>

        {/* Faculty Cards */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">

          {faculty.map((member) => (
            <div
              key={member.name}
              className="flex min-h-[190px] flex-col items-center rounded-xl border border-gray-100 bg-white px-3 py-5 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[205px]"
            >

              {/* Profile */}
              <div className="h-[58px] w-[58px] overflow-hidden rounded-full border-2 border-gray-300 bg-gray-100">

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />

              </div>

              {/* Name */}
              <h3 className="mt-3 text-[9px] font-extrabold text-gray-800 sm:text-[11px]">
                {member.name}
              </h3>

              {/* Designation */}
              <p className="mt-1 max-w-[180px] text-[8px] leading-3 text-gray-600 sm:text-[9px]">
                {member.designation}
              </p>

              {/* Description */}
              {member.description && (
                <p className="mt-1 text-[8px] font-semibold text-gray-700 sm:text-[9px]">
                  {member.description}
                </p>
              )}

              {/* Institute */}
              <div className="mt-auto flex h-[42px] items-end justify-center">

                <img
                  src={member.institute}
                  alt=""
                  className="max-h-[38px] max-w-[105px] object-contain"
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FacultySection;