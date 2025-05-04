import Image from 'next/image'; // Import Next.js Image
import { notFound } from 'next/navigation';

import { projects } from '@/constants/ProjectsData';
import type { ClientInfo } from '@/constants/ProjectsData';

import TechStackPage from '@/components/TechStack';
// import ProcessWeFollow from '@/components/ProcessWeFollow';
import Contactus from '@/components/Contactus';
import Faq from "@/components/Faq";
import OtherProjects from '@/components/OtherProjects';


import defaultChallengeImage from '@/assets/default_challenge.svg.png'
import defaultDesignImage from '@/assets/default_design.svg.png'
import defaultSolutionImage from '@/assets/default_solution.svg fill.png'


const glassEffect = "backdrop-blur-lg bg-white/50 border border-white/30 shadow-xl rounded-lg";

// Header Section Component
const HeaderSection = ({ logo, projectName, subtitle }: { logo: string; projectName: string; subtitle: string }) => (
    <div className="text-center mb-10 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-100/60 to-white/60 backdrop-blur-sm">
        <div className="relative h-10 w-full flex justify-center mb-6"> {/* Added relative positioning */}
            <Image
                src={logo}
                alt={`${projectName} Logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 200px"
            />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 font-neue">{projectName}</h1>
        <h2 className="text-2xl text-cyan-500 font-medium font-neue">{subtitle}</h2>
    </div>
);

// Client Info Section Component
const ClientInfoSection = ({ clientInfo }: { clientInfo: ClientInfo[] }) => (
    <div className={`grid grid-cols-2 md:grid-cols-5 gap-3 mb-10 border-b-2 border-white/60 rounded-lg ${glassEffect}`}>
        {clientInfo.map((item, index) => (
            <div key={index} className="p-4 text-center">
                <div className="text-blue-600 font-bold text-sm mb-1 font-agrandir-heavy">{item.label}</div>
                <div className="text-gray-700 text-sm font-agrandir">{item.value}</div>
            </div>
        ))}
    </div>
);

// Business Requirement Section Component (Handles string or string[])
const BusinessRequirementSection = ({ businessRequirement }: { businessRequirement: string | string[] }) => (
    <div className="mb-12">
        <h3 className="text-2xl text-blue-600 font-bold text-center mb-4 font-neue">Business Requirement</h3>
        <div className={`p-6 rounded-xl ${glassEffect}`}>
            {typeof businessRequirement === 'string' ? (
                <p className="text-gray-700 leading-relaxed font-agrandir">{businessRequirement}</p>
            ) : (
                businessRequirement.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed font-agrandir mb-4 last:mb-0">
                        {paragraph}
                    </p>
                ))
            )}
        </div>
    </div>
);

// Features Section Component
const FeaturesSection = ({ features, featureImage }: { features: string[]; featureImage: string }) => (
    <div className="mb-12">
        <div className={`p-6 rounded-xl ${glassEffect} grid grid-cols-1 md:grid-cols-3 gap-6 items-center`}>
            <div>
                <h3 className="text-2xl text-blue-600 font-bold mb-4 font-agrandir-heavy">Features</h3>
                <div className="space-y-2 mb-6">
                    {features.map((feature, index) => (
                        <div key={index} className="text-gray-700 font-agrandir">• {feature}</div>
                    ))}
                </div>
            </div>
            <div className="relative mt-8 md:mt-0 col-span-2 flex justify-center items-center h-64 md:h-80"> {/* Added relative positioning and height */}
                <Image
                    src={featureImage} // Assumes path is correct
                    alt="Feature visual representation"
                    fill
                    className="object-contain rounded-lg shadow-md"
                    sizes="(max-width: 768px) 100vw, 66vw"
                />
            </div>
        </div>
    </div>
);

// Challenge Section Component
const ChallengeSection = ({ challenge }: { challenge: string }) => (
    <div className="mb-12">
        <div className={`p-6 rounded-xl ${glassEffect}`}>
            <h3 className="text-2xl text-blue-600 font-bold text-center mb-4 font-agrandir-heavy">The Challenge</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-48 h-48 md:w-60 md:h-60 flex-shrink-0"> {/* Added relative positioning */}
                    <Image src={defaultChallengeImage} alt="Challenge Icon" fill className="object-contain" />
                </div>
                <div className="w-full">
                    {challenge.split('|').map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed mb-4 font-agrandir">
                            {paragraph.trim()}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// Design Section Component
const DesignSection = ({ design, designImage }: { design: string; designImage: string }) => (
    <div className="mb-12">
        <div className={`p-6 rounded-xl ${glassEffect}`}>
            <h3 className="text-2xl text-blue-600 font-bold text-center mb-4 font-agrandir-heavy">The Design</h3>
            <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                <div className="relative w-48 h-48 md:w-60 md:h-60 flex-shrink-0"> {/* Added relative positioning */}
                    {/* Use fallback image if designImage is missing or use imported default */}
                    <Image src={designImage || defaultDesignImage} alt="Design representation" fill className="object-contain" />
                </div>
                <div className="w-full">
                    {design.split('|').map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed mb-4 font-agrandir">
                            {paragraph.trim()}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// Solution Section Component
const SolutionSection = ({ solution, solutionPoints, solutionImage }: { solution: string; solutionPoints: string[]; solutionImage: string }) => (
    <div className="mb-12">
        <div className={`p-6 rounded-xl ${glassEffect}`}>
            <h3 className="text-2xl text-blue-600 font-bold text-center mb-4 font-agrandir-heavy">The Solution</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-48 h-48 md:w-60 md:h-60 flex-shrink-0"> {/* Added relative positioning */}
                    {/* Use fallback image if solutionImage is missing or use imported default */}
                    <Image src={solutionImage || defaultSolutionImage} alt="Solution representation" fill className="object-contain" />
                </div>
                <div className="w-full">
                    <p className="text-gray-700 leading-relaxed mb-4 font-agrandir">{solution}</p>
                    <div className="space-y-2">
                        {solutionPoints.map((point, index) => (
                            <div key={index} className="text-gray-700 font-agrandir">• {point}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const BackgroundBlobs = () => (
        <>
            <div
                className="absolute top-1/6 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
                style={{ background: "radial-gradient(circle at top right, yellow, rgba(240, 249, 255, 0.4))" }}
            />
            <div
                className="absolute z-0 left-1/2 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
                style={{ background: "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))" }}
            />
            <div
                className="absolute z-0 right-0 top-1/3 rounded-full blur-3xl h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
                style={{ background: "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))" }}
            />
            <div
                className="absolute z-0 left-0 top-2/3 rounded-full blur-3xl h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
                style={{ background: "radial-gradient(circle at top right, yellow, rgba(240, 249, 255, 0.4))" }}
            />
            <div
                className="absolute z-0 right-0 bottom-1/12 rounded-full blur-3xl h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
                style={{ background: "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))" }}
            />
        </>
    );

    return (
        <div className="relative min-h-screen overflow-hidden"> {/* Added overflow-hidden */}
            <BackgroundBlobs />
            <div className="relative z-10 max-w-6xl mx-auto p-4 md:p-6"> {/* Ensure content is above blobs */}
                {/* Render sections using project data */}
                <HeaderSection logo={project.logo} projectName={project.projectName} subtitle={project.subtitle} />
                <ClientInfoSection clientInfo={project.clientInfo} />
                <BusinessRequirementSection businessRequirement={project.businessRequirement} />
                <FeaturesSection features={project.features} featureImage={project.featureImage} />
                <ChallengeSection challenge={project.challenge} />
                <DesignSection design={project.design} designImage={project.designImage} />
                <SolutionSection solution={project.solution} solutionPoints={project.solutionPoints} solutionImage={project.solutionImage} />

                {/* Include other shared sections */}
                <TechStackPage />
                {/* Pass current slug to OtherProjects */}
                <OtherProjects currentProjectSlug={project.slug} />
                {/* <ProcessWeFollow /> */}
                <Contactus />
                <Faq />
            </div>
        </div>
    );
}