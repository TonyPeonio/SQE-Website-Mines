import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata(
	"Team",
	"Meet the SQE team at Colorado School of Mines.",
);

export default function MembersLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen black">
			{children}
		</div>
	);
}
