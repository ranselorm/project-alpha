import Card from "@/components/Card";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import TransactionsTable from "@/components/TrnasactionsTable";

const Dashboard = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 bg-white p-4 rounded-b-md">
            <Card
              title="Earnings"
              value={4700}
              bgColor="red-100"
              icon="lineicons:dollar"
            />
            <Card
              title="Users"
              value={1200}
              bgColor="blue-100"
              icon="mdi:users-outline"
            />
            <Card
              title="Reports"
              value={22}
              bgColor="blue-100"
              icon="mage:chart-up"
            />
            <Card
              title="Transactions"
              value={46}
              bgColor="blue-100"
              icon="grommet-icons:transaction"
            />
          </div>
        </section>
        <section className="flex gap-x-4 items-center justify-center my-8">
          <div className="md:w-4/6 h-full">
            <p className="mb-4">Weekly New Users</p>
            <div className="bg-white shadow-md rounded-lg p-4 h-96">
              <LineChart
                labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                data={[10, 30, 20, 40, 60, 50, 90]}
              />
            </div>
          </div>
          <div className="md:w-2/6 h-full">
            <p className="mb-4">Daily New Users</p>
            <div className="bg-white h-96 shadow-md rounded-lg p-4 flex items-center justify-center">
              <PieChart data={[30, 25, 20, 15, 10]} />
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
