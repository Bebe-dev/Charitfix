export default function UpcomingSection() {
  return (
    <div className="text-center mt-16 px-[40px] md:px-[100px]">
      <p className="text-[#00715D] text-sm">Our Events</p>
      <p className="font-bold text-md py-4">Our Upcoming Events</p>
      <div className="flex gap-16 py-2">
        <div className="relative text-[#FFFFFF]">
          <img src="\images\upcoming.svg" alt="upcoming" />
          <div className="absolute top-0 pt-24 pl-8">
            <p className="font-semibold text-xl">Jessore</p>
            <p className="text-sm"> 01.01.2024</p>
          </div>
        </div>

        <div className="relative text-[#FFFFFF]">
          <img src="\images\upcoming.svg" alt="upcoming" />
          <div className="absolute top-0 pt-24 pl-8">
            <p className="font-semibold text-xl">Jessore</p>
            <p className="text-sm"> 01.01.2024</p>
          </div>
        </div>

        <div className="relative text-[#FFFFFF]">
          <img src="\images\upcoming.svg" alt="upcoming" />
          <div className="absolute top-0 pt-24 pl-8">
            <p className="font-semibold text-xl">Jessore</p>
            <p className="text-sm"> 01.01.2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
