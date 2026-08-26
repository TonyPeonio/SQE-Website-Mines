import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata(
	"Our Lab",
	"Explore SQE's quantum lab at Colorado School of Mines.",
);

export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen black">
			{children}
		</div>
	);
}
