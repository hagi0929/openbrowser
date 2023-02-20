import React from "react";
import "./style/App.scss";
import {} from "./domain/home/home";
import {Route, Routes, NavLink, BrowserRouter, Navigate} from "react-router-dom";
import Header from "./component/header/header";
import Card from "./style/Component.Style";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-content">
        <div className={"App-content__left"}>
          <Card>
            <NavLink
              to="/home"
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              Profile
            </NavLink>
            <NavLink
              to="/bookmarks"
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              Bookmarks
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              Settings
            </NavLink>
          </Card>
        </div>
        <div className={"App-content__center"}></div>
        <div className={"App-content__right"}></div>

          <Routes>
            <Route
              path="/"
              element={<Navigate to="/home" />}
            />
            {/*<Route path="/home" element={Card} />*/}
            {/*<Route path="/profile" element={Card} />*/}
            {/*<Route path="/bookmarks" element={Card} />*/}
            {/*<Route path="/settings" element={Card} />*/}
          </Routes>
      </div>
    </div>
  );
}

export default App;
