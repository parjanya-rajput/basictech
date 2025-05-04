'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from "@/constants/ProjectsData";
import type { Project } from "@/constants/ProjectsData";

interface ProductCardProps {
  project: Project;
}

const ProductCard = ({ project }: ProductCardProps) => {
  return (
    // ... existing ProductCard JSX ...
    <div className="bg-white/80 shadow-lg rounded-xl flex flex-col gap-4 hover:shadow-xl transition-all z-10">
      <div className="relative w-full h-40">
        <Image
          src={project.logo}
          alt={project.projectName}
          fill
          className="object-cover rounded-lg" // Changed from object-contain for better fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between px-5 py-3"> {/* Adjusted padding/layout */}
        <div className="flex-grow mb-2 sm:mb-0"> {/* Adjusted for flex layout */}
          <p className="text-gray-800 text-sm font-semibold font-agrandir-heavy">
            {project.projectName}
          </p>
          <p className="text-gray-500 text-xs font-agrandir font-bold"> {/* Adjusted text size */}
            {project.subtitle}
          </p>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="bg-green-500 text-white text-xs py-2 px-3 rounded-full self-center sm:self-auto hover:bg-green-600 whitespace-nowrap" // Adjusted padding/rounding/whitespace
        >
          View Page
        </Link>
      </div>
    </div>
  );
};

// ProductCards now accepts filtered projects as a prop
interface ProductCardsProps {
  filteredProjects: Project[];
}

const ProductCards = ({ filteredProjects }: ProductCardsProps) => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Adjusted grid for responsiveness */}
        {filteredProjects.map((project) => (
          <ProductCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

interface OtherProjectsProps {
  currentProjectSlug: string;
}

const OtherProjects = ({ currentProjectSlug }: OtherProjectsProps) => {
  // Filter out the current project
  const filteredProjects = projects.filter(p => p.slug !== currentProjectSlug);

  return (
    <div className="max-w-5xl mx-auto mt-16 md:mt-24"> {/* Added top margin */}
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6 font-neue">
        Other Projects
      </h2>
      {/* Pass the filtered list to ProductCards */}
      <ProductCards filteredProjects={filteredProjects} />
    </div>
  );
};

export default OtherProjects;