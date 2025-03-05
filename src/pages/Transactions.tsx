import TransactionsTable from "@/components/TransactionsTable";

const Transactions = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <p className="text-lg font-semibold my-5">All Transactions</p>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Transactions;
