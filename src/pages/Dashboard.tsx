import Card from "@/components/Card";
import LineChart from "@/components/LineChart";

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
        <section>
          <LineChart
            labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
            data={[10, 40, 30, 60, 50, 90]}
          />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
