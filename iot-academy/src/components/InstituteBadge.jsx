function InstituteBadge() {
  return (
    <div className="mt-8 flex w-full max-w-[470px] items-center rounded-2xl bg-white p-3 shadow-xl sm:p-4">

      {/* IIT */}
      <div className="flex flex-1 items-center justify-center border-r border-gray-200">

        <div className="text-center">

          <div className="text-[20px] font-black text-primary">
            IIT
          </div>

          <div className="text-[7px] font-bold leading-3 text-gray-500">
            INDIAN INSTITUTE OF
            <br />
            TECHNOLOGY ROORKEE
          </div>

        </div>

      </div>

      {/* EICT */}
      <div className="flex flex-1 items-center justify-center">

        <div>
          <span className="text-[26px] font-extrabold tracking-tight text-green-600">
            eict
          </span>

          <span className="ml-1 text-[10px] text-gray-500">
            IIT Roorkee
          </span>
        </div>

      </div>

    </div>
  );
}

export default InstituteBadge;