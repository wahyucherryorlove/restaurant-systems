import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const TopBarMobile = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const router = useRouter();
  return (
    <>
      <nav className="navbar fixed top-0 bg-[#69483E]/80 w-full h-[80px] flex items-center px-10 z-[99999] shadow-md justify-between">
        <div className="flex relative">
          <h3 className="text-3xl font-['Quicksand'] text-neutral-100">
            Restoran
          </h3>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 absolute bottom-1.5 -right-5"></span>
        </div>

        <button
          type="button"
          className="nav-bars w-10 flex flex-col items-end justify-between h-1/3 bg-neu"
          onClick={() => setIsOpenNav(!isOpenNav)}
        >
          <span
            className={`duration-300 ${
              !isOpenNav
                ? "w-[70%] delay-150 bg-neutral-50"
                : "w-full rotate-45 translate-y-3 delay-0 bg-amber-400"
            }`}
          ></span>
          <span
            className={`duration-300 ${
              !isOpenNav ? "w-full delay-200 bg-neutral-50" : "w-0"
            }`}
          ></span>
          <span
            className={`duration-300  ${
              !isOpenNav
                ? "w-[60%] delay-150 bg-neutral-50"
                : "w-full -rotate-45 -translate-y-3 delay-0 bg-amber-400"
            }`}
          ></span>
        </button>
      </nav>

      <aside
        className={`sidebar fixed top-20 w-[270px] h-full z-[99998] bg-[#69483E] duration-500 ${
          isOpenNav === true ? "left-0 opacity-80" : "-left-[270px] opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-y-5 mt-10 px-5">
          <li>
            <Link
              href="/"
              className={`text-md font-['Quicksand'] block hover:text-amber-500 duration-100 ${
                router.pathname === "/" ? "text-amber-400" : "text-neutral-50"
              }`}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              href="/menu"
              className={`text-md font-['Quicksand'] block hover:text-amber-500 duration-100 ${
                router.pathname === "/menu"
                  ? "text-amber-400"
                  : "text-neutral-50"
              }`}
            >
              MENU
            </Link>
          </li>

          <li>
            <Link
              href="/events"
              className={`text-md font-['Quicksand'] block hover:text-amber-500 duration-100 ${
                router.pathname === "/events"
                  ? "text-amber-400"
                  : "text-neutral-50"
              }`}
            >
              EVENTS
            </Link>
          </li>

          <li>
            <Link
              href="/reservation"
              className={`text-md font-['Quicksand'] block hover:text-amber-500 duration-100 ${
                router.pathname === "/reservasi"
                  ? "text-amber-400"
                  : "text-neutral-50"
              }`}
            >
              RESERVATION
            </Link>
          </li>

          <li>
            <Link
              href="/location"
              className={`text-md font-['Quicksand'] block hover:text-amber-500 duration-100 ${
                router.pathname === "/lokasi"
                  ? "text-amber-400"
                  : "text-neutral-50"
              }`}
            >
              LOCATION
            </Link>
          </li>
        </ul>
      </aside>

      {isOpenNav === true && (
        <div
          className="bg-neutral-900/20 inset-0 fixed z-[99997]"
          onClick={() => setIsOpenNav(false)}
        ></div>
      )}
    </>
  );
};

export { TopBarMobile };
