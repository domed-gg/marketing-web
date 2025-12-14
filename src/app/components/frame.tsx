import { PropsWithChildren, type FC, type ReactNode } from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import { cn } from '@/lib/utils';

export const Frame: FC<PropsWithChildren<{ navItems?: ReactNode; activeUrl?: string; }>> = ({ navItems, children, activeUrl = '/' }) => (
  <main className='bg-gray-950'>
    {/* Navigation */}
    <nav className='fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm'>
      <div className='layout flex h-16 items-center justify-between'>
        <UnstyledLink href='/' className='text-xl font-bold text-white'>
          domed
        </UnstyledLink>
        <div className='flex items-center gap-8'>
          {navItems}
          <ButtonLink href='https://domed.app/login' variant='primary' size='sm' className='px-5 rounded-2xl'>
            Login
          </ButtonLink>
        </div>
      </div>
    </nav>

    {/* Content */}
    {children}

    {/* Footer */}
    <footer className='border-t border-gray-800 bg-gray-950'>
      <div className='layout py-12'>
        <div className='flex flex-col items-start justify-between gap-6 md:flex-row'>
          <p className='text-xl font-bold text-white'>domed</p>
          <div className="flex flex-col gap-8">
            <p className='text-xs font-bold text-white uppercase tracking-widest'>Legal</p>

            <UnstyledLink
              href='/privacy'
              className={cn('text-sm text-gray-500 transition-colors hover:text-white', { 'text-white': activeUrl === '/privacy' })}
            >
              Privacy
            </UnstyledLink>
            <UnstyledLink
              href='/terms'
              className={cn('text-sm text-gray-500 transition-colors hover:text-white', { 'text-white': activeUrl === '/terms' })}
            >
              Terms
            </UnstyledLink>

          </div>
          <div className="flex flex-col gap-8">
            <p className='text-xs font-bold text-white uppercase tracking-widest'>developers</p>

            <div className='flex gap-8'>
              <UnstyledLink
                href='https://docs.domed.gg'
                className='text-sm text-gray-500 transition-colors hover:text-white'
              >
                Documentation
              </UnstyledLink>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start justify-start gap-6 md:flex-row border-t border-gray-800 mt-8 pt-8'>
          <p className='text-sm text-gray-500'>
            © {new Date().getFullYear()} domed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </main>
);