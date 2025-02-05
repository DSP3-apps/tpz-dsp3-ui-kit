export type ButtonProps = {
  color?: 'blue' | 'red' | 'green';
  children: React.ReactNode;
};

export const Button = ({ color = 'blue', children }: ButtonProps) => {
  let colorClasses = 'bg-govukBlue';

  if (color === 'red') {
    colorClasses = 'bg-govukRed';
  } else if (color === 'green') {
    colorClasses = 'bg-govukGreen';
  }

  return (
    <button
      className={`${colorClasses} rounded-md px-6 py-2 text-xl font-medium text-white transition-colors`}
    >
      {children}
    </button>
  );
};
