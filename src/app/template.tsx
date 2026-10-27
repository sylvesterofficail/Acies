/** Every page change fades the new page up into place (CSS, so it starts before JS loads). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
