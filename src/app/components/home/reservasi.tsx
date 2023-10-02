import CalendarIcon from "@icons/calendar.svg"
import TimeIcon from "@icons/time.svg"
import UsersAltIcon from "@icons/users-alt.svg"

const Reservasi = () => {

  return (
    <div className="bg-neutral-50 shadow-lg border-2 flex flex-col justify-center w-[85%] m-auto -mt-32 py-[70px] gap-y-10 rounded-md">
      <div className="flex flex-col gap-3 text-center px-20">
        <h2 className="text-2xl md:text-3xl font-['Quicksand'] text-amber-500">
          MAKE ONLINE RESERVATION
        </h2>
        <p className="text-sm font-['Roboto'] text-neutral-400">POWERED BY OPENTABLE</p>
      </div>

      <ul className="flex flex-col lg:grid lg:grid-cols-3 gap-y-4 lg:gap-x-4 mt-5 lg:px-20 xl:px-40">
        <li className="flex gap-x-4 items-center justify-center">
            <CalendarIcon className="w-6 h-6 fill-amber-500" />
            <input type="date" name="" className="py-1 font-['Roboto'] font-bold text-center w-1/2 lg:w-3/4 outline-none bg-transparent border-b-2" />
        </li>
        <li className="flex gap-x-4 items-center justify-center">
            <TimeIcon className="w-6 h-6 fill-amber-500" />
            <input type="time" name="" className="py-1 font-['Roboto'] font-bold text-center w-1/2 lg:w-3/4 outline-none bg-transparent border-b-2" />
        </li>
        <li className="flex gap-x-4 items-center justify-center">
            <UsersAltIcon className="w-6 h-6 fill-amber-500" />
            <select name="" id="" className="py-1 font-['Roboto'] font-bold text-center w-1/2 lg:w-3/4 outline-none bg-transparent border-b-2 justify-center">
                <option value="1" className="text-sm py-2">1 Person</option>
                <option value="2" className="text-sm top-2 absolute">2 People</option>
                <option value="3" className="text-sm top-2 absolute">3 People</option>
                <option value="4" className="text-sm top-2 absolute">4 People</option>
                <option value="5" className="text-sm top-2 absolute">5 People</option>
                <option value="6" className="text-sm top-2 absolute">6 People</option>
                <option value="7" className="text-sm top-2 absolute">7 People</option>
            </select>
        </li>
      </ul>
      <button className="m-auto w-[180.85px] h-[54px] rounded-full bg-[#CE9933] text-neutral-50 font-['Quicksand'] font-bold">FIND A TABLE</button>
    </div>
  );
};

export { Reservasi };
