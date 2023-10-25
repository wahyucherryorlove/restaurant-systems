import { useState } from "react";
import Image from "next/legacy/image";

import { LightBox } from "./lightbox";
import { useResponsive } from "@app/utils/useResponsive";

interface DessertProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}

const Dessert = ({
  id = 0,
  title,
  description,
  price,
  images,
}: DessertProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const width = useResponsive()

  return (
    <>
      <li className="flex flex-col sm:flex-row gap-x-5" key={id}>
        <button onClick={() => setIsOpen(true)}>
          <div className="relative w-full h-full sm:w-[100px] sm:h-[100px]">
            <Image src={images} alt={title} layout="fill" />
          </div>
        </button>
        <div className="w-full flex flex-col gap-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-['Quicksand']">{title}</h2>
            <h5 className="text-sm font-['Roboto'] text-neutral-500 font-bold">
              {"Rp" + price}
            </h5>
          </div>
          <div>
            <p className="text-sm font-['Roboto'] text-neutral-500">
              {description}
            </p>
          </div>
        </div>
      </li>

      {isOpen === true && width > 640 && (
        <LightBox key={id} isOpen={isOpen} setIsOpen={setIsOpen} images={images} />
      )}
    </>
  );
};

export { Dessert };
