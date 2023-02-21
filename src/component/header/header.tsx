import React from "react";
import styled from "styled-components";
import "./header.scss"
import LogoFull from "../../component/etc/logo";
import Card from "../../style/Component.Style";
import UserBadge from "../etc/module";

// write styled component for header bar search bar

function Header() {
  return (
    <div className="headerWrapper">
      <div className="header__logo">
        <LogoFull full={true}/>
      </div>
      <Card className="header__search">
        <input type="text" className={"header__search__input"} />
      </Card>
      <div className="header__profile">
        <UserBadge/>
      </div>
    </div>
  );
}

export default Header;