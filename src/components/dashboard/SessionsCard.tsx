const sessionData = [
  { country: "United States", sessions: 85, flag: "🇺🇸" },
  { country: "Japan", sessions: 70, flag: "🇯🇵" },
  { country: "Indonesia", sessions: 45, flag: "🇮🇩" },
  { country: "South Korea", sessions: 38, flag: "🇰🇷" },
];

const SessionsCard = () => {
  return (
    <div className="p-4 rounded-lg bg-card shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Sessions by Country</h3>
        <button className="p-2 hover:bg-primary/10 rounded-lg">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      <div className="space-y-4">
        {sessionData.map((item) => (
          <div key={item.country} className="flex items-center gap-4">
            <span className="text-xl">{item.flag}</span>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-card-foreground">{item.country}</span>
                <span className="text-card-foreground">{item.sessions}%</span>
              </div>
              <div className="h-2 bg-primary/10 rounded-full">
                <div 
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${item.sessions}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionsCard;