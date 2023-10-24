import { Fragment } from "react";
import Image from "next/legacy/image";
import { Dialog, Transition } from "@headlessui/react";
import type { Dispatch, SetStateAction } from "react";

interface LightBoxProps {
  images: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LightBox = ({ images, isOpen = false, setIsOpen }: LightBoxProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 bg-neutral-900/80 flex items-center justify-center"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
        >
          <Dialog.Panel className="">
            <div className="relative w-[500px] md:w-[600px] lg:w-[700px] h-[350px] md:h-[400px] lg:h-[500px]">
              <Image src={images} alt="Testing" layout="fill" />
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export { LightBox };
