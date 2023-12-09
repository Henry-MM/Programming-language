import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

function DefaultText({ children, className }: PropsWithChildren<Props>) {
  return <p className={`p-5 ${className}`}>{children}</p>;
}

export default DefaultText;
