import { useEffect, useState } from 'react';
import { SideNavigation, AppHeader } from './';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="flex flex-col h-screen">
      <AppHeader />

      <div className="w-full overflow-y-hidden flex-grow  flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-8">
        <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
          <SideNavigation />
        </div>
        <div className="w-full overflow-y-scroll h-8/10 lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 bg-white border border-gray-400 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};
