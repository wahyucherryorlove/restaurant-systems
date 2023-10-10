import Image from "next/legacy/image";

interface Breakfast {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
  timeStamp: string;
  type: string
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

const Breakfast = ({
  id = 0,
  title,
  description,
  price,
  images,
  timeStamp,
  type
}: Breakfast) => {
  return (
// type === "BreakfastTemp" && (
  <li className="flex gap-x-5" key={id}>
  <div className="relative w-[100px] max-w-full max-h-full h-[100px]">
    <Image
      src={images}
      alt="Hello"
      layout="fill"
    />
  </div>
  <div className="w-full flex flex-col gap-y-2">
    <div className="flex justify-between">
      <h2 className="text-lg font-['Quicksand']">{title}</h2>
      <h5 className="text-sm font-['Roboto'] text-neutral-500 font-bold">{"Rp" + price}</h5>
    </div>
    <div className="">
      <p className="text-sm font-['Roboto'] text-neutral-500">{description}</p>
    </div>
  </div>
</li>
// )
  );
};

export { Breakfast };
