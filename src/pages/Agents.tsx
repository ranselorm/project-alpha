import { Input } from "antd";

const Agents = () => {
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
        <div className="mx-auto text-center my-5">
          <Input
            placeholder="Search for AI Agents here..."
            className="bg-gray-100 !px-4 !py-2 border-none focus:ring-2 focus:ring-main !rounded-full !w-[50%]"
          />
        </div>
        <section>
          <div className="bg-white w-full flex justify-between items-center px-4 py-2 rounded-lg ">
            <div>Showing(21)</div>
            <div>Name</div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Agents;
