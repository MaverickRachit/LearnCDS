
'use client';

import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { Logo } from '@/components/logo';
import { useIsMobile } from '@/hooks/use-mobile';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen flex-col">
       <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <div className="mr-6 flex items-center">
              <Logo />
          </div>
          {!isMobile && <MainNav />}
          <div className="flex flex-1 items-center justify-end gap-4">
              <UserNav />
          </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        {children}
      </main>
        {isMobile ? (
          <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card">
            <MainNav />
          </div>
         ) : null }
    </div>
  );
}
