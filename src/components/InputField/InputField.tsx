import { twMerge } from 'tailwind-merge';

import { ExtendProps } from '@/utils';

type Props = {
  id: string;
  type?: 'text' | 'email' | 'number' | 'password';
};

export type InputFieldProps = ExtendProps<'input', Props>;

export const InputField = ({ type = 'text', id, className, ...props }: InputFieldProps) => {
  return (
    <input
      className={twMerge(
        `border-2 border-black p-1 w-full h-[2.5em] focus:outline focus:outline-[3px]
        focus:outline-yellow-500 focus:shadow-[inset_0_0_0_2px] sm:text-static-base md:text-static-lg `,
        className,
      )}
      type={type}
      id={id}
      {...props}
    />
  );
};
