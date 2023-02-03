import React from "react";
import "../style/button.scss";

type buttonProps = {
  className: any;
  pressed: boolean;
  children: string;
};

function MenuButton({ className, pressed = false, children }: any) {
  return (
    <div className={className}>
      <div className={"buttonWrapper"}>{children}</div>
    </div>
  );
}

export { MenuButton };
