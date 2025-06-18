import { twMerge } from 'tailwind-merge';

export type HeadingProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({ type, children, className }: HeadingProps) => {
  switch (type) {
    case 'h1':
      return (
        <h1 className={twMerge('text-text-primary py-4 text-4xl font-bold', className)}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={twMerge('text-text-primary py-3 text-3xl font-bold', className)}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={twMerge('text-text-primary py-3 text-xl font-bold', className)}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={twMerge('text-text-primary py-3 text-lg font-bold', className)}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={twMerge('text-text-primary py-2 text-base font-bold', className)}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={twMerge('text-text-primary py-2 text-sm font-bold', className)}>
          {children}
        </h6>
      );
  }
};
