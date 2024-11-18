const transactions = [
  {
    id: 1,
    product: "TSLA",
    amount: "$348,261.12",
    date: "Jan 12, 2024",
    status: "Processing",
    user: "Olivia Berg",
    email: "olivia@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  },
  {
    id: 2,
    product: "MSFT",
    amount: "$15,708.98",
    date: "Jan 13, 2024",
    status: "Success",
    user: "Michael Chen",
    email: "michael@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  },
  {
    id: 3,
    product: "GOOGL",
    amount: "$7,415.64",
    date: "Jan 13, 2024",
    status: "Success",
    user: "Sarah Wilson",
    email: "sarah@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  },
];

const TransactionsTable = () => {
  return (
    <div className="rounded-lg bg-card shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Transaction History</h3>
        <button className="px-4 py-2 bg-primary rounded-lg text-white flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-muted border-b border-primary/10">
              <th className="p-4">Product</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Purchased by</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-primary/10">
                <td className="p-4 text-card-foreground">{transaction.product}</td>
                <td className="p-4 text-card-foreground">{transaction.amount}</td>
                <td className="p-4 text-card-foreground">{transaction.date}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    transaction.status === "Processing" 
                      ? "bg-primary/10 text-primary"
                      : transaction.status === "Success"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={transaction.avatar} 
                      alt={transaction.user}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-card-foreground">{transaction.user}</p>
                      <p className="text-muted text-sm">{transaction.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <button className="p-2 hover:bg-primary/10 rounded-lg">
                    <MoreHorizontal className="h-5 w-5 text-muted" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;