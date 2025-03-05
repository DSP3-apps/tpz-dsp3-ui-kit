import { twMerge } from 'tailwind-merge';

import { ExtendProps } from '@/utils';

type Props = {
  children: React.ReactNode;
};

export type HintProps = ExtendProps<'div', Props>;

export const Hint = ({ className, children, ...props }: HintProps) => {
  return (
    <p
      aria-label="hint message"
      className={twMerge('block mb-2 text-lg text-text-secondary', className)}
      {...props}
    >
      {children}
    </p>
  );
};
