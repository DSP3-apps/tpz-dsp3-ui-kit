import { twMerge } from 'tailwind-merge';

import { ExtendProps } from '@/utils';

export type CardProps = ExtendProps<'article'>;

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <article
      className={twMerge(
        'relative my-2 flex w-full flex-col rounded-lg border border-slate-200 bg-white p-2 shadow-sm',
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
};
