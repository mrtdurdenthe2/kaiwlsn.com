import type { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 md:px-0">
      <main className="prose prose-slate lg:prose-lg dark:prose-invert w-full max-w-3xl">
        {children}
      </main>
      <footer className="my-16 text-sm text-gray-500 text-center w-full" >
        Kai Wilson © {new Date().getFullYear()} — All rights reserved.
      </footer>
    </div>
  );
}
