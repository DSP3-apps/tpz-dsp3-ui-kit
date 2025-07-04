import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

import { ExtendProps } from '@/utils';

type Props = {
  children: ReactNode;
};

export type ExternalLinkProps = ExtendProps<'a', Props>;

export const ExternalLink = ({ href, className, children, ...props }: ExternalLinkProps) => (
  <a
    {...props}
    className={twMerge(
      `cursor-pointer text-link hover:decoration-[max(3px,_.1875rem,_.12em)] hover:text-link-hover
      visited:text-link-visited focus:decoration-[max(3px,_.1875rem,_.12em)]
      decoration-[max(1px,_.0625rem)] underline-offset-[0.1578em] underline outline-none
      focus:text-focus-text focus:bg-focus inline-block`,
      className,
    )}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);
