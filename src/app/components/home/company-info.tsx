import Image from "next/legacy/image";

import { dummyEvents } from "@app/temp/events";

import GmailIcons from "@icons/gmail_solid.svg";
import LocationIcons from "@icons/location_solid.svg";
import TeleponIcons from "@icons/phone_solid.svg";

import { Days } from "@app/temp/days";

const CompanyInfo = () => {
  var dayss = new Date();
  var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full lg:w-4/5 xl:w-3/5 gap-x-10 md:gap-x-20 gap-y-10 m-auto px-10 py-[6rem]">
      <div className="flex flex-col gap-y-7">
        <h2 className="font-['Quicksand'] font-bold text-2xl text-slate-800">
          Jam Kerja
        </h2>

        <div className="flex gap-x-5 justify-between">
          {/* {Days[dayss.getDay()]} */}
          <div className="flex flex-col gap-y-3">
            {Days.map(({ id, day }) => (
              <div className="flex items-center gap-x-3" key={id}>
                <p
                  className={`font-['Roboto'] text-sm font-bold ${
                    hari[dayss.getDay()] === day
                      ? "text-amber-600"
                      : "text-slate-800"
                  }`}
                >
                  {day}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-y-3">
            {Days.map(({ id, day, time }) => (
              <div className="flex items-center gap-x-3" key={id}>
                <p
                  className={`font-['Roboto'] text-sm ${
                    hari[dayss.getDay()] === day
                      ? "text-amber-500"
                      : "text-slate-800"
                  }`}
                >
                  {time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-7">
        <h2 className="font-['Quicksand'] font-bold text-2xl text-slate-800">
          Kontak Kami
        </h2>

        <div className="flex gap-x-3">
          <ul className="flex flex-col gap-y-8">
            <li className="relative">
              <LocationIcons className="w-6 h-6 absolute fill-amber-500" />
              <p
                className={`font-['Roboto'] ml-10 text-sm text-slate-800 leading-relaxed`}
              >
                Kompleks Yayasan Perumahan Pegawai Kantor Gubernur Blok K3 A No
                39, Paccerakkang, Kota Makassar, 90242, Indonesia
              </p>
            </li>

            <li className="relative">
              <TeleponIcons className="w-5 h-5 absolute fill-amber-500" />
              <p
                className={`font-['Roboto'] ml-12 text-sm text-slate-800 leading-relaxed`}
              >
                +62 821 9482 3066
              </p>
            </li>

            <li className="relative">
              <GmailIcons className="w-5 h-5 top-1 absolute fill-amber-500" />
              <p
                className={`font-['Roboto'] ml-12 text-sm text-slate-800 leading-relaxed`}
              >
                wahyucherryorlove@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-y-7 sm:col-span-2 lg:col-span-1 items-center lg:items-start w-full sm:w-auto">
        <h2 className="font-['Quicksand'] font-bold text-2xl text-slate-800 text-start">
          Gallery
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-5 w-full sm:w-auto">
          {dummyEvents.map(({ id, images, alt }) => (
            <li className="relative w-full sm:w-[150px] lg:w-[70px] h-[200px] sm:h-[150px] lg:h-[70px]" key={id}>
              <Image
                src={images}
                alt={alt}
                className="object-contain sm:object-cover"
                layout="fill"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { CompanyInfo };
