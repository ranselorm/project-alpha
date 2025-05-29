import { Icon } from "@iconify/react/dist/iconify.js";

const AgentCard = ({
  title,
  icon,
  description,
  channels,
}: {
  title: string;
  icon: string;
  description: string;
  channels: any;
}) => {
  return (
    <div className="bg-[#f3f4f6] p-4 rounded-md -hover:bg-red-400 transform transition-transform duration-300 hover:scale-105">
      <div className="flex gap-x-2  items-center ">
        <div className="rounded-full bg-transparent p-1 flex items-center justify-center border border-main">
          <Icon icon={icon} className="text-xl text-main" />
        </div>
        <p className="font-bold">{title}</p>
      </div>
      <p className="text-xs my-3">{description}</p>
      <div className="flex items-center gap-x-2">
        <div className="flex items-center justify-center text-main cursor-pointer">
          <Icon icon="iconamoon:like-thin" />
          <p className="text-xs">5</p>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          {channels &&
            channels.map((item: any, index: number) => (
              <div
                className="py-1 px-1 border border-main text-[10px] w-max rounded-full flex items-center gap-x-1"
                key={index}
              >
                <Icon icon={item.icon} className="text-base text-main" />
                {item.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
