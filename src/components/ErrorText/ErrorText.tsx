import { twMerge } from 'tailwind-merge';

import { ExtendProps } from '@/utils';

export type ErrorTextProps = ExtendProps<'p'>;

export const ErrorText = ({ className, children, ...props }: ErrorTextProps) => {
  return (
    <p className={twMerge('mb-3 text-base text-error font-bold', className)} {...props}>
      {children}
    </p>
  );
};
