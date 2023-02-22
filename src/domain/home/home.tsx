import React from "react";
import "./home.scss";
import { ArticleCard, TabFrame } from "../../component/etc/module";

function Home() {
  return (
    <TabFrame header={"Home"}>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </TabFrame>
  );
}

export default Home;