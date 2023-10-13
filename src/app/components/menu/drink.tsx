import Image from "next/legacy/image";

interface Drinks {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
  timeStamp: string;
  type: string;
}

var calendar = new Date();
var bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const Drink = ({
  id = 0,
  title,
  description,
  price,
  images,
  timeStamp,
  type,
}: Drinks) => {
  return (
    // type === "DrinksTemp" && (
    <li className="flex flex-col sm:flex-row gap-x-5" key={id}>
      <div className="relative w-full h-full sm:w-[100px] sm:h-[100px]">
        <Image src={images} alt={title} layout="fill" />
      </div>
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
    // )
  );
};

export { Drink };
