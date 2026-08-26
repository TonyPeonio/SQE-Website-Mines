import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata(
	"Join",
	"Join the Society of Quantum Engineers at Colorado School of Mines.",
);

export default function ApplyLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen black">
			{children}
		</div>
	);
}
