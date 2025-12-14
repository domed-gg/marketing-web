import { PropsWithChildren, type FC, type ReactNode } from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

export const Frame: FC<PropsWithChildren<{ navItems?: ReactNode; }>> = ({ navItems, children }) => (
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
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <p className='text-xl font-bold text-white'>domed</p>
          <div className='flex gap-8'>
            <UnstyledLink
              href='/privacy'
              className='text-sm text-white transition-colors hover:text-white'
            >
              Privacy
            </UnstyledLink>
            <UnstyledLink
              href='#'
              className='text-sm text-gray-500 transition-colors hover:text-white'
            >
              Terms
            </UnstyledLink>
            <UnstyledLink
              href='#'
              className='text-sm text-gray-500 transition-colors hover:text-white'
            >
              Documentation
            </UnstyledLink>
          </div>
          <p className='text-sm text-gray-500'>
            © {new Date().getFullYear()} domed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </main>
);