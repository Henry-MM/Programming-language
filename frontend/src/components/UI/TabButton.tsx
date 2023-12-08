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
  const activeStyle = active ? "text-[#282c34] bg-stone-200" : "";

  return (
    <button
      className={`
        inline-block
        p-1
        text-white-600
        bg-[#282c34]
        rounded-t-xl
        active
        dark:bg-gray-800
        dark:text-blue-500
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
        {Icon ? <Icon className="text-inherit" /> : ""}
      </div>
    </button>
  );
}

export default TabButton;
