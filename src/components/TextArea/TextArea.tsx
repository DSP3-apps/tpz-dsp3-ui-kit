import { twMerge } from 'tailwind-merge';

import { ExtendProps } from '@/utils';

export type TextAreaProps = ExtendProps<'textarea'>;

export const TextArea = ({ rows = 5, className, ...props }: TextAreaProps) => {
  return (
    <textarea
      className={twMerge(
        `box-border min-h-[2.5rem] border-2 border-border-input p-1 w-full focus:outline focus:outline-[3px]
        focus:outline-focus focus:shadow-[inset_0_0_0_2px] focus:outline-offset-0 text-lg appearance-none
        disabled:opacity-50 disabled:text-inherit disabled:bg-transparent disabled:cursor-not-allowed`,
        className,
      )}
      rows={rows}
      {...props}
    />
  );
};
