import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const UserProfile = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar className="h-9 w-9 cursor-pointer ring-2 ring-primary/20 transition-all hover:ring-primary">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-6 bg-card shadow-lg backdrop-blur-sm">
        <div className="flex gap-6">
          <Avatar className="h-14 w-14 ring-2 ring-primary/20">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-card-foreground">John Doe</h4>
            <p className="text-sm text-muted-foreground">Product Manager</p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
            <p className="text-xs text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserProfile;