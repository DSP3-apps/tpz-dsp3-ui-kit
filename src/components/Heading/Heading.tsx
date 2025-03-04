export type HeadingProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
};

export const Heading = ({ type, children }: HeadingProps) => {
  switch (type) {
    case 'h1':
      return <h1 className="py-4 text-4xl font-bold text-text-primary">{children}</h1>;
    case 'h2':
      return <h2 className="py-3 text-3xl font-bold text-text-primary">{children}</h2>;
    case 'h3':
      return <h3 className="py-3 text-xl font-bold text-text-primary">{children}</h3>;
    case 'h4':
      return <h4 className="py-3 text-lg font-bold text-text-primary">{children}</h4>;
    case 'h5':
      return <h5 className="py-2 text-base font-bold text-text-primary">{children}</h5>;
    case 'h6':
      return <h6 className="py-2 text-sm font-bold text-text-primary">{children}</h6>;
  }
};
