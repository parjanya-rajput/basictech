'use client';

import { useRouter } from 'next/navigation';

const useNavigateWithScroll = () => {
  const router = useRouter();

  const navigateWithScroll = (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return navigateWithScroll;
};

export default useNavigateWithScroll;
