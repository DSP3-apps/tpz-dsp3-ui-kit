import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

import { ExtendProps } from '@/utils';

type Props = {
  href: string | object;
};

export type LinkProps = ExtendProps<typeof NextLink, Props>;

export const Link = ({ href, className, children, ...props }: LinkProps) => (
  <NextLink
    {...props}
    className={twMerge(
      `cursor-pointer text-link hover:decoration-[max(3px,_.1875rem,_.12em)] hover:text-link-hover
      visited:text-link-visited active:text-black focus:decoration-[max(3px,_.1875rem,_.12em)]
      decoration-[max(1px,_.0625rem)] underline-offset-[0.1578em] underline outline-none
      focus:text-focus-text focus:bg-focus inline-block`,
      className,
    )}
    href={href}
  >
    <>{children}</>
  </NextLink>
);
