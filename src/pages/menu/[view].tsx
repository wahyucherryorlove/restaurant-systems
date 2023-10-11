import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { CompanyInfo } from "@app/components/home/company-info";
import { Breakfast } from "@app/components/menu/breakfast";

import { BreakfastTemp } from "@app/temp/menu/breakfast";

import FlameIcons from "@icons/flame.svg";

const MenuPage: NextPage = () => {

  const { isReady, query } = useRouter();

  return (
    <>
      <main>
        <section className="relative flex flex-col items-center pt-40 md:pt-52 pb-[20rem] bg-[url('/assets/images/about/jumbotron.jpg')] bg-auto bg-repeat before:bg-neutral-900/50 before:absolute before:inset-0">
          <div className="flex items-center flex-col gap-y-6 absolute">
            <h1 className="text-3xl sm:text-5xl font-bold font-['KaushanScript',cursive] text-neutral-50">
              Menu
            </h1>

            <div className="flex my-7 gap-5 items-center">
              <span className="flex w-[80px] sm:w-[150px] border border-50-400"></span>
              <i>
                <FlameIcons className="w-4 h-4 fill-neutral-50" />
              </i>
              <span className="flex w-[80px] sm:w-[150px] border border-50-400"></span>
            </div>

            <h5 className="text-md sm:text-xl font-['Quicksand'] font-normal text-neutral-50">
              View our restaurant menu
            </h5>
          </div>
        </section>

        <section className="pt-[6rem] flex flex-col gap-y-10 px-10 lg:w-4/5 mx-auto">
          <ul className="flex gap-x-6 gap-y-2 flex-wrap justify-center">
            <li>
              <Link
                href="/menu/breakfast"
                className={`font-['Quicksand'] text-lg lg:text-xl hover:text-amber-500 ${isReady && query.view === "breakfast" ? "text-neutral-500" : "text-amber-600"}`}
              >
                Breakfast
              </Link>
            </li>
            <li>
              <Link
                href="/menu/drink"
                className={`font-['Quicksand'] text-lg lg:text-xl hover:text-amber-500 ${isReady && query.view === "drink" ? "text-neutral-500" : "text-amber-600"}`}
              >
                Drinks
              </Link>
            </li>
            <li>
              <Link
                href="/menu/meat"
                className={`font-['Quicksand'] text-lg lg:text-xl hover:text-amber-500 ${isReady && query.view === "meat" ? "text-neutral-500" : "text-amber-600"}`}
              >
                Meat
              </Link>
            </li>
            <li>
              <Link
                href="/menu/dessert"
                className={`font-['Quicksand'] text-lg lg:text-xl hover:text-amber-500 ${isReady && query.view === "dessert" ? "text-neutral-500" : "text-amber-600"}`}
              >
                Dessert
              </Link>
            </li>
            <li>
              <Link
                href="/menu/dinner"
                className={`font-['Quicksand'] text-lg lg:text-xl hover:text-amber-500 ${isReady && query.view === "dinner" ? "text-neutral-500" : "text-amber-600"}`}
              >
                Dinner
              </Link>
            </li>
          </ul>

          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-10">
            {isReady &&
              query.view === "breakfast" &&
              BreakfastTemp.map(
                ({
                  id,
                  title,
                  description,
                  price,
                  images,
                  timeStamp,
                  type,
                }) => (
                  <Breakfast
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    price={price}
                    images={images}
                    timeStamp={timeStamp}
                    type={type}
                  />
                )
              )}
          </ul>
        </section>

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

export default MenuPage;
