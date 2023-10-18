import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { Footer } from "@components/footer";

import { DataInput } from "@components/reservation/datainput";

import FlameIcons from "@icons/flame.svg";
import TimerIcons from "@icons/time.svg";

const ReservationPage: NextPage = () => {
  const { isReady, query } = useRouter();

  return (
    <>
      <main>
        <section className="relative flex flex-col items-center pt-40 md:pt-52 pb-[20rem]  bg-[url('/assets/images/reservation/jumbotron.jpg')] bg-auto bg-repeat before:bg-neutral-900/50 before:absolute before:inset-0">
          <div className="flex items-center flex-col gap-y-6 absolute">
            <h1 className="text-3xl sm:text-5xl font-bold font-['KaushanScript',cursive] text-neutral-50">
              Reservation
            </h1>

            <div className="flex my-7 gap-5 items-center">
              <span className="flex w-[80px] sm:w-[150px] border border-50-400"></span>
              <i>
                <FlameIcons className="w-4 h-4 fill-neutral-50" />
              </i>
              <span className="flex w-[80px] sm:w-[150px] border border-50-400"></span>
            </div>

            <h5 className="text-md sm:text-xl font-['Quicksand'] font-normal text-neutral-50">
              Book your table
            </h5>
          </div>
        </section>

        <section className="flex flex-col py-[6rem] gap-y-10 w-4/5 mx-auto">
          <h2 className="font-['KaushanScript',cursive] font-bold text-3xl text-slate-800 text-center">
            Make a Reservation
          </h2>
          <hr className="border-amber-500 h-3 w-full" />

          <form>
            <DataInput />
            <button className="bg-amber-500 px-6 py-3 rounded-full flex justify-center items-center mx-auto mt-8 font-['Quicksand']">Reservation</button>
          </form>
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

export default ReservationPage;
