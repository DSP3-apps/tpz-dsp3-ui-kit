import { twMerge } from 'tailwind-merge';

import { ExtendProps } from '@/utils';

export type InputProps = ExtendProps<'input'>;

export const Input = ({ type = 'text', className, ...props }: InputProps) => {
  return (
    <input
      className={twMerge(
        `box-border border-2 border-border-input p-1 w-full h-[2.5rem] focus:outline focus:outline-[3px]
        focus:outline-focus focus:shadow-[inset_0_0_0_2px] focus:outline-offset-0 text-lg appearance-none`,
        className,
      )}
      type={type}
      {...props}
    />
  );
};
