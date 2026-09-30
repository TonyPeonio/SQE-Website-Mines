import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata(
  "Resources",
  "Quantum software and hardware learning resources, Mines quantum research groups, job boards, academic programs, and conference funding from SQE at Colorado School of Mines.",
);

export default function ResourcesLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white">
      {children}
    </div>
  );
}
