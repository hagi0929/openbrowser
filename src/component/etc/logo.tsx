import React from "react";
import styled from "styled-components";
import "./logo.scss";
// @ts-ignore
import logo from "../../assets/img/icon-park-solid_blockchain.svg";
// @ts-ignore
import logoFull from "../../assets/img/Group 1.svg";

function Logo(props: any) {
  return (
    <div className="logo">
      {props.full ? <img src={logoFull} /> : <img src={logo} />}
    </div>
  );
}

export default Logo;