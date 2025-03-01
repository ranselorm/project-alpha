import { Icon } from "@iconify/react/dist/iconify.js";

interface CardProps {
  title: string;
  value: number;
  bgColor: string;
}

const Card = () => {
  return (
    <div className="bg-green-100 p-4 flex items-center gap-x-5 rounded-md border border-gray-200">
      <div className="bg-grey text-black p-3 flex items-center justify-center rounded-full cursor-pointer w-12 h-12">
        <Icon icon="lineicons:dollar" className="size-6 text-teal-600" />
      </div>
      <div>
        <span className="text-gray-600 text-sm">Earnings</span>
        <p className="flex items-center text-2xl">
          {/* <Icon icon="fa6-solid:cedi-sign" /> */}
          GHS4500
        </p>
      </div>
    </div>
  );
};

export default Card;
