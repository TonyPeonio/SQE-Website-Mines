import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata(
	"Research",
	"Quantum research projects from SQE at Colorado School of Mines.",
);

export default function PapersLayout({
	children,
}: { children: React.ReactNode }) {
	return <>{children}</>;
}
