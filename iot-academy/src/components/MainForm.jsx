import {
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

function SelectField({ children }) {
  return (
    <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-left text-[12px] text-gray-400 transition hover:border-primary">

      <span>{children}</span>

      <ChevronDown size={16} />

    </button>
  );
}

function MainForm({ dark = false }) {
  return (
    <div
      className={
        dark
          ? "rounded-2xl bg-primary p-5 shadow-xl"
          : "rounded-[24px] bg-white p-5 shadow-form sm:p-6"
      }
    >

      {!dark && (
        <h3 className="mb-5 text-center text-xl font-extrabold text-primary">
          Start Your Journey
        </h3>
      )}

      <div className="grid grid-cols-2 gap-3">

        <input
          type="text"
          placeholder="First Name*"
          className="h-[45px] rounded-lg border border-gray-200 px-3 text-xs outline-none transition focus:border-primary"
        />

        <input
          type="text"
          placeholder="Last Name"
          className="h-[45px] rounded-lg border border-gray-200 px-3 text-xs outline-none transition focus:border-primary"
        />

      </div>

      <input
        type="tel"
        placeholder="Mobile*"
        className="mt-3 h-[45px] w-full rounded-lg border border-gray-200 px-3 text-xs outline-none focus:border-primary"
      />

      <input
        type="email"
        placeholder="Email*"
        className="mt-3 h-[45px] w-full rounded-lg border border-gray-200 px-3 text-xs outline-none focus:border-primary"
      />

      <div className="mt-3">
        <SelectField>
          Select Work Experience*
        </SelectField>
      </div>

      <div className="mt-3">
        <SelectField>
          Select Best Time To Call*
        </SelectField>
      </div>

      <div className="mt-3">
        <SelectField>
          For Myself
        </SelectField>
      </div>

      <button className="mt-5 flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-xs font-bold text-white transition hover:bg-primaryDark">

        Submit

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
          <ArrowUpRight size={14} />
        </span>

      </button>

    </div>
  );
}

export default MainForm;