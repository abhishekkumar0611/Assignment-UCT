import { useState } from "react";

import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-gray-200 bg-white">

      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:px-14">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <div className="relative flex h-[45px] w-[45px] items-center justify-center rounded-full border-2 border-primary">

            <div className="absolute inset-[4px] rounded-full border border-primary/40" />

            <div className="relative text-center text-[7px] font-extrabold leading-[9px] text-primary">
              The IoT
              <br />
              Academy
            </div>

          </div>

          <div className="hidden sm:block">
            <div className="text-[13px] font-bold leading-none text-primary">
              The IoT
            </div>

            <div className="mt-1 text-[9px] text-gray-500">
              Academy
            </div>
          </div>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">

          <a
            href="#home"
            className="border-b-2 border-primary pb-1 text-[13px] font-bold text-primary"
          >
            Home
          </a>

          <button className="flex items-center gap-1 text-[13px] text-gray-700">
            Programs
            <ChevronDown size={14} />
          </button>

          <a className="text-[13px] text-gray-700">
            Summer Training Programs
          </a>

          <button className="flex items-center gap-1 text-[13px] text-gray-700">
            Career
            <ChevronDown size={14} />
          </button>

          <a className="text-[13px] text-gray-700">
            Placements
          </a>

          <a className="text-[13px] text-gray-700">
            Blogs
          </a>

        </nav>

        {/* Login */}
        <div className="flex items-center gap-3">

          <button className="hidden rounded-full bg-secondary px-7 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-secondaryDark md:block">
            Login
          </button>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg p-2 text-primary lg:hidden"
          >
            {mobileMenu ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 shadow-lg lg:hidden">

          <nav className="flex flex-col gap-5">

            <a
              href="#home"
              className="font-semibold text-primary"
              onClick={() => setMobileMenu(false)}
            >
              Home
            </a>

            <a>Programs</a>

            <a>Summer Training Programs</a>

            <a>Career</a>

            <a>Placements</a>

            <a>Blogs</a>

            <button className="w-fit rounded-full bg-secondary px-7 py-2.5 font-bold text-white">
              Login
            </button>

          </nav>

        </div>
      )}

    </header>
  );
}

export default Header;