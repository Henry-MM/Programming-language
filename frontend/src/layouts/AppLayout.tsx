import { PropsWithChildren } from "react";
import "./AppLayout.css";

function AppLayout({ children }: PropsWithChildren) {
  return (
    <div id="AppLayout" className="AppLayout bg-[#282c34] text-white">
      {children}
    </div>
  );
}

export default AppLayout;
