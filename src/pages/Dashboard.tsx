import Card from "@/components/Card";

const Dashboard = () => {
  return (
    <main>
      <div className="container mx-container p-4">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
