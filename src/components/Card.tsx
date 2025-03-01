import { Icon } from "@iconify/react/dist/iconify.js";

interface CardProps {
  title: string;
  value: number;
  bgColor?: string;
  icon?: string;
}

const Card: React.FC<CardProps> = ({ title, value, bgColor, icon }) => {
  return (
    <div
      className={`${
        bgColor ? `bg-teal-50` : "bg-white"
      } p-4 flex items-center gap-x-5 rounded-md border border-gray-200`}
    >
      <div className="bg-grey text-black p-3 flex items-center justify-center rounded-full cursor-pointer w-12 h-12">
        <Icon icon={`${icon}`} className="size-6 text-teal-600" />
      </div>
      <div>
        <span className="text-gray-600 text-sm">{title}</span>
        <p className="flex items-center text-2xl">{value}</p>
      </div>
    </div>
  );
};

export default Card;
