import React from "react";
import "./App.css";
import sideBar from "./components/SideBar";
import mainCenterblok from "./components/TrackList";
import NavMenu from "./components/NavMenu";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <mainCenterblok />
          <sideBar />
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
