import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <div className="my-4 flex w-full max-w-[1280px] flex-col items-center rounded-lg border border-pink-800 bg-secondary p-6 text-primary">
      {children}
    </div>
  );
};
export { Container };
