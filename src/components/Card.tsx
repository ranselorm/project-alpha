import { Icon } from "@iconify/react/dist/iconify.js";

interface CardProps {
  title: string;
  value: number;
  bgColor?: boolean;
  percentage?: number;
  icon?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  bgColor,
  percentage,
  icon,
}) => {
  return (
    <div
      className={`${
        bgColor ? "bg-[#edeefc]" : "bg-[#e6f1fd]"
      } p-6 flex flex-col gap-x-5 rounded-md`}
    >
      <p className="text-sm mb-3">{title}</p>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold tracking-widest">{value}</p>
        <div
          className={`flex items-center gap-x-2 ${
            percentage && percentage < 1 ? "text-red-500" : "text-green-500"
          }`}
        >
          <p className="text-sm">
            {typeof percentage === "number"
              ? percentage < 1
                ? `-${percentage}`
                : `+${percentage}`
              : ""}
          </p>
          {percentage && percentage < 1 ? (
            <Icon icon="guidance:down-arrow" className="text-xs" />
          ) : (
            <Icon icon="guidance:up-arrow" className="text-xs" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
