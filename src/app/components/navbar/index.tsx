import Link from "next/link";
import { useRouter } from "next/router";

const TopNavbar = () => {
  const router = useRouter()

  return (
    <nav className="absolute top-0 w-full flex items-end justify-center h-[114px] z-[99999]">
      <ul className="flex gap-x-8">
        <li>
          <Link href="/" className={`font-['Quicksand'] font-normal ${router.pathname === "/" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            HOME
          </Link>
        </li>
        <li>
          <Link href="/menu" className={`font-['Quicksand'] font-normal ${router.pathname === "/menu" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            MENU
          </Link>
        </li>
        <li>
          <Link href="/events" className={`font-['Quicksand'] font-normal ${router.pathname === "/acara" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            EVENTS
          </Link>
        </li>
        <li>
          <Link href="/reservation" className={`font-['Quicksand'] font-normal ${router.pathname === "/reservasi" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            RESERVATION
          </Link>
        </li>
        <li>
          <Link href="/location" className={`font-['Quicksand'] font-normal ${router.pathname === "/lokasi" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            LOCATION
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { TopNavbar };
