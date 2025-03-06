import { twMerge } from 'tailwind-merge';

import { ExtendProps } from '@/utils';

export type HintProps = ExtendProps<'div'>;

export const Hint = ({ className, children, ...props }: HintProps) => {
  return (
    <div className={twMerge('block mb-2 text-lg text-text-secondary', className)} {...props}>
      {children}
    </div>
  );
};
