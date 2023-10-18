import Link from "next/link";
import { useRouter } from "next/router";

const TopNavbar = () => {
  const router = useRouter();

  const { isReady, query } = router;

  return (
    <nav className="absolute top-0 w-full flex items-end justify-center h-[114px] z-[99999]">
      <ul className="flex gap-x-8">
        <li>
          <Link
            href="/"
            className={`font-['Quicksand'] font-normal ${
              router.pathname === "/" ? "text-amber-400" : "text-neutral-50"
            }`}
            passHref
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/menu/breakfast"
            className={`font-['Quicksand'] font-normal ${
              (isReady && query.view === "breakfast") ||
              (isReady && query.view === "drink") ||
              (isReady && query.view === "meat") ||
              (isReady && query.view === "dessert") ||
              (isReady && query.view === "dinner")
                ? "text-amber-400"
                : "text-neutral-50"
            }`}
            passHref
          >
            MENU
          </Link>
        </li>
        <li>
          <Link
            href="/events"
            className={`font-['Quicksand'] font-normal ${
              router.pathname === "/events"
                ? "text-amber-400"
                : "text-neutral-50"
            }`}
            passHref
          >
            EVENTS
          </Link>
        </li>
        <li>
          <Link
            href="/reservation"
            className={`font-['Quicksand'] font-normal ${
              router.pathname === "/reservation"
                ? "text-amber-400"
                : "text-neutral-50"
            }`}
            passHref
          >
            RESERVATION
          </Link>
        </li>
        <li>
          <Link
            href="/location"
            className={`font-['Quicksand'] font-normal ${
              router.pathname === "/lokasi"
                ? "text-amber-400"
                : "text-neutral-50"
            }`}
            passHref
          >
            LOCATION
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { TopNavbar };
