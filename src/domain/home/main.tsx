import React from "react";
import "../../style/main.scss";
import { MenuBarLeft, Posts, TempCard } from "../../component/card";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className={"applicationContainer"}>
          <div className={"homeLayoutLeft"}>
            <div className={"menuLeft"}>
              <MenuBarLeft />
            </div>
          </div>
          <div className={"homeLayoutMain"}>
            <div className={"topBar"}>
              <TempCard />
            </div>
            <div className={"contents"}>
              <div className={"uploadContent"}>
                <TempCard />
              </div>
              <div className={"viewContents"}>
                <div className="card-wrapper">
                  <Posts />
                </div>
                <div className="card-wrapper">
                  <Posts />
                </div>
                <div className="card-wrapper">
                  <Posts />
                </div>
                <div className="card-wrapper">
                  <Posts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
