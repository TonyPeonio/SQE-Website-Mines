import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata(
	"About",
	"Learn about the Society of Quantum Engineers at Colorado School of Mines.",
);

export default function AboutLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-white">
			{children}
		</div>
	);
}
