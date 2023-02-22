import React from "react";
import {useRef, useEffect} from "react";
import "./style/App.scss";
import Home from "./domain/home/home";
import {Route, Routes, NavLink, Navigate} from "react-router-dom";
import Header from "./component/header/header";
import Card from "./style/Component.Style";
import {Icon} from "@iconify/react";
import MenuLeft from "./component/menu/menuLeft";
import Profile from "./domain/profile/profile";

function App() {
  // get a ref

  return (
    <div className="App">
      <div className="App-header">
        <Header/>
      </div>
      <div className="App-content">
        <div className={"App-content__left"}>
          <MenuLeft/>
        </div>
        <div className={"App-content__center"}>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            {/*<Route path="/bookmarks" element={Card} />*/}
            {/*<Route path="/settings" element={Card} />*/}
          </Routes>
        </div>
        <div className={"App-content__right"}></div>
      </div>
    </div>
  );
}

export default App;
