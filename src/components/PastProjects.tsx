'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/constants/ProjectsData';

const PastProjects = () => {
  return (
    <section id="PastProject" className="py-10 bg-gradient-to-b from-blue-100 to-green-100 p-4">
      <h2 className="text-center text-2xl font-bold text-blue-600 font-neue">
        Past Projects
      </h2>
      <div className="w-full px-20 mx-auto mt-6 flex flex-col gap-10">
        {projects.slice(0, 3).map((project, index) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug || index}
            className="block max-h-[50vh] relative rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
          >
            <div className="relative w-full h-[50vh]">
              <Image
                src={project.logo}
                alt={`${project.projectName} Background`}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-bl from-green-800/50 via-transparent to-transparent" />

            {/* Project info */}
            <div className="absolute bottom-0 left-0 p-10 text-white max-w-xl">
              <h3 className="text-2xl font-extrabold font-inter">
                {project.projectName}
              </h3>
              <p className="mt-2 opacity-90 font-inter">
                {project.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PastProjects;
