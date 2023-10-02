import Image from "next/legacy/image";

import { dummyEvents } from "@app/temp/events";

import DocumentIcons from "@icons/document.svg";

const Events = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-10 bg-[url(/assets/images/home/events.jpg)] bg-cover py-[7rem]">
      <h1 className="text-4xl font-bold font-[cursive] text-slate-800">
        New & Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7 w-full xl:w-4/5 px-10">
        {dummyEvents.map(({ id, text, tanggal, images, alt }) => (
          <div className="relative bg-neutral-50 w-full shadow" key={id}>
            <div className="relative w-full h-[200px] overflow-hidden">
              <div className="absolute w-full h-full object-cover scale-100 hover:scale-110 hover:rotate-3 duration-150">
                <Image
                  src={images}
                  alt={alt}
                  layout="fill"
                />
              </div>
            </div>
            <div className="pt-16 pb-7 w-full flex flex-col gap-y-4 justify-center items-center">
              <h3 className="text-lg font-bold font-['Quicksand'] text-slate-800">
                {text}
              </h3>
              <span className="text-sm font-bold font-['Roboto'] text-amber-600">
                {tanggal}
              </span>
            </div>

            <div className="relative bg-neutral-400 mx-auto w-full flex flex-col justify-center items-center">
              <span className="absolute bg-amber-600 w-[54px] h-[54px] flex justify-center items-center rounded-full -top-[185px] z-20">
                <DocumentIcons className="w-6 h-6 fill-neutral-50" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Events };
