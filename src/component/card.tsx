import React from "react";
import "../style/card.scss";
import { MenuButton } from "./button";
import { Logo } from "./assets";
import styled from "styled-components";

function MenuBarLeft() {
  const FLogo = styled(Logo)`
    width: 200px;
    height: 55px;
  `;
  const Button = styled(MenuButton)`
    width: 200px;
    height: 55px;
    font-size: 26px;
  `;
  return (
    <div className="menuBarLeftWrapper">
      <div className={"menuBarTop"}>
        <FLogo />
        <Button>
          <div className={"buttonFormat"}>Home</div>
        </Button>
        <Button>
          <div className={"buttonFormat"}>Bookmark</div>
        </Button>
        <Button>
          <div className={"buttonFormat"}>Profile</div>
        </Button>
      </div>
    </div>
  );
}

function Posts() {
  return <div className="postWrapper"></div>;
}

function TempCard() {
  return <div className="tempCard"></div>;
}

export { MenuBarLeft, Posts, TempCard };
