import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  Icon?: IconType;
}

function TabButton({
  children,
  className: classes,
  onClick,
  active,
  Icon,
  ...props
}: PropsWithChildren<Props>) {
  const activeStyle = active
    ? "text-btn-blue bg-btn-yellow hover:bg-btn-yellow-hover font-semibold"
    : "bg-[#282c34] hover:bg-[#30343e] text-white";

  return (
    <button
      className={`
        inline-block
        p-1
        rounded-t-xl
        active
        border
        border-solid
        ${activeStyle}
        ${classes}
      `}
      onClick={onClick}
      {...props}
    >
      <div className="flex justify-center items-center gap-1">
        {children}
        {Icon ? <Icon className="text-inherit font-semibold" /> : ""}
      </div>
    </button>
  );
}

export default TabButton;
