export type ParagraphProps = {
  children: React.ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="pb-4 text-sm text-text-primary">{children}</p>;
};
