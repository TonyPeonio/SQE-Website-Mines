import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata(
  "Qiskit Fall Fest",
  "Join SQE at Colorado School of Mines for Qiskit Fall Fest — a week of quantum computing workshops, November 9–13, 2025.",
);

export default function QiskitFallFestLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white">
      {children}
    </div>
  );
}
