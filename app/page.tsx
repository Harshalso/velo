'use client';

import dynamic from 'next/dynamic';

const VeloApp = dynamic(() => import('../velo-react-project/src/App'), {
  ssr: false,
});

export default function HomePage() {
  return <VeloApp />;
}
