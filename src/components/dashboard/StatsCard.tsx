const statsData = [
  {
    title: "Total Revenue",
    value: "$348,261",
    change: "+2.45%",
    changeType: "positive",
    bgClass: "from-primary/20 to-primary/10",
  },
  {
    title: "Total Balance",
    value: "$15,708.98",
    change: "-4.75%",
    changeType: "negative",
  },
  {
    title: "Total Sessions",
    value: "7,415,644",
    change: "-1.91%",
    changeType: "negative",
  },
  {
    title: "Total Conversion",
    value: "10.87%",
    change: "+4.15%",
    changeType: "positive",
  },
];

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statsData.map((stat, index) => (
        <div
          key={stat.title}
          className={`p-4 rounded-lg bg-card shadow-sm ${
            index === 0 ? 'bg-gradient-to-br ' + stat.bgClass : ''
          } animate-fade-in`}
        >
          <h3 className="text-muted text-sm mb-1">{stat.title}</h3>
          <p className="text-2xl font-semibold text-card-foreground">{stat.value}</p>
          <span
            className={`text-sm ${
              stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {stat.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;