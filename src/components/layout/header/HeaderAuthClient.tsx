'use client';

import { useEffect, useState } from 'react';

import { Link } from '@/components/links/Link';
import { Credentials } from '@/utils/types';

type HeaderAuthClientProps = {
  credentials: Credentials | null;
  hostname: string;
};

export const HeaderAuthClient = ({ hostname, credentials }: HeaderAuthClientProps) => {
  const [encodedUrl, setEncodedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure no state change if already set
      setEncodedUrl(encodeURIComponent(window.location.href));
    }
  }, []);

  if (!encodedUrl) {
    return null; // Prevent rendering until the encoded URL is set
  }

  return (
    <span
      className="flex gap-2 justify-self-start text-base col-span-2 row-start-2 col-start-1 md:row-start-1
        md:col-start-3 h-min md:justify-self-end self-center items-center"
    >
      <span className="text-base border-r border-white pr-2 wrap break-anywhere sm:break-word">
        <span>Welcome,</span> {credentials ? credentials.user.email : 'Guest'}
      </span>

      <Link
        href={`${hostname}/${credentials ? 'api/logout' : 'login'}?redirect-uri=${encodedUrl}`}
        className="text-white visited:text-white active:text-black hover:text-white"
        prefetch={false}
      >
        <span className="text-base">{credentials ? 'Logout' : 'Login'}</span>
      </Link>
    </span>
  );
};
