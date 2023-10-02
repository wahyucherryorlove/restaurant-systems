import Image from "next/legacy/image";

import BadgeCheckIcons from "@icons/badge-check.svg";

const SeniKue = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row px-5 md:px-20 gap-y-10 lg:gap-x-10 w-full xl:w-[85%] lg:m-auto py-[6rem] items-center justify-center">
      <div className="flex flex-col gap-y-10">
        <h2 className="font-['KaushanScript',cursive] font-bold text-4xl text-blue-950">
          The Art Of Cookies
        </h2>
        <p className="text-md font-['Roboto']">
          You have probably noticed that the number of restaurants and fast food
          joints in your area are increasing at a fast pace. These restaurateurs
          are focused on marketing and have large budgets to draw lots of
          attention.
        </p>
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-x-2">
            <BadgeCheckIcons className="w-4 h-4 fill-amber-500" />
            <p className="font-['Roboto']">Posuere risus tortor non diam</p>
          </li>
          <li className="flex items-center gap-x-2">
            <BadgeCheckIcons className="w-4 h-4 fill-amber-500" />
            <p className="font-['Roboto']">
              In molestie pellentesque tristique
            </p>
          </li>
          <li className="flex items-center gap-x-2">
            <BadgeCheckIcons className="w-4 h-4 fill-amber-500" />
            <p className="font-['Roboto']">Aliquam erat volutpat</p>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-y-8 gap-x-8">
          <div className="">
            <h4 className="font-['Quicksand'] font-bold text-lg">Wahyudi Umar</h4>
            <span className="font-['Quicksand'] font-normal text-sm text-amber-600">Founder</span>
          </div>
          <div className="relative w-[153px] h-[90px] text-center leading-[90px]">
            <Image src="/assets/images/home/ttd.png" alt="Tanda tangan" layout="fill" />
          </div>
        </div>
      </div>
      <div className="relative w-full sm:w-[500px] lg:w-full h-[350px] sm:h-[500px]">
        <Image src="/assets/images/home/profil.jpg" alt="Chef Restaurant" layout="fill" />
      </div>
    </section>
  );
};

export { SeniKue };
