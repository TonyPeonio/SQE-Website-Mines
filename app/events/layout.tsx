import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata(
  "Events",
  "Upcoming and past events from SQE at Colorado School of Mines.",
);

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative min-h-screen bg-white">{children}</div>;
}
