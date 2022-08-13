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

      <div className="w-full overflow-y-hidden flex-grow  flex flex-wrap mx-auto px-2 pt-8 lg:pt-16">
        <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal mt-8">
          <SideNavigation />
        </div>
        <div className="w-full overflow-y-scroll h-9/10 lg:w-4/5 mt-6 px-4 lg:mt-0 text-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
};
