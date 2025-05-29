import { Icon } from "@iconify/react/dist/iconify.js";

const AgentCard = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
  description: string;
}) => {
  return (
    <div className="bg-[#f3f4f6] p-4 rounded-md">
      <div className="flex gap-x-2  items-center ">
        <div className="rounded-full bg-transparent p-1 flex items-center justify-center border border-main">
          <Icon icon={icon} className="text-xl" />
        </div>
        <p className="font-bold">{title}</p>
      </div>
      <p className="text-xs my-3">{description}</p>
      <div>
        <div className="flex items-center text-main">
          <Icon icon="iconamoon:like-thin" />
          <p className="text-xs">5</p>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
