import TransactionsTable from "@/components/TransactionsTable";

const Transactions = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        {/* <p className="my-5">All Transactions</p> */}
        <div className="flex text-sm gap-x-7 mb-4">
          <p className="border-b border-main text-main p-3">All</p>
          <p className="p-3">Weekly</p>
          <p className="p-3"> Monthly</p>
        </div>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Transactions;
