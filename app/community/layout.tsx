import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata(
	"Community",
	"Events and community highlights from SQE at Colorado School of Mines.",
);

export default function CommunityLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-white">
			{children}
		</div>
	);
}
