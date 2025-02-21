export type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <article className="relative my-6 flex w-96 flex-col rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
      {children}
    </article>
  );
};
