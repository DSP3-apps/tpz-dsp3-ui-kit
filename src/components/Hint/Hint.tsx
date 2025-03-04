import { twMerge } from 'tailwind-merge';

export type HintProps = {
  className?: string;
  children: React.ReactNode;
};

export const Hint = ({ className, children }: HintProps) => {
  return (
    <div
      className={twMerge(
        'block mb-2 sm:text-static-base md:text-static-lg text-gray-500',
        className,
      )}
    >
      {children}
    </div>
  );
};
