import React from "react";
import Card from "../../style/Component.Style";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./menuLeft.scss";

function MenuLeft() {
  return (
    <Card className={"App-content__left__menu-bar"}>
      <NavLink
        to="/home"
        className={({ isActive }) => {
          return (
            "App-content__left__menu-bar__element" + (isActive ? " active" : "")
          );
        }}
      >
        <Icon
          className={"App-content__left__menu-bar__element__icon"}
          icon="material-symbols:home-rounded"
          color="#c6cefb"
        />
        <p className={"App-content__left__menu-bar__element__text"}>Home</p>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => {
          return (
            "App-content__left__menu-bar__element" + (isActive ? " active" : "")
          );
        }}
      >
        <Icon
          className={"App-content__left__menu-bar__element__icon"}
          icon="mingcute:user-3-fill"
          color="#c6cefb"
        />
        <p className={"App-content__left__menu-bar__element__text"}>Profile</p>
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) => {
          return (
            "App-content__left__menu-bar__element" + (isActive ? " active" : "")
          );
        }}
      >
        <Icon
          className={"App-content__left__menu-bar__element__icon"}
          icon="material-symbols:bookmark-rounded"
          color="#c6cefb"
        />
        <p className={"App-content__left__menu-bar__element__text"}>
          Bookmarks
        </p>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => {
          return (
            "App-content__left__menu-bar__element" + (isActive ? " active" : "")
          );
        }}
      >
        <Icon
          className={"App-content__left__menu-bar__element__icon"}
          icon="material-symbols:settings-rounded"
          color="#c6cefb"
        />
        <p className={"App-content__left__menu-bar__element__text"}>Settings</p>
      </NavLink>
    </Card>
  );
}

export default MenuLeft;