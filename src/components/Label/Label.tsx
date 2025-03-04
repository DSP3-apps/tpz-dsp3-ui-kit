import { twMerge } from 'tailwind-merge';

export type LabelProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export const Label = ({ id, className, children }: LabelProps) => {
  return (
    <label
      htmlFor={id}
      role={'presentation'}
      className={twMerge('block sm:text-static-base md:text-static-lg text-black mb-1', className)}
    >
      {children}
    </label>
  );
};
