import React from "react";
import { Card } from "../components/card";
import Footer from "../components/footer";
import FadeInWrapper from "../components/FadeInWrapper";
import Header from "../components/Header";
import { siteConfig, sectionDividerClassName } from "@/data/site";

export default function WorkPage() {
	return (
		<div className="relative">
			<Header />

			<FadeInWrapper>
				<div className="bg-white px-12">
					<div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-12">
						<div className="text-left mb-12">
							<h1 className="text-4xl font-bold text-mines-navy mb-2">Our Lab</h1>
							<p className="text-mines-silver text-lg">{siteConfig.lab.description}</p>
							<p className="text-mines-silver/80 text-sm mt-2">{siteConfig.lab.location}</p>
							<div className="mt-8">
								<div className="text-center">
									<div className="relative w-full h-96 rounded-lg overflow-hidden border border-mines-silver/40">
										<img
											src="/community/lab.jpeg"
											alt="SQE Quantum Lab at Mines"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
								<Card>
									<article className="relative w-full h-full p-4 md:p-8">
										<div className="flex items-center justify-between gap-2">
											<div className="text-xs text-mines-silver">
												<span>LAB STATUS</span>
											</div>
										</div>
										<h2
											id="featured-lab"
											className="mt-4 text-3xl font-bold text-mines-navy group-hover:text-mines-navy-dark sm:text-4xl font-display"
										>
											Building Our Quantum Lab
										</h2>
										<p className="mt-4 leading-8 duration-150 text-mines-silver group-hover:text-mines-navy">
											We are actively growing SQE&apos;s lab capabilities and expanding student-led quantum projects. Our current focus is securing funding, scaling our equipment, and creating more hands-on opportunities for members.
										</p>
									</article>
								</Card>

								<Card>
									<article className="relative w-full h-full p-4 md:p-8">
										<div className="flex items-center justify-between gap-2">
											<div className="text-xs text-mines-silver">
												<span>ACADEMIC PROGRAMS</span>
											</div>
										</div>
										<h2 className="mt-4 text-2xl font-bold text-mines-navy group-hover:text-mines-navy-dark sm:text-3xl font-display">
											Quantum Engineering at Mines
										</h2>
										<p className="mt-4 leading-8 duration-150 text-mines-silver group-hover:text-mines-navy">
											Mines offers a growing suite of quantum engineering pathways, including a bachelor&apos;s degree in Quantum Systems Engineering, a minor in Quantum Engineering, and master&apos;s programs — both thesis and non-thesis — in quantum software and quantum hardware engineering.
										</p>
									</article>
								</Card>
							</div>
						</div>
					</div>
					<div className="pt-10"></div>
					<br />
				</div>
			</FadeInWrapper>
			<div className={sectionDividerClassName} />
			<Footer />
		</div>
	);
}
