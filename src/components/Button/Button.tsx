import { twMerge } from 'tailwind-merge';

import { ExtendProps } from '@/utils';

type Props = {
  type?: 'primary' | 'secondary' | 'inverse';
  children: React.ReactNode;
};

export type ButtonProps = ExtendProps<'button', Props>;

const VARIANTS = {
  primary: 'bg-brand hover-enabled:bg-green-600 text-white shadow-green-700',
  secondary: 'bg-slate-100 hover-enabled:bg-slate-200 text-black shadow-slate-300',
  inverse: 'bg-white hover-enabled:bg-slate-100 text-brand shadow-green-700',
};

// NOTE: some of the styles are applied in `tailwind.css`, under `Button Styles`
export const Button = ({ type = 'primary', className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        `sm:w-auto text-lg relative flex w-full outline-none items-center border-transparent justify-center
        border-2 text-center active-enabled:translate-y-[2px] focus:shadow-focus focus:border-focus
        focus:shadow-[inset_0_0_0_1px] focus-idle:border-focus focus-idle:text-focus-text
        focus-idle:bg-focus focus-idle:shadow-border-input disabled:opacity-50
        disabled:hover:cursor-not-allowed button`,
        VARIANTS[type],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
