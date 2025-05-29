import BarChat from "@/components/BarChat";
import Card from "@/components/Card";
import LineChart from "@/components/LineChart";
import Example from "@/components/Pie";
import PieChart from "@/components/PieChart";
import TransactionsTable from "@/components/TransactionsTable";

const Dashboard = () => {
  return (
    <main>
      <div className="container mx-auto">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 bg-white p-4 rounded-md">
            <Card
              title="Number of conversations"
              value={4700}
              bgColor
              icon="lineicons:dollar"
              percentage={11.01}
            />
            <Card
              title="Visits"
              value={1200}
              icon="mdi:users-outline"
              percentage={0.02}
            />
            <Card
              title="New Users"
              value={22}
              bgColor
              icon="mage:chart-up"
              percentage={15.03}
            />
            <Card
              title="Active Users"
              value={46}
              icon="grommet-icons:transaction"
              percentage={6.08}
            />
          </div>
        </section>
        <section className="flex gap-x-4 items-center justify-center my-8">
          <div className="md:w-4/6 h-full">
            <p className="mb-4">Weekly New Users</p>
            <div className="bg-white shadow-md rounded-lg p-4 h-96">
              {/* <LineChart
                labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                data={[10, 30, 20, 40, 60, 50, 90]}
              /> */}
              <BarChat />
            </div>
          </div>
          <div className="md:w-2/6 h-full">
            <p className="mb-4">Daily New Users</p>
            <div className="bg-white h-96 shadow-md rounded-lg p-4 flex items-center justify-center">
              {/* <PieChart data={[30, 25, 20, 15, 10]} /> */}
              <Example />
            </div>
          </div>
        </section>
        <div>
          <p className="mb-4">Recent Transactions</p>
          <TransactionsTable />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
