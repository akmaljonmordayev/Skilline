import rn from "../../../assets/rn.png";

function Ramazon() {
  return (
    <div className="w-[85%] mx-auto py-20 flex items-center justify-between">
      <div className="w-[42%] relative">
        <div className="w-12 h-12 bg-yellow-400 rounded-full absolute -left-4 top-2 -z-10"></div>

        <h1 className="text-[32px] font-semibold leading-[50px] text-[#2F327D]">
          Everything you can do in a physical classroom,{" "}
          <span className="text-orange-400">you can do with Skilline</span>
        </h1>

        <p className="text-gray-500 mt-6 leading-7">
          Skilline's school management software helps traditional and online
          schools manage scheduling, attendance and virtual classrooms.
        </p>

        <button className="mt-6 text-gray-500 underline cursor-pointer">
          Learn more
        </button>

        <div className="w-4 h-4 bg-orange-300 rounded-full absolute right-0 top-1/2"></div>
      </div>

      <div className="w-[42%] relative">
        <div className="w-20 h-20 bg-cyan-400 rounded-2xl absolute -top-4 -left-4"></div>

        <img
          src={rn}
          alt=""
          className="w-full h-[320px] object-cover rounded-3xl relative z-10"
        />

        <div className="w-20 h-20 bg-yellow-400 rounded-2xl absolute -bottom-4 -right-4"></div>
      </div>
    </div>
  );
}

export default Ramazon;