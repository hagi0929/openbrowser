import React from "react";
import "./module.scss";
import Card from "../../style/Component.Style";

function UserBadge(props: any) {
  return (
    <div className="UserBadge">
      <img
        className="UserBadge__avatar"
        src={props.avatar ? props.avatar : "https://i.imgur.com/8Km9tLL.png"}
        alt="avatar"
      />
      <div className="UserBadge__text">
        <div className="UserBadge__text__name">
          {props.name ? props.name : "GoonchimeSakdono"}
        </div>
        <div className="UserBadge__text__id">
          @{props.username ? props.username : "lupiGuy"}
        </div>
      </div>
    </div>
  );
}

function ArticleCard(props: any) {
  return (
    <Card className="ArticleCard">
      <div className="ArticleCard__header">
        {props.profile ? props.profile : <UserBadge />}
      </div>
      <div className="ArticleCard__content">
        {props.name ? props.name : "hi iam lupi and i like to code"}
      </div>
    </Card>
  );
}

function TabFrame(props: any) {
  return (
    <div className="frame">
      <div className="frame-header">
        {props.header ? props.header : "none"}
      </div>
      <div className="frame-content">
        {props.children ? props.children : "none"}
      </div>
    </div>
  );
}

export { UserBadge, ArticleCard, TabFrame };
