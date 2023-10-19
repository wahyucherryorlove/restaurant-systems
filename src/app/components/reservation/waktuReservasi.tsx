import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { TimeReservationTemp } from "@app/temp/timereservasi";

const TimeReservation = () => {
  const [selected, setSelected] = useState(TimeReservationTemp[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative border-2 w-full py-3 text-center border-transparent bg-neutral-100 focus:border-amber-400 outline-none duration-200 text-sm">
        <Listbox.Button
          className="relative w-full cursor-pointer focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm font-['Quicksand']"
        >
          {selected.time}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-8 w-full shadow-md border-2 max-h-60 border-amber-500/50 overflow-auto rounded-md bg-white py-2 text-sm outline-none sm:text-sm z-10">
            {TimeReservationTemp.map((timer) => (
              <Listbox.Option
                key={timer.id}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 font-['Quicksand'] ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={timer}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {timer.time}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export { TimeReservation };
