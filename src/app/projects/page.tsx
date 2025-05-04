"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/constants/ProjectsData';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the first project by default
        if (projects.length > 0) {
            router.push(`/projects/${projects[0].slug}`);
        }
    }, [router]);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-xl font-semibold">Loading Project...</h1>
            </div>
        </div>
    );
}