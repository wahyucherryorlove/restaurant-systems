import Link from "next/link";
import { useRouter } from "next/router";

const TopNavbar = () => {
  const router = useRouter()

  return (
    <nav className="absolute top-0 w-full flex items-end justify-center h-[114px]">
      <ul className="flex gap-x-8">
        <li>
          <Link href="" className={`font-['Quicksand'] font-normal ${router.pathname === "/" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            HOME
          </Link>
        </li>
        <li>
          <Link href="" className={`font-['Quicksand'] font-normal ${router.pathname === "/about" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link href="" className={`font-['Quicksand'] font-normal ${router.pathname === "/menu" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            MENU
          </Link>
        </li>
        <li>
          <Link href="" className={`font-['Quicksand'] font-normal ${router.pathname === "/events" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            EVENTS
          </Link>
        </li>
        <li>
          <Link href="" className={`font-['Quicksand'] font-normal ${router.pathname === "/reservation" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            RESERVATION
          </Link>
        </li>
        <li>
          <Link href="" className={`font-['Quicksand'] font-normal ${router.pathname === "/location" ? "text-amber-400" : "text-neutral-50"}`} passHref>
            LOCATION
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { TopNavbar };
