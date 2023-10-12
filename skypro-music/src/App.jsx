import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainCenterblok from "./components/TrackList";
import NavMenu from "./components/NavMenu";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <MainCenterblok />
          <SideBar />
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
