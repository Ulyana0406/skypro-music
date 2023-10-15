import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainCenterblok from "./components/TrackList";
import NavMenu from "./components/NavMenu";
import AudioPlayer from "./components/AudioPlayer";
import Search from "./components/Search";
import Filter from "./components/Filter";
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <div className="centerblock__content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                  <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="content__playlist playlist">
              <MainCenterblok
                trackName="Guilt"
                trackAuthor="Nero"
                album="Weloome Reality"
                trackTime="4.44"
              />
              <MainCenterblok
                trackName="Elektro"
                trackAuthor="Dynoro, Outwork, Mr. Gee"
                album="Elektro"
                trackTime="2.22"
              />
              <MainCenterblok
                trackName="I’m Fire"
                trackAuthor="Ali Bakgor"
                album="I’m Fire"
                trackTime="2.22"
              />
              <MainCenterblok
                trackName="Non Stop"
                trackAuthor="Стоункат, Psychopath"
                album="Weloome Reality"
                trackTime="4.12"
              />
              <MainCenterblok
                trackName="Run Run"
                trackAuthor="Jaded, Will Clarke, AR/CO"
                album="Run Run"
                trackTime="2.54"
              />
              <MainCenterblok
                trackName="Eyes on Fire"
                trackAuthor="Blue Foundation, Zeds Dead"
                album="Eyes on Fire"
                trackTime="5.20"
              />
              <MainCenterblok
                trackName="Mucho Bien"
                trackAuthor="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
                album="Mucho Bien"
                trackTime="3.41"
              />
              <MainCenterblok
                trackName="Knives n Cherries"
                trackAuthor="minthaze"
                album="Captivating"
                trackTime="1.48"
              />
              <MainCenterblok
                trackName="How Deep Is Your Love"
                trackAuthor="Calvin Harris, Disciples"
                album="How Deep Is Your Love"
                trackTime="3.32"
              />
              <MainCenterblok
                trackName="Morena"
                trackAuthor="Tom Boxer"
                album="Soundz Made in Romania"
                trackTime="3.36"
              />
            </div>
          </div>
          <SideBar />
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
