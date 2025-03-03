import Card from "@/components/Card";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";

const Dashboard = () => {
  return (
    <main>
      <div className="container mx-container p-4">
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
        <section className="flex gap-x-4">
          <LineChart
            labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            data={[10, 30, 20, 40, 60, 50, 90]}
          />
          <PieChart
            labels={[
              "Electronics",
              "Clothing",
              "Home & Garden",
              "Books",
              "Toys",
            ]}
            data={[30, 25, 20, 15, 10]}
          />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
