'use client'; // Error components must be Client Components

import * as React from 'react';

import TextButton from '@/components/buttons/TextButton';

import { Frame } from '@/app/components/frame';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <Frame>
      <main>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-white'>
          <h1 className='mt-8 text-xl'>Oops, something went wrong!</h1>
          <TextButton variant='basic' onClick={reset} className='mt-4'>
            Try again
          </TextButton>
        </div>
      </main>
    </Frame>
  );
}
