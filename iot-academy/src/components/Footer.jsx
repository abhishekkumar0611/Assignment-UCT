function Footer() {
  return (
    <footer className="bg-primary px-5 py-8 text-white sm:px-8 lg:px-14">

      <div className="mx-auto max-w-[1440px]">

        <div className="grid gap-8 md:grid-cols-3">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">

                <span className="text-center text-[8px] font-bold leading-3">
                  The IoT
                  <br />
                  Academy
                </span>

              </div>

              <div>
                <p className="font-bold">
                  The IoT Academy
                </p>

                <p className="text-xs text-white/60">
                  E&ICT Academy, IIT Roorkee
                </p>
              </div>

            </div>

          </div>

          <div>

            <h3 className="font-bold">
              Programs
            </h3>

            <div className="mt-3 space-y-2 text-xs text-white/70">
              <p>Data Science</p>
              <p>Machine Learning</p>
              <p>Artificial Intelligence</p>
              <p>Gen AI</p>
            </div>

          </div>

          <div>

            <h3 className="font-bold">
              Contact
            </h3>

            <div className="mt-3 space-y-2 text-xs text-white/70">
              <p>Admissions</p>
              <p>Placements</p>
              <p>Career</p>
              <p>Support</p>
            </div>

          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-[10px] text-white/50">
          © 2025 The IoT Academy. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;