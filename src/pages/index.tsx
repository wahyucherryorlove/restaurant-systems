import dynamic from "next/dynamic";
import type { NextPage } from "next";

import { CompanyInfo } from "@app/components/home/company-info";
import { Events } from "@components/home/events";
import { Reservasi } from "@components/home/reservasi";
import { SeniKue } from "@components/home/seni-kue";

import RestaurantIcon from "@icons/restaurant.svg";

const Home: NextPage = () => {


  return (
    <>
      <main>
        <section className="flex flex-col items-center pt-28 md:pt-40 pb-[14rem] gap-y-4 bg-[url('/assets/images/home/jumbotron.jpg')] bg-auto bg-repeat">
          <span className="border-[3px] p-4 rounded-full border-amber-500">
            <RestaurantIcon className="w-9 h-9 fill-yellow-500" />
          </span>
          <h1 className="text-5xl md:text-6xl font-bold font-['Roboto'] text-neutral-50">
            Restaurant
          </h1>
          <h5 className="text-lg md:text-xl font-['Roboto'] text-neutral-50">
            Premium Quality Restaurant
          </h5>
        </section>

        <Reservasi />

        <SeniKue />

        <Events />

        <CompanyInfo />
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

export default Home;
