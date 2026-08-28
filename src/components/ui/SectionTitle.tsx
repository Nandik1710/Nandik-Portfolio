type SectionTitleProps = {
  eyebrow: string;
  children: React.ReactNode;
  id?: string;
};

export function SectionTitle({ eyebrow, children, id }: SectionTitleProps) {
  return (
    <>
      <p className="section-kicker">{eyebrow} <span>✦</span></p>
      <h2 id={id}>{children}</h2>
    </>
  );
}
