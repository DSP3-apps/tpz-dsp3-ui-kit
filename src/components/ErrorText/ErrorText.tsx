import { twMerge } from 'tailwind-merge';

export type ErrorTextProps = {
  className?: string;
  children: React.ReactNode;
};

export const ErrorText = ({ className, children }: ErrorTextProps) => {
  return (
    <p
      className={twMerge(
        'block mb-3 sm:text-static-base md:text-static-lg text-red-500 font-bold',
        className,
      )}
    >
      {children}
    </p>
  );
};
