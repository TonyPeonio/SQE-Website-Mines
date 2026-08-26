import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { rootMetadata } from "@/data/site";

export const metadata = rootMetadata;

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/Poppins-Medium.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<link rel="manifest" href="/favicon/site.webmanifest" />
			</head>
			<body
				className={`bg-[#181818] font-calsans ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
