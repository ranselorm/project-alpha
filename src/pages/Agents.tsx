import AgentCard from "@/components/AgentCard";
import { Input, Select, Space } from "antd";

const channels = [
  { title: "Voice Call", icon: "material-symbols-light:call-outline-sharp" },
  { title: "Text Message", icon: "material-symbols-light:sms-outline-rounded" },
  { title: "Whatsapp", icon: "ic:sharp-whatsapp" },
];

const Agents = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <section className="p-4">
      <main className="container mx-auto">
        {/* header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2"> AI Agents Directory</h1>
          <p>
            Your One-Stop Destination to Explore and Learn About Modern AI
            Agents
          </p>
        </div>

        <section className="flex items-center justify-between gap-8 my-6">
          <div className="w-full">
            <Input
              placeholder="Search for AI Agents here..."
              className="bg-gray-100 !px-4 !py-2 border-none focus:ring-2 focus:ring-red-500 !rounded-full !w-[100%]"
            />
          </div>
          <div className="bg-white w-[40%] flex justify-between items-center px-4 py-2 rounded-full">
            <p className="text-sm">Showing(21)</p>
            <Space wrap className="!focus:ring-2 !focus:ring-main">
              <Select
                defaultValue="Voice Call"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "voice", label: "Voice Call" },
                  { value: "whatsapp", label: "Whatsapp" },
                  { value: "text", label: "Text Message" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </Space>
          </div>
        </section>
        <section className="bg-white p-4 grid grid-cols-3 rounded-md gap-4">
          <AgentCard
            title="Voice Call"
            icon="material-symbols-light:call-outline-sharp"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum explicabo."
            channels={channels}
          />
          <AgentCard
            title="Text Message"
            icon="material-symbols-light:sms-outline-sharp"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum explicabo."
            channels={channels}
          />
          <AgentCard
            title="Whatsapp"
            icon="ic:sharp-whatsapp"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum explicabo."
            channels={channels}
          />

          <AgentCard
            title="Voice Call"
            icon="material-symbols-light:call-outline-sharp"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum explicabo."
            channels={channels}
          />
          <AgentCard
            title="Text Message"
            icon="material-symbols-light:sms-outline-sharp"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum explicabo."
            channels={channels}
          />
          <AgentCard
            title="Whatsapp"
            icon="ic:sharp-whatsapp"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum explicabo."
            channels={channels}
          />
        </section>
      </main>
    </section>
  );
};

export default Agents;
