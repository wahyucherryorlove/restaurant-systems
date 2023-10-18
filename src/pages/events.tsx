import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { Footer } from "@components/footer";

import { dummyEvents } from "@app/temp/events";

import FlameIcons from "@icons/flame.svg";
import TimerIcons from "@icons/time.svg";

const EventsPage: NextPage = () => {
  const { isReady, query } = useRouter();

  return (
    <>
      <main>
        <section className="relative flex flex-col items-center pt-40 md:pt-52 pb-[20rem] bg-[url('/assets/images/events/jumbotron.jpg')] bg-auto bg-repeat before:bg-neutral-900/50 before:absolute before:inset-0">
          <div className="flex items-center flex-col gap-y-6 absolute">
            <h1 className="text-3xl sm:text-5xl font-bold font-['KaushanScript',cursive] text-neutral-50">
              Events
            </h1>

            <div className="flex my-7 gap-5 items-center">
              <span className="flex w-[80px] sm:w-[150px] border border-50-400"></span>
              <i>
                <FlameIcons className="w-4 h-4 fill-neutral-50" />
              </i>
              <span className="flex w-[80px] sm:w-[150px] border border-50-400"></span>
            </div>

            <h5 className="text-md sm:text-xl font-['Quicksand'] font-normal text-neutral-50">
              All about food
            </h5>
          </div>
        </section>

        <section className="flex flex-col py-[6rem] gap-y-10 w-4/5 mx-auto">
          {dummyEvents.map(({ id, title, description, tanggal, images, alt }) => (
            <div key={id} className="border-b-2 pb-10 last:border-0 last:pb-0 border-amber-400">
              <article className="flex flex-col lg:flex-row gap-10">
                <div className="relative w-full lg:w-2/3  h-[250px] md:h-[350px]">
                  <Image
                    src={images}
                    alt={alt}
                    layout="fill"
                  />
                </div>
                <div className="flex flex-col gap-y-4 w-full lg:mt-5">
                  <h1 className="text-4xl font-['Quicksand'] text-amber-500 mb-3">
                    {title}
                  </h1>

                  <div className="flex gap-x-4 items-center">
                    <TimerIcons className="w-5 h-5 fill-amber-500" />
                    <p className="text-sm font-['Roboto'] text-neutral-500">
                      {tanggal}
                    </p>
                  </div>

                  <hr className="mb-2 border-amber-400" />

                  <p className="">
                    {description}
                  </p>

                  <button className="text-start text-md font-bold font-['Quicksand'] w-[150px] py-3 flex items-center justify-center rounded-full bg-amber-400 mt-12">
                    Read more
                  </button>
                </div>
              </article>
            </div>

          ))}
        </section>

        <Footer />
      </main>

      <footer className="bg-slate-800 py-5 w-full">
        <div className="w-4/5 mx-auto">
          <p className="text-sm font-['Roboto'] font-normal text-neutral-400">
            Copyright &copy; Wahyudi Umar From Makassar
          </p>
        </div>
      </footer>
    </>
  );
};

export default EventsPage;
