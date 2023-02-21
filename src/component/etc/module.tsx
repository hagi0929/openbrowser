import React from "react";
import "./module.scss";
import Card from "../../style/Component.Style";

function UserBadge() {
  return (
    <div className="UserBadge">
        <img className="UserBadge__avatar" src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/dFGD/image/MH85tgXHFdoO6f8R3N_VcIjHStw.png" alt="avatar" />
        <div className="UserBadge__text">
          <div className="UserBadge__text__name">Hello World</div>
          <div className="UserBadge__text__id">@LupiGuy</div>
        </div>
    </div>
  );
}

export default UserBadge;