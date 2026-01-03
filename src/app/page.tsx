import { TerminalHero } from "@/components/ui/TerminalHero";
import { SystemShowcase } from "@/components/ui/SystemShowcase";
import { OperationalHistory } from "@/components/ui/OperationalHistory";
import { ActivityLog } from "@/components/ui/ActivityLog";

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-12">
      <TerminalHero />
      <OperationalHistory />
      <SystemShowcase />
      <ActivityLog />
    </div>
  );
}
