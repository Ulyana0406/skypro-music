import { SideBar } from "./../../components/SideBar/SideBar";
import { MainCenterblok } from "./../../components/TrackList/TrackList";
import { NavMenu } from "./../../components/NavMenu/NavMenu";
import { AudioPlayer } from "./../../components/AudiopPayer/AudioPlayer";
import { Search } from "./../../components/Search/Search";
import { Filter } from "./../../components/FIlter/Filter";
import * as S from "./../../App.styles";
export const MainPage = () => {
  return (
    <S.Container>
      <S.Main>
        <NavMenu />
        <S.MainCentrBlock>
          <Search />
          <S.Centerh2>Треки</S.Centerh2>
          <Filter />
          <S.CenterblockContent>
            <S.ContentTitle>
              <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
              <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
              <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
              <S.PlaylistTitleCol4>
                <S.PlayListTitleSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </S.PlayListTitleSvg>
              </S.PlaylistTitleCol4>
            </S.ContentTitle>
          </S.CenterblockContent>
          <S.ContentPlayList>
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
          </S.ContentPlayList>
        </S.MainCentrBlock>
        <SideBar />
      </S.Main>
      <AudioPlayer />
      <footer className="footer"></footer>
    </S.Container>
  );
};
