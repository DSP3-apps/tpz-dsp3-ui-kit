'use client';

import { ComponentType } from 'react';

import { FaHouse } from 'react-icons/fa6';

import { HeaderAuthClient } from './HeaderAuthClient';
import { HeaderNavClient } from './HeaderNavClient';

import { DefraLogo } from '@/components/images/DefraLogo';
import { EaLogo } from '@/components/images/EaLogo';
import { ExternalLink } from '@/components/links/ExternalLink';
import { Link } from '@/components/links/Link';
import { Credentials, NavLink } from '@/utils/types';

type HeaderProps = {
  credentials: Credentials | null;
  dspUrl: string;
  appName: string;
  navLinks: NavLink[];
  headerNavClientComponent?: ComponentType<{ navLinks: NavLink[] }>;
};

export const Header = ({
  credentials,
  dspUrl,
  appName,
  navLinks,
  headerNavClientComponent = HeaderNavClient,
}: HeaderProps) => {
  const HeaderNav = headerNavClientComponent;

  return (
    <header className="bg-black w-full text-white border-b-2 border-brand">
      <div
        className="grid grid-rows-[min-content_min-content] grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 md:gap-y-0 py-2
          px-3 border-b border-gray-500"
      >
        <ExternalLink
          href="https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs"
          className="justify-center text-white visited:text-white active:text-black hover:text-white text-base"
        >
          <span className="flex flex-col sm:flex-row sm:items-center gap-1 flex-1">
            <DefraLogo className="w-[50px] h-[50px]" />
            <span>Department for Environment Food &amp; Rural Affairs</span>
          </span>
        </ExternalLink>

        <ExternalLink
          href="/"
          className="flex gap-1 text-base items-center text-white md:justify-self-center justify-self-end h-min
            self-center visited:text-white active:text-black hover:text-white"
        >
          <FaHouse className="shrink-0" />
          <span>Data Services Platform</span>
        </ExternalLink>

        {dspUrl ? <HeaderAuthClient hostname={dspUrl} credentials={credentials} /> : <></>}
      </div>

      <div
        className="w-full bg-white grid grid-cols-[1fr_min-content]
          2xs:grid-cols-[min-content_minmax(0,_1fr)_min-content] grid-rows-1 sm:grid-rows-none py-2 px-1
          sm:px-3 items-center gap-y-4 gap-2"
      >
        <ExternalLink
          href="https://www.gov.uk/government/organisations/environment-agency"
          className="justify-self-start text-black hidden 2xs:block min-w-32"
        >
          <EaLogo className="text-nowrap overflow-hidden pl-2" />
        </ExternalLink>

        <Link
          href="/"
          className="text-center font-bold text-base sm:text-lg text-black visited:text-black active:text-black
            hover:text-black"
        >
          {appName}
        </Link>

        {/* <HeaderNavClient navLinks={navLinks} /> */}
        <HeaderNav navLinks={navLinks} />
      </div>
    </header>
  );
};
